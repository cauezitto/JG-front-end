import * as S from './styles'
import Link from 'next/link'
import Paragraph from 'components/Paragraph'
import { FiPower } from 'react-icons/fi'
import { MdInsertEmoticon } from 'react-icons/md'
import { BiCube, BiLogOut } from 'react-icons/bi'
import { AiOutlineTrophy } from 'react-icons/ai'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { useStateContext } from 'context'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

const Menu = () => {
  const router = useRouter()
  const { setToken, server } = useStateContext()
  const [cookie, setCookie, removeCookie] = useCookies(['user'])
  const logout = () => {
    setToken(null)
    removeCookie('token', {
      path: '/',
      sameSite: true
    })
    router.push('/login')
  }

  return (
    <S.Wrapper>
      <div className="profile-wrapper">
        <S.Profile
          className="profile"
          url={
            cookie.user && cookie.user.foto
              ? server + cookie.user.foto
              : `data:image/png;base64,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`
          }
        />
        <br />
        <Paragraph
          justify="center"
          textAlign="center"
          color="white100"
          fontSize="xxlarge"
        >
          Ol??, {cookie.user ? String(cookie.user?.username).split(' ')[0] : ' '}
        </Paragraph>
      </div>

      <div className="links-wrapper">
        <Link href="/dashboard/dados-pessoais" passHref>
          <a>
            {' '}
            <MdInsertEmoticon /> &nbsp; Dados
          </a>
        </Link>

        <Link href="/dashboard/pedidos" passHref>
          <a>
            <BiCube /> &nbsp; Pedidos
          </a>
        </Link>

        {/* <Link href="/dashboard/game" passHref>
          <a>
            <AiOutlineTrophy /> &nbsp; Pontua????o
          </a>
        </Link> */}

        <Link href="/dashboard/contato" passHref>
          <a>
            <HiOutlineChatAlt2 /> &nbsp; Fale conosco
          </a>
        </Link>

        <Link href="/" passHref>
          <a>
            <BiLogOut /> &nbsp; Ir para loja
          </a>
        </Link>
      </div>

      <div className="logout-wrapper">
        <FiPower onClick={logout} />

        <Paragraph color="white100" fontSize="xlarge" margin="10px 0">
          Deslogar
        </Paragraph>
      </div>
    </S.Wrapper>
  )
}

export default Menu
