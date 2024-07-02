// import { useReducer } from "react"
// import { useReducerAsObject } from "../../utils/Utils"

export class Task {
  id: number
  name: string
  isDone: boolean

  constructor(
    id: number, 
    name: string, 
    isDone: boolean = false
  ) {
    this.id = id
    this.name = name
    this.isDone = isDone
  }
}

// type TaskAction = (
//   {type: 'add', payload: string} | 
//   {type: 'remove', payload: number} | 
//   {type: 'done', payload: number}
// )

// const TaskReducer = (state: Task[], action: TaskAction) => {
//   switch(action.type) {
//     case 'add': {
//       return [...state, {id: state.length, name: action.payload, isDone: false}]
//     }
//     case 'remove': {
//       return state.filter(task => task.id !== action.payload)
//     }
//     case 'done': {
//       return state.map(task => task.id === action.payload? {...task, isDone: true} : task)
//     }
//     default: {
//       return state
//     }
//   }
// }

// const ReducerExample = () => {
//   const state = useReducerAsObject(TaskReducer, [])
// }