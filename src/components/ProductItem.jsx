import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/cartSlicer";
import { toggleFavourite } from "../redux/favouritesSlicer";

import {
  ProductCard,
  ProductName,
  Price,
  Buttons,
  AddButton,
  FavouriteButton,
} from "./ProductItem.styled";

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const favourites = useSelector((state) => state.favourites.items);

  const handleClick = () => {
    dispatch(addToCart(product));
  };

  const handleFavourites = () => {
    dispatch(toggleFavourite(product));
  };

  const isFavourite = favourites.some((f) => f.id === product.id);

  return (
    <ProductCard>
      <ProductName>{product.name}</ProductName>

      <Price>Price: ${product.price}</Price>

      <Buttons>
        <AddButton onClick={handleClick}>Add To Cart</AddButton>

        <FavouriteButton onClick={handleFavourites}>
          {isFavourite ? "❤️" : "🤍"}
        </FavouriteButton>
      </Buttons>
    </ProductCard>
  );
};
