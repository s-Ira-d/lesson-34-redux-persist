import styled from "styled-components";

export const ProductGrid = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  justify-content: center;
  background: #080808;
  font-family: "Valley Sans", sans-serif;
`;
