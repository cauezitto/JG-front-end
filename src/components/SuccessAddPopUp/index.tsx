import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import { FaHeart } from 'react-icons/fa'
import * as S from './styles'

export type Props = {
  show?: boolean
  onClose?: VoidFunction
}

const SuccessAddPopUp = (props: Props) => (
  <S.Wrapper {...props}>
    <S.SubWrapper>
      <FaHeart size={45} color="#E4271B" />
      <Heading
        color="cyan"
        font="ubuntu"
        fontWeight="semiBold"
        fontSize="xxxlarge"
      >
        Produto Adicionado!
      </Heading>
      <Paragraph
        fontSize="large"
        font="ubuntu"
        textAlign="center"
        margin="30px 0"
      >
        Parabéns! você adicionou o produto a sua lista de desejos
      </Paragraph>
      <Button
        onClick={props.onClose}
        text="Beleza! c:"
        fontSize="large"
        fontFamily="ubuntu"
      />
    </S.SubWrapper>
  </S.Wrapper>
)

export default SuccessAddPopUp
