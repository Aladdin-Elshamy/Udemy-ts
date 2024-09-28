import { configureStore } from '@reduxjs/toolkit'
import NestedSidebarReducer from './features/NestedSidebar/NestedSidebarSlice'
import SearchReducer from './features/Search/SearchSlice'
export const store = configureStore({
  reducer: {
    nestedSidebar: NestedSidebarReducer,
    search: SearchReducer

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch