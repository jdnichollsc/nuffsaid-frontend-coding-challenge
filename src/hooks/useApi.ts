import { useCallback, useEffect } from 'react'
import { Action, useStore } from '../store/store'
import generateMessage from '../Api'
import { Message } from '../models/message'

export function useApi () {
  const [state, dispatch] = useStore()

  useEffect(() => {
    let cleanUp: () => void
    if (state.isRunning) {
      cleanUp = generateMessage((message: Message) => {
        dispatch({
          type: Action.AddMessage,
          payload: message
        })
      });
    }
    return () => cleanUp && cleanUp();
  }, [dispatch, state.isRunning])

  const onClearMessages = useCallback(() => {
    dispatch({ type: Action.ClearMessages })
  }, [dispatch])

  const onClearMessage = useCallback((message: Message) => {
    dispatch({ type: Action.ClearMessage, payload: message })
  }, [dispatch])

  const onToggleRunning = useCallback(() => {
    dispatch({ type: Action.ToggleRunning })
  }, [dispatch])

  return {
    isRunning: state.isRunning,
    messages: state.messages,
    onClearMessages,
    onClearMessage,
    onToggleRunning
  }
}