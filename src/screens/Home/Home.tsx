import React, { useMemo } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { COLUMN_TITLES, HEADER } from '../../constants/constants'
import { useApi } from '../../hooks/useApi'
import ColumnContainer from '../../containers/ColumnContainer/ColumnContainer'
import { MessageType } from '../../models/message'
import { Button, ButtonContainer, Container, Content, Row } from './style'

export default function HomeScreen() {
  const {isRunning, messages, onClearMessage, onClearMessages, onToggleRunning} = useApi()

  const columns = useMemo(() => {
    return {
      error: messages[MessageType.ERROR],
      info: messages[MessageType.INFO],
      warning: messages[MessageType.WARNING],
    }
  }, [messages])

  return (
    <Container>
      <AppBar>
        <Toolbar variant="regular">
          <Typography variant="h6" component="div">
            {HEADER} ❤️
          </Typography>
        </Toolbar>
      </AppBar>
      <Content>
        <ButtonContainer>
          <Button onClick={onToggleRunning}>
            {isRunning ? 'Stop' : 'Start'}
          </Button>
          <Button onClick={onClearMessages}>Clear</Button>
        </ButtonContainer>
        <Row>
          <ColumnContainer title={COLUMN_TITLES.ERROR} messages={columns.error} onClearMessage={onClearMessage} />
          <ColumnContainer title={COLUMN_TITLES.WARNING} messages={columns.info} onClearMessage={onClearMessage} />
          <ColumnContainer title={COLUMN_TITLES.INFO} messages={columns.warning} onClearMessage={onClearMessage} />
        </Row>
      </Content>
    </Container>
  )
}