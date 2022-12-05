import {
  Container,
  TitleCard,
  Price,
  WrapperImage,
  ButtonAddToCart,
} from "./styles";
import { CardProductProps } from "./types";

export const CardProduct = ({ name, image, price }: CardProductProps) => {
  return (
    <Container>
      <WrapperImage>
        <img
          src={require(`../../../assets/images/products/listHome/${image}`)}
          alt="jewelry"
        />

        <ButtonAddToCart>Add to Cart</ButtonAddToCart>
      </WrapperImage>
      <TitleCard>{name}</TitleCard>
      <Price>{price}</Price>
    </Container>
  );
};
