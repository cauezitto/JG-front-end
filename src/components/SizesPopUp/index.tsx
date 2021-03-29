import Button from 'components/Button'
import Heading from 'components/Heading'
import Paragraph from 'components/Paragraph'
import { FaHeart } from 'react-icons/fa'
import Image from 'next/image'
import * as S from './styles'

export type Props = {
  show?: boolean
  onClose?: VoidFunction
}

const SizesPopUp = (props: Props) => (
  <S.Wrapper {...props}>
    <S.SubWrapper>
      <img className="sizes-photo" src="/img/ProductPage/sizes.jpeg" />
      <br />
      <br />
      <Button onClick={props.onClose} fontSize="large">
        Beleza
      </Button>
    </S.SubWrapper>
  </S.Wrapper>
)

export default SizesPopUp
