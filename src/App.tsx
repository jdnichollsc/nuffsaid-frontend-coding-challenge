import React from 'react'
import HomeScreen from './screens/Home/Home'
import { StoreProvider } from './store/store'


const App: React.FC<{}> = () => {
  return (
    <StoreProvider>
      <HomeScreen />
    </StoreProvider>
  )
}

export default App
