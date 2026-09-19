import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // використовуємо LocalStorage
import cartReducer from "./cartSlicer";
import favouritesReducer from "./favouritesSlicer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const persistedFavouriteReducer = persistReducer(
  { key: "favourites", storage },
  favouritesReducer,
);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
    favourites: persistedFavouriteReducer,
  },
});

export const persistor = persistStore(store);
