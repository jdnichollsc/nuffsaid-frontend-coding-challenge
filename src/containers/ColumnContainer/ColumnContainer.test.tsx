import React from 'react'
import { render } from '@testing-library/react';
import { Message } from '../../models/message'
 
import ColumnContainer from './ColumnContainer'
 
 describe('<ColumnContainer />', () => {
  const defaultProps = {
    title: 'Column',
    messages: [],
    onClearMessage: (message: Message) => message,
  }

  it('renders correctly', async () => {
    const comp = render(<ColumnContainer {...defaultProps} />)
    expect(comp).toBeTruthy()
  })
})