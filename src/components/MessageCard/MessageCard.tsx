import React from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'

import { Message } from '../../models/message'
import { Priority } from '../../models/priority'
import { Actions, Card, Content } from './style'

type MessageCardProps = Message & {
  onClear: (message: Message) => void,
}

const MessageCard: React.FC<MessageCardProps> = ({
  onClear,
  ...message
}) => {
  const [snackbarStatus, setSnackbarStatus] = React.useState(() => message.priority === Priority.ERROR)
  return (
    <React.Fragment>
      <Card
        priority={message.priority}
        onClick={() => onClear(message)}
      >
        <Content>
          {message.message}
        </Content>
        <Actions disableSpacing>
          <Button size="small" color="primary">
            Clear
          </Button>
        </Actions>
      </Card>
      <Snackbar
        open={snackbarStatus}
        autoHideDuration={2000}
        message={message.message}
        onClose={() => setSnackbarStatus(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      />
    </React.Fragment>
  )
}

export default MessageCard