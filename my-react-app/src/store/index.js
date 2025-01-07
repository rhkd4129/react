import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counterSlice'
import todoListReducer from './todoListSlice'


// counter라는 이름으로 이 리듀서를 등록. 나중에 이 이름으로 상태를 관리
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todoList:todoListReducer
    },
})
