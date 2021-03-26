import { useState, useEffect } from 'react'
import DefaultTemplate from 'templates/Default'
import PaymentBanner from 'components/PaymentsBanner'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Heading from 'components/Heading'
import PaddingWrapper from 'components/PaddingWrapper'
import GridWrapper from 'components/GridWrapper'
import ProductCard from 'components/ProductCard'
import Input from 'components/Input'
import { MdKeyboardArrowDown } from 'react-icons/md'
import {
  DescriptionWrapper,
  ProductSection,
  ProductAside,
  ProductReference,
  ProductPrice,
  ProductInstallments,
  QuantTitle,
  SizesWrapper,
  PersonalizationButtonSelector,
  PersonalizationInput,
  PersonalizationInputsWrapper,
  SizeButton,
  Add2Favorites,
  MiniCartWrapper
} from 'styles/pages/produto'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { useStateContext } from 'context'
import ProductGalery from 'components/ProductGalery'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import priceHandler from 'utils/handlePrice'
import QuantController from 'components/QuantController'
import Button from 'components/Button'
import { cepMask } from 'utils/masks'
import { getAllProducts, getProductBySlug } from 'graphql/queryes/produtos'
import { getCategorias } from 'graphql/queryes/categorias'
import { initializeApollo } from 'utils/apollo'
import { useCookies } from 'react-cookie'
import api from 'services/api'
import SuccessAddPopUp from 'components/SuccessAddPopUp'
import MiniCart from 'components/MiniCart'
import Head from 'next/head'
import { ProductProps } from 'types/ProductProps'

type ProductPageProps = {
  tierList: ProductProps[]
  product: {
    id: number
    nome: string
    resumo: string
    preco: number
    descricao: string
    kid: boolean
    slug: string
    marca: {
      nome: string
    }
    tamanho: {
      adulto?: {
        P: boolean
        M: boolean
        G: boolean
        GG: boolean
        XG: boolean
        XXG: boolean
      }
      kid?: {
        catorze: boolean
        dezesseis: boolean
        dezoito: boolean
        vinte: boolean
        vinte_e_dois: boolean
        vinte_e_quatro: boolean
        vinte_e_seis: boolean
        vinte_e_oito: boolean
      }
    }
    cover: {
      url: string
    }
    galeria: Array<{
      url: string
    }>
  }
  categorias: Array<{
    nome: string
  }>
}

type ShippingOption = {
  id: number
  name: string
  price: number
  delivery_time: number
}

const ProductPage = (props: ProductPageProps) => {
  if (!props.product) {
    return null
  }
  return <Produto {...props} />
}

const Produto = ({ product, categorias, tierList }: ProductPageProps) => {
  const {
    id,
    resumo,
    nome,
    preco,
    descricao,
    cover,
    marca,
    galeria,
    slug,
    kid,
    tamanho
  } = product

  //console.log(resumo)
  //console.log(product.resumo)
  //console.log(product)

  const { server } = useStateContext()
  const [quant, setQuant] = useState(1)
  const [cep, setCep] = useState('')
  const [size, setSize] = useState('')
  const [personalization, setPersonalization] = useState({
    isCustom: false,
    name: '',
    number: ''
  })
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([])
  const [showUnauthorized, setShowUnauthorized] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const { cart, setCart } = useStateContext()
  // const [isFavorite, setIsFavorite] = useState(false)
  const [cookie, setCookie] = useCookies(['user'])
  const [showMiniCart, setShowMiniCart] = useState(false)

  useEffect(() => {
    // alert('Aloohhh')
    if (cep.length === 8) {
      shippingCalculate()
    }
    setQuant(1)
    setSize('')
  }, [slug])

  const shippingCalculate = async () => {
    if (cep.length < 8) {
      alert('cep incompleto')
      return
    }
    await api
      .post('/shipping/calculate', {
        cep,
        products: [
          {
            id: product.id,
            quant
          }
        ]
      })
      .then((response) => {
        const { data } = response

        const sedexShipping = data.find(
          (option: any) => option.name === 'SEDEX'
        )

        setShippingOptions([sedexShipping])
      })
      .catch((err) => {
        alert('algo deu errado, por favor tente novamente')
        //console.log(err)
      })
  }

  const handleAddQuant = () => {
    setQuant(quant + 1)
  }

  const handleSubQuant = () => {
    setQuant(quant - 1)
  }

  const addToCart = () => {
    if (size === '') {
      alert('Por favor selecione o tamanho desejado')
      return
    }
    const product = {
      id,
      nome,
      preco,
      descricao,
      cover,
      slug,
      size,
      custom: {
        isCustom: personalization.isCustom,
        name: personalization.name,
        number: personalization.number
      },
      quant
    }
    // //console.log(product)
    const products = [...cart.products, product]
    let total = 0.0

    products?.map((item) => {
      total = total + item.preco * item.quant
    })

    setCart({
      products,
      total
    })

    setShowMiniCart(true)
    // alert('produto adicionado')
  }

  const checkIsFavorite = () => {
    let isFavorite = false
    if (!cookie.token) {
      return
    }
    const { favorites } = cookie.user

    if (!favorites) {
      return
    }

    favorites.map((productId: number) => {
      //console.log(productId, id)
      if (productId == id) {
        isFavorite = true
      }
    })

    return isFavorite
  }

  const favorite = async () => {
    if (!cookie.token) {
      setShowUnauthorized(true)
      return
    }
    if (!checkIsFavorite()) {
      const data = {
        produtos: [...cookie.user.favorites, id]
      }

      await api
        .put('/favoritos', data, {
          headers: {
            Authorization: `Bearer ${cookie.token}`
          }
        })
        .then(() => {
          setShowSuccess(true)
          setCookie('user', {
            ...cookie.user,
            favorites: [...cookie.user.favorites, id]
          })
        })
        .catch((err) => console.log(err))
      return
    } else {
      const data = {
        produtos: cookie.user.favorites.filter(
          (productId: number) => productId != id
        )
      }
      //console.log(data)
      await api
        .put('/favoritos', data, {
          headers: {
            Authorization: `Bearer ${cookie.token}`
          }
        })
        .then(() => {
          alert('produto excluido da sua lista de favoritos')
          setCookie('user', {
            ...cookie.user,
            favorites: cookie.user.favorites.filter(
              (productId: number) => productId != id
            )
          })
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <>
      <Head>
        <title>{product.nome}</title>
        <meta property="og:title" content={product.nome} />
        <meta name="description" content={product.resumo} />
        <meta property="og:description" content={product.resumo} />
        <meta
          property="og:image"
          content={
            process.env.NEXT_PUBLIC_SERVER_HOST ||
            'localhost:1337' + product.cover.url
          }
        />
      </Head>
      <SuccessAddPopUp
        show={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

      <MiniCartWrapper show={showMiniCart}>
        <MiniCart
          onClose={() => {
            setShowMiniCart(false)
          }}
        />
      </MiniCartWrapper>
      <DefaultTemplate categorias={categorias}>
        <PaymentBanner />
        <PaddingWrapper>
          <HorizontalPaddingWrapper>
            <ProductSection>
              <ProductGalery images={galeria} />
              <ProductAside>
                <Heading
                  lineBottom={false}
                  fontSize="xxxlarge"
                  fontWeight="bold"
                  textAlign="left"
                  margin="0 0 10px 0"
                >
                  {nome?.toUpperCase()}
                </Heading>
                <ProductReference>
                  <b>Referencia:</b> {slug}
                </ProductReference>

                <Add2Favorites onClick={favorite}>
                  {checkIsFavorite() ? (
                    <>
                      <FaHeart /> &nbsp; Remover dos favoritos
                    </>
                  ) : (
                    <>
                      <FiHeart /> &nbsp; Adicionar aos favoritos
                    </>
                  )}
                </Add2Favorites>
                {/* <br />
              <br /> */}
                <hr />

                <ProductPrice>
                  {priceHandler.priceNumberToReadblePrice(preco)}
                </ProductPrice>

                <ProductInstallments>
                  {`ou então 3x de ${priceHandler.priceNumberToReadblePrice(
                    preco / 3
                  )}`}
                </ProductInstallments>

                <QuantTitle>Quantidade</QuantTitle>

                <QuantController
                  handleAdd={handleAddQuant}
                  handleSub={handleSubQuant}
                  quant={quant}
                />

                <Button
                  onClick={addToCart}
                  className="add2cart"
                  fill="red100"
                  radius={50}
                >
                  ADD CARRINHO
                </Button>
                <br />
                <PersonalizationButtonSelector
                  onClick={() =>
                    setPersonalization((prevState) => ({
                      ...prevState,
                      isCustom: !personalization.isCustom
                    }))
                  }
                >
                  PERSONALIZAÇÃO &nbsp; <MdKeyboardArrowDown />
                </PersonalizationButtonSelector>

                {personalization.isCustom && (
                  <PersonalizationInputsWrapper>
                    <PersonalizationInput
                      width={180}
                      placeholder="NOME"
                      value={personalization.name}
                      onChange={(e) =>
                        setPersonalization((prevState) => ({
                          ...prevState,
                          name: e.target.value
                        }))
                      }
                    />
                    <PersonalizationInput
                      width={100}
                      maxLength={2}
                      placeholder="NÚMERO"
                      value={personalization.number}
                      onChange={(e) =>
                        setPersonalization((prevState) => ({
                          ...prevState,
                          number: e.target.value
                        }))
                      }
                    />
                  </PersonalizationInputsWrapper>
                )}

                {/* tamanhos */}
                <SizesWrapper>
                  {kid ? (
                    <>
                      {tamanho?.kid?.catorze && (
                        <SizeButton
                          selected={size === '14' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('14')
                          }}
                          color={size === 'M' ? 'white100' : 'black'}
                        >
                          14
                        </SizeButton>
                      )}

                      {tamanho?.kid?.dezesseis && (
                        <SizeButton
                          selected={size === '16' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('16')
                          }}
                          color={size === 'M' ? 'white100' : 'black'}
                        >
                          16
                        </SizeButton>
                      )}

                      {tamanho?.kid?.dezoito && (
                        <SizeButton
                          selected={size === '18' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('18')
                          }}
                          color={size === 'M' ? 'white100' : 'black'}
                        >
                          18
                        </SizeButton>
                      )}

                      {tamanho?.kid?.vinte && (
                        <SizeButton
                          selected={size === '20' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('20')
                          }}
                          color={size === 'M' ? 'white100' : 'black'}
                        >
                          20
                        </SizeButton>
                      )}

                      {tamanho?.kid?.vinte_e_dois && (
                        <SizeButton
                          selected={size === '22' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('22')
                          }}
                          color={size === 'M' ? 'white100' : 'black'}
                        >
                          22
                        </SizeButton>
                      )}

                      {tamanho?.kid?.vinte_e_quatro && (
                        <SizeButton
                          selected={size === '24' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('24')
                          }}
                          color={size === 'M' ? 'white100' : 'black'}
                        >
                          24
                        </SizeButton>
                      )}

                      {tamanho?.kid?.vinte_e_seis && (
                        <SizeButton
                          selected={size === '26' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('26')
                          }}
                          color={size === 'M' ? 'white100' : 'black'}
                        >
                          26
                        </SizeButton>
                      )}

                      {tamanho?.kid?.vinte_e_oito && (
                        <SizeButton
                          selected={size === '28' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('28')
                          }}
                          color={size === 'M' ? 'white100' : 'black'}
                        >
                          28
                        </SizeButton>
                      )}
                    </>
                  ) : (
                    <>
                      {tamanho?.adulto?.P && (
                        <SizeButton
                          selected={size === 'P' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('P')
                          }}
                          color={size === 'M' ? 'white100' : 'black'}
                        >
                          P
                        </SizeButton>
                      )}
                      {tamanho?.adulto?.M && (
                        <SizeButton
                          selected={size === 'M' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('M')
                          }}
                          color={size === 'M' ? 'white100' : 'black'}
                        >
                          M
                        </SizeButton>
                      )}
                      {tamanho?.adulto?.G && (
                        <SizeButton
                          selected={size === 'G' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('G')
                          }}
                          color={size === 'M' ? 'white100' : 'black'}
                        >
                          G
                        </SizeButton>
                      )}
                      {tamanho?.adulto?.GG && (
                        <SizeButton
                          selected={size === 'GG' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('GG')
                          }}
                          color={size === 'GG' ? 'white100' : 'black'}
                        >
                          GG
                        </SizeButton>
                      )}

                      {tamanho?.adulto?.XG && (
                        <SizeButton
                          selected={size === 'XG' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('XG')
                          }}
                          color={size === 'XG' ? 'white100' : 'black'}
                        >
                          XG
                        </SizeButton>
                      )}

                      {tamanho?.adulto?.XXG && (
                        <SizeButton
                          selected={size === 'XXG' && true}
                          className="size-button"
                          onClick={() => {
                            setSize('XXG')
                          }}
                          color={size === 'XXG' ? 'white100' : 'black'}
                        >
                          XXG
                        </SizeButton>
                      )}
                    </>
                  )}
                </SizesWrapper>

                <div className="shipping-wrapper">
                  <h3>Calcular frete e prazo</h3>

                  <div className="cep-input-wrapper">
                    <Input
                      placeholder="00000-000"
                      type="text"
                      maxLength={8}
                      borderColor="gray100"
                      borderWidth={1}
                      value={cep}
                      fontSize="xlarge"
                      onChange={(e) => setCep(cepMask(e.target.value))}
                    />

                    <Button onClick={shippingCalculate}>OK</Button>
                  </div>

                  {shippingOptions[0] && (
                    <>
                      <table className={shippingOptions[0] ? '' : 'hidden'}>
                        <tr>
                          <th>Entrega </th>
                          <th>Frete</th>
                          <th>Prazo</th>
                        </tr>

                        <>
                          {shippingOptions?.map((option, index) => (
                            <tr key={index}>
                              <td>{option?.name} </td>
                              <td>
                                {priceHandler.priceNumberToReadblePrice(
                                  Number(option?.price / 2)
                                )}
                              </td>
                              <td>{`15 dias(s)`} </td>
                            </tr>
                          ))}
                        </>
                      </table>

                      <span className="disclaimer">
                        * Este prazo de entrega está considerando a encomenda do
                        produto + prazo de entrega.
                      </span>
                    </>
                  )}
                </div>
              </ProductAside>
            </ProductSection>
          </HorizontalPaddingWrapper>

          <Heading
            role="h2"
            lineBottom={false}
            fontSize="xxxlarge"
            margin="50px 0"
          >
            QUEM VIU ESTE PRODUTO, VIU TAMBÉM
          </Heading>

          <GridWrapper>
            {tierList.map((product, index) => (
              <ProductCard
                id={product.id}
                key={index}
                name={product.nome}
                image={server + product.cover.url}
                price={product.preco}
                slug={product.slug}
              />
            ))}
          </GridWrapper>

          <Heading role="h2" margin="50px 0 0 0" fontSize="extra">
            DESCRIÇÃO
          </Heading>

          <DescriptionWrapper dangerouslySetInnerHTML={{ __html: descricao }} />
        </PaddingWrapper>
      </DefaultTemplate>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = initializeApollo()

  const response = await client.query({
    query: getAllProducts
  })

  const { produtos } = response?.data

  // console.log(response)

  return {
    paths: produtos?.map((product: ProductProps) => {
      return { params: { slug: product.slug } }
    }),
    fallback: true
  }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const client = initializeApollo()

  const slug = params?.slug as string

  const { data } = await client.query({
    query: getProductBySlug,
    variables: {
      slug
    }
  })

  if (!data?.produtos?.length) {
    return { props: {}, notFound: true }
  }

  const categoriesResponse = await client.query({
    query: getCategorias
  })

  const { produtos, destaque } = data
  const { categorias } = categoriesResponse.data

  // console.log(produtos[0].tamanho)

  return {
    props: {
      product: produtos[0],
      categorias,
      tierList: destaque.produtos.map((produto: any) => produto.produto)
    },
    revalidate: 60
  }
}

export default ProductPage
