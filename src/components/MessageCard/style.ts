import styled, { css } from 'styled-components'
import MaterialCard from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { Priority, PRIORITY_COLORS } from '../../models/priority'

type CardProps = {
  priority: Priority
};

export const Card = styled(MaterialCard)<CardProps>`
  color: black;
  margin: 5px;
  ${props =>
    props.priority !== undefined &&
    css`
      background: ${PRIORITY_COLORS[props.priority]} !important;
    `};
`

export const Content = styled(CardContent)`
  height: 20px;
`

export const Actions = styled(CardActions)`
  justify-content: flex-end;
`