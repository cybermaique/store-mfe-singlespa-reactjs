import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 125rem;
  row-gap: 1.6rem;
  margin: 0 auto;
  margin-top: 10px;

  @media only screen and (min-width: 1024px) {
    row-gap: 6.4rem;
  }
`;
