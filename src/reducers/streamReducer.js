import {FETCH_STREAM,FETCH_STREAMS,DELETE_STREAM,CREATE_STREAM,EDIT_STREAM} from '../actions/types'

export default (state={},action)=>
{
    switch(action.type)
    {
        case FETCH_STREAMS:
            return ListToObj(action.payload)
        case FETCH_STREAM:
            return {...state, [action.payload.id]:action.payload}

        case DELETE_STREAM:
            delete state[action.payload]
            return {...state}

        case CREATE_STREAM:
            return {...state, [action.payload.id]:action.payload}

        case EDIT_STREAM:
            return {...state, [action.payload.id]:action.payload}

        default:
            return state
    }
}

const ListToObj=(arr)=>
{
    const obj={}
    for (let i = 0; i < arr.length; i++) 
    {
        obj[arr[i].id]=arr[i]
    }
    return obj
}