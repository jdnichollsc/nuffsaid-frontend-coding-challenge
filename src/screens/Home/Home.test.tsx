import React from 'react'
import { render } from '@testing-library/react'
 
import Home from './Home'
import { StoreProvider } from '../../store/store'
 
 describe('<Home />', () => {

  it('renders correctly', async () => {
    const comp = render(<Home />, { wrapper: StoreProvider })
    expect(comp).toBeTruthy()
  })
})