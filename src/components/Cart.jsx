import { useDispatch, useSelector } from "react-redux";

import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlicer";

import {
  CartWrapper,
  Title,
  CartItem,
  ProductInfo,
  ProductName,
  ProductPrice,
  Quantity,
  QuantityButton,
  QuantityNumber,
  RemoveButton,
  ProductTotal,
  Summary,
  SummaryRow,
  Total,
  ClearButton,
  EmptyCart,
} from "./Cart.styled";

export const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartWrapper>
      <Title>Shopping Cart</Title>

      {items.length === 0 ? (
        <EmptyCart>The cart is empty</EmptyCart>
      ) : (
        <>
          {items.map((i) => (
            <CartItem key={i.id}>
              <ProductInfo>
                <ProductName>{i.name}</ProductName>

                <ProductPrice>Price: ${i.price}</ProductPrice>
              </ProductInfo>

              <Quantity>
                <QuantityButton onClick={() => dispatch(decrementQuantity(i))}>
                  −
                </QuantityButton>

                <QuantityNumber>{i.quantity}</QuantityNumber>

                <QuantityButton onClick={() => dispatch(incrementQuantity(i))}>
                  +
                </QuantityButton>
              </Quantity>

              <ProductTotal>${i.price * i.quantity}</ProductTotal>

              <RemoveButton onClick={() => dispatch(removeFromCart(i.id))}>
                Remove
              </RemoveButton>
            </CartItem>
          ))}

          <Summary>
            <SummaryRow>
              <span>Total products</span>
              <span>{totalItems}</span>
            </SummaryRow>

            <Total>
              <span>Total price</span>
              <span>${totalPrice}</span>
            </Total>

            <ClearButton onClick={() => dispatch(clearCart())}>
              Clear Cart
            </ClearButton>
          </Summary>
        </>
      )}
    </CartWrapper>
  );
};
