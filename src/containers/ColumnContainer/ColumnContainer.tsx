import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Message } from '../../models/message'
import MessageCard from '../../components/MessageCard/MessageCard'
import { Column } from './style';

interface ContainerProps {
  title: string,
  messages: Message[],
  onClearMessage: (message: Message) => void,
}

const ColumnContainer: React.FC<ContainerProps> = ({ title, messages, onClearMessage }) => {
  return (
    <Column>
      <h2>{title}</h2>
      <p>Count {messages.length}</p>
      {messages.map(message => (
        <Grid
          item
          key={message.id}
        >
          <MessageCard
            {...message}
            onClear={onClearMessage}
          />
        </Grid>
      ))}
    </Column>
  )
}

export default ColumnContainer