import styled from "styled-components";

export const ProductCard = styled.div`
  width: 100%;
  min-height: 220px;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f2eee8;
  border: 1px solid #ddd7ce;
  border-radius: 18px;
  color: #171717;
  font-family: "Valley Sans", sans-serif;
`;

export const ProductName = styled.h3`
  margin: 0 0 12px;
  font-family: "Outfit", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #171717;
`;

export const Price = styled.p`
  margin: 0;
  color: #68635c;
  font-size: 15px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export const AddButton = styled.button`
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 10px;
  background: #171717;
  color: #fff;
  font-family: "Valley Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const FavouriteButton = styled.button`
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border: 1px solid #d4cec5;
  border-radius: 10px;
  background: #e7e1d9;
  font-size: 19px;
  cursor: pointer;
`;
