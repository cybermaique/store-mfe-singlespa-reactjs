import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;

  &:hover button {
    opacity: 1;
  }

  img {
    border-radius: 1.6rem;
  }

  @media only screen and (min-width: 1024px) {
    row-gap: 1.6rem;
  }
`;

export const WrapperImage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
`;

export const ButtonAddToCart = styled.button`
  display: flex;
  width: 100%;
  height: 6.5rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 0 0 1.6rem 1.6rem;
  opacity: 0;
  border: 0.2rem solid transparent;
  transition: opacity 0.1s linear;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #ffffff7f;

  &:focus {
    opacity: 1;
    border: 0.2rem solid #000;
  }
`;

export const TitleCard = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;

export const Price = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: #a18a68;
`;
