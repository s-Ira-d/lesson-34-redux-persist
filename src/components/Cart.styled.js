import styled from "styled-components";

export const CartWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 50px max(20px, calc((100% - 1000px) / 2));
  background: #080808;
  color: #f5f2ed;
  font-family: "Valley Sans", sans-serif;
`;

export const Title = styled.h1`
  margin: 0 0 30px;
  font-family: "Outfit", sans-serif;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: -1px;
  color: #f5f2ed;
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  align-items: center;
  gap: 24px;
  padding: 20px;
  margin-bottom: 12px;
  background: #302e2a;
  border: 1px solid #403d38;
  border-radius: 15px;
`;

export const ProductInfo = styled.div`
  min-width: 0;
`;

export const ProductName = styled.h3`
  margin: 0 0 6px;
  font-family: "Outfit", sans-serif;
  font-size: 19px;
  font-weight: 600;
  color: #f5f2ed;
`;

export const ProductPrice = styled.p`
  margin: 0;
  color: #aaa59c;
  font-size: 14px;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px;
  background: #211f1c;
  border: 1px solid #3c3934;
  border-radius: 10px;
`;

export const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 7px;
  background: #3a3732;
  color: #f5f2ed;
  font-size: 19px;
  line-height: 1;
  cursor: pointer;
`;

export const QuantityNumber = styled.span`
  min-width: 25px;
  color: #f5f2ed;
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
`;

export const ProductTotal = styled.p`
  min-width: 80px;
  margin: 0;
  color: #e5d6b9;
  font-family: "Outfit", sans-serif;
  font-size: 17px;
  font-weight: 600;
  text-align: right;
`;

export const RemoveButton = styled.button`
  padding: 8px 12px;
  border: 1px solid #514b44;
  border-radius: 8px;
  background: transparent;
  color: #b7b0a7;
  font-family: "Valley Sans", sans-serif;
  font-size: 13px;
  cursor: pointer;
`;

export const Summary = styled.div`
  margin-top: 30px;
  padding: 25px;
  background: #1d1c1a;
  border: 1px solid #383631;
  border-radius: 16px;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  color: #aaa59c;
  font-size: 15px;
  span:last-child {
    color: #f5f2ed;
    font-weight: 600;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #393631;
  font-family: "Outfit", sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: #f5f2ed;
  span:last-child {
    color: #e5d6b9;
  }
`;

export const ClearButton = styled.button`
  width: 100%;
  margin-top: 25px;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: #e5d6b9;
  color: #242321;
  font-family: "Valley Sans", sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export const EmptyCart = styled.p`
  margin: 0;
  padding: 55px 20px;
  color: #aaa59c;
  font-family: "Outfit", sans-serif;
  font-size: 18px;
  text-align: center;
  background: #302e2a;
  border: 1px dashed #4a4640;
  border-radius: 15px;
`;
