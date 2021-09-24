import { Priority } from "./priority"

export type Message = {
  id: string
  message: string
  priority: Priority
}

export enum MessageType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export const MessagePriority = {
  [Priority.ERROR]: MessageType.ERROR,
  [Priority.WARNING]: MessageType.WARNING,
  [Priority.INFO]: MessageType.INFO,
}