import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counters: [
            { id: 1, value: 1, bgColor: 'red' },
            { id: 2, value: 2, bgColor: 'green' }
        ]
    },
    reducers: {
        addCounter: (state, action) => {

            const { startNumber, bgColor } = action.payload;
            state.counters.push({
                id: state.counters.length,
                value: startNumber || 0,
                bgColor: bgColor
            });
            // console.log가 객체의 참조를 출력하기 때문
            // console.log(state.counters)  // Proxy 객체를 출력
            // console.log([...state.counters])  // 실제 배열의 값을 출력
        },
        increment: (state, action) => {
            const counter = state.counters.find(c => c.id === action.payload.id);
            if (counter) counter.value += 1;
        },
        decrement:(state,action)=>{
            const counter = state.counters.find(c=>c.id === action.payload.id)
            if(counter) counter.value -=1;
        }
    }
})

export const { increment, decrement,addCounter } = counterSlice.actions
export default counterSlice.reducer


// export const INCREMENT = 'INCREMENT';
// export const DECREMENT = 'DECREMENT';
//
// export const increment = () => ({
//     type: INCREMENT
// });
//
// export const decrement = () => ({
//     type: DECREMENT
// });
//
// // reducers/counterReducer.js
// import { INCREMENT, DECREMENT } from '../actions/counterActions';
//
// const initialState = {
//     count: 0
// };
//
// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             };
//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count - 1
//             };
//         default:
//             return state;
//     }
// };
