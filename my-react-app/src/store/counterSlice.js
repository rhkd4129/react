import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counters: [
            { id: 0, value: 0 },  // 초기값 직접 설정
            { id: 1, value: 0 },
            { id: 2, value: 0 }
        ]
    },
    reducers: {
        addCounter: (state, action) => {
            // action.payload에서 startNumber와 bgColor를 받아올 수 있도록
            const { startNumber, bgColor } = action.payload;
            state.counters.push({
                id: state.counters.length,
                value: startNumber || 0,
                bgColor: bgColor
            });
        },
        increment: (state, action) => {
            console.log(action)
            const counter = state.counters.find(c => c.id === action.payload.id);
            if (counter) counter.payload.value += 1;
        }
    }
})

export const { increment, decrement,addCounter } = counterSlice.actions
export default counterSlice.reducer
