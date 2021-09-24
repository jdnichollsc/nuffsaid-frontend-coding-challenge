import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import MaterialButton from '@material-ui/core/Button'
import MaterialContainer from '@material-ui/core/Container'

export const Container = styled(MaterialContainer).attrs({
  fixed: true,
})`
  display: flex;
`

export const Content = styled(Box).attrs({
  component: 'main',
  sx: {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
    flexDirection: 'column',
  }
})`
  display: flex;
  padding-top: 60px;
`

export const ButtonContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  padding: 1rem;
`

export const Button = styled(MaterialButton).attrs({
  variant: 'contained',
})`
  margin: 3px !important;
  background-color: #82EEA2 !important;
`

export const Row = styled(Grid)`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`