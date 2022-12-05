import { Title, CardProduct } from "../../atoms";
import {
  Container,
  WrapperHeaderSection,
  WrapperProducts,
  QuantityItems,
} from "./styles";
import { listProducts } from "./mock";

export const CardProductList = () => {
  return (
    <Container>
      <WrapperHeaderSection>
        <Title children="Shop" />
        <QuantityItems tabIndex={0}>All {listProducts.length} items</QuantityItems>
      </WrapperHeaderSection>

      <WrapperProducts>
        {listProducts?.map(({ id, name, image, price }) => (
          <CardProduct
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
          />
        ))}
      </WrapperProducts>
    </Container>
  );
};
