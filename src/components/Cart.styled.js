import styled from "styled-components";

export const CartWrapper = styled.div`
  max-width: 700px;
  margin: 40px auto;
  padding: 0 20px;
  font-family: "Valley Sans", sans-serif;
`;

export const Title = styled.h1`
  margin-bottom: 25px;
  font-family: "Outfit", sans-serif;
  font-size: 32px;
  font-weight: 600;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid #e5e5e5;
`;

export const ProductInfo = styled.div`
  flex: 1;
`;

export const ProductName = styled.h3`
  margin: 0 0 5px;
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  font-weight: 500;
`;

export const ProductPrice = styled.p`
  margin: 0;
  color: #666;
  font-size: 15px;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #fff;
  font-size: 17px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

export const QuantityNumber = styled.span`
  min-width: 20px;
  text-align: center;
`;

export const ProductTotal = styled.p`
  min-width: 80px;
  margin: 0;
  font-weight: 600;
  text-align: right;
`;

export const RemoveButton = styled.button`
  border: none;
  background: transparent;
  color: #777;
  font-family: "Valley Sans", sans-serif;
  cursor: pointer;

  &:hover {
    color: #111;
  }
`;

export const Summary = styled.div`
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-family: "Outfit", sans-serif;
  font-size: 22px;
  font-weight: 600;
`;

export const ClearButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #111;
  color: #fff;
  font-family: "Valley Sans", sans-serif;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;

export const EmptyCart = styled.p`
  color: #777;
  font-size: 17px;
`;
