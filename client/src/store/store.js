import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth-slice/index.js'
import adminProductsSlice from './admin/products-slice'
import adminOrderSlice from './admin/order-slice'

import shopProudctSlice from './shop/products-slice'
import shopCartSlice from './shop/cart-slice'
import addressSlice from './shop/address-slice'
import shopOrderSlice from './shop/order-slice'
import shopSearchSlice from './shop/search-slice'

const store = configureStore({
  reducer: {
    auth : authReducer,
    adminProducts : adminProductsSlice,
    adminOrder: adminOrderSlice,

    shopProducts : shopProudctSlice,
    shopCart : shopCartSlice,
    shopAddress : addressSlice,
    shopOrder : shopOrderSlice,
    shopSearch : shopSearchSlice,
  },
})

export default store