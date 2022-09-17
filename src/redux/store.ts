import themeSlice from './Slices/themeSlice';
import { configureStore } from '@reduxjs/toolkit'
import { appsApi, htmlSiteApi } from './Api/portfolioApi'

export const store = configureStore({
  reducer: {
    themeSlice,
    [htmlSiteApi.reducerPath]: htmlSiteApi.reducer,
    [appsApi.reducerPath]: appsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(htmlSiteApi.middleware, appsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch