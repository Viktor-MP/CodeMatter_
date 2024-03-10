import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type
 { 
    RootState,
    ChatState,
    AppDispatch,
    AppDispatchChat
 } 
 from './app_store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useDispatchChat: () => AppDispatchChat = useDispatch
export const useChatSelector: TypedUseSelectorHook<ChatState> = useSelector
