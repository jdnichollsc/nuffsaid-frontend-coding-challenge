import { MessagePriority, MessageType } from '../models/message'
import { StoreState, StoreAction, Action } from './types'

export const initialState: StoreState = {
  messages: {
    [MessageType.ERROR]: [],
    [MessageType.WARNING]: [],
    [MessageType.INFO]: []
  },
  isRunning: true,
}

export const reducer = (
  state = initialState,
  action?: StoreAction,
): StoreState => {
  let messagePriority: MessageType
  switch (action?.type) {
    case Action.ClearMessages:
      return { ...state, messages: initialState.messages }
    case Action.ClearMessage:
      messagePriority = MessagePriority[action.payload.priority]
      return {
        ...state,
        messages: {
          ...state.messages,
          [messagePriority]: state.messages[messagePriority].filter((message) => message.id !== action.payload.id)
        }
      }
    case Action.AddMessage:
      messagePriority = MessagePriority[action.payload.priority]
      return {
        ...state,
        messages: {
          ...state.messages,
          [messagePriority]: [action.payload, ...state.messages[messagePriority]]
        }
      }
    case Action.ToggleRunning:
      return { ...state, isRunning: !state.isRunning }
    default:
      return state
  }
}