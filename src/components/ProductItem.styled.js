import styled from "styled-components";

export const ProductCard = styled.div`
  width: 240px;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: #fff;
  font-family: "Valley Sans", sans-serif;
`;

export const ProductName = styled.h3`
  margin: 0 0 10px;
  font-family: "Outfit", sans-serif;
  font-size: 20px;
  font-weight: 600;
`;

export const Price = styled.p`
  margin: 0 0 18px;
  font-size: 17px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;

export const AddButton = styled.button`
  flex: 1;
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  background: #111;
  color: #fff;
  font-family: "Valley Sans", sans-serif;
  font-size: 15px;
  cursor: pointer;
`;

export const FavouriteButton = styled.button`
  width: 42px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: #fff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;
