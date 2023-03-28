import {UserType} from '../HW8'
import {log} from 'util';

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort((a, b) =>
                action.payload === 'up' && a.name < b.name ? -1 :
                    action.payload === 'down' && a.name > b.name ? -1 :
                        0)
        }

        case 'check': {
            return [...state].filter(el=> el.age >= 18)
        }
        default:
            return state
    }
}


