import { Reducer, ReducerState, useReducer } from 'react'

export class UseReducerObject<T> {

    get: () => T
    set: (value: T) => void

    constructor(
        get: () => T,
        set: (value: T) => void
    ) {
        this.get = get
        this.set = set
    }
}

export const useReducerAsObject = function<T>(reducer: Reducer<any, any>, initializer: unknown)  {
    const [value, set] = useReducer(reducer, initializer)
    const get: () => T = () => (value)
    return new UseReducerObject<T>(get, set)
}