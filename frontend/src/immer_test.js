const { Result } = require('antd');
const {produce} = require('immer');
const fruits=['오렌지','사과','레몬','바나나']
const NewFruits = produce(fruits,draft=>{
    draft.splice(1,2,'딸기');
});
const baseState = [
    {
        todo:'Learn typescript',
        done:true
    },
    {
        todo:'Try immer',
        done:false
    }
];
const newState1=[...baseState.map((tweet,index)=> index ===1 ? {...tweet,done:true} : tweet    
    ),
    {todo:'Tweet about it'},
];
console.log(newState1)

// immer 사용

const newState2  = produce(baseState,draft=>{
    draft[1].done = true;
    draft.push( {todo:'Tweet about it'})
})



// class Student{
//     constructor(name,age,enrolled,scroe){
//         this.name = name;
//         this.age= age;
//         this.enrolled =enrolled;
//         this.scroe= scroe;
//     }
// }
// const  students=[
//     new Student('A',21,true,5),
//     new Student('B',29,true,65),
//     new Student('C',55,false,5),
//     new Student('D',29,true,45),
// ];
// const reulst  = students.filter((student)=> student.enrolled);
// const reuslt = students.map((student)=>student.scroe*2);
// const result = students.some((student)=> student.scroe<50);
//const result = students.reduce((prev,curr)=>prev +curr.score,0);
//console.log(result/students.length)

// {
//     const result = students.map((student) =>student.scroe)
//         .filter(score=> score >=50)
//         .join();
// }