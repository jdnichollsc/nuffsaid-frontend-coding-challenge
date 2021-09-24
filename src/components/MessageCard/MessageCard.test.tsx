import React from 'react'
import { render } from '@testing-library/react';
import { Message } from '../../models/message'
 
import MessageCard from './MessageCard'
 
 describe('<MessageCard />', () => {
  const defaultProps = {
    id: '1',
    message: 'Hello',
    priority: 0
  }
  const onPress = jest.fn((message: Message) => undefined)

  it('renders correctly', async () => {
    const comp = render(<MessageCard onClear={onPress} {...defaultProps} />)
    expect(comp).toBeTruthy()
  })
})