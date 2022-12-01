// @ts-ignore
import { Navigate } from "@shoppe/util-ui";

// @ts-ignore
import { useStore } from "@shoppe/util-state";

export default function Root(props) {
  const store = useStore();

  return (
    <>
      <section>Eu sou o HEADER!!!!!!</section>
      <h3>Counter ::: {store.counter}</h3>
      <Navigate path="/account">Account</Navigate>
      <Navigate path="/cart">Cart</Navigate>
      <Navigate path="/product">Product</Navigate>
      <Navigate path="/shop">Shop</Navigate>
    </>
  );
}
