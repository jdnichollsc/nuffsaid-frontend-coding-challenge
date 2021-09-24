import { Reducer, Dispatch } from 'react'
import { Message, MessageType } from '../models/message'

export enum Action {
  ClearMessages,
  ClearMessage,
  AddMessage,
  ToggleRunning
}

export type StoreState = {
  messages: {
    [MessageType.ERROR]: Message[],
    [MessageType.WARNING]: Message[],
    [MessageType.INFO]: Message[]
  },
  isRunning: boolean
}

export type StoreAction =
  | { type: Action.ClearMessages }
  | { type: Action.ToggleRunning }
  | { type: Action.ClearMessage, payload: Message }
  | { type: Action.AddMessage, payload: Message }

export type StoreReducer = Reducer<StoreState, StoreAction>
export type StoreDispatch = Dispatch<StoreAction>

export type ContextProps = [StoreState, StoreDispatch]