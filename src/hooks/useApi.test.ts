import { renderHook, act } from '@testing-library/react-hooks'
import generateMessage from '../Api'
import { StoreProvider } from '../store/store'
import { useApi } from './useApi'

jest.mock('../Api', () => {
  return {
    __esModule: true,
    default: jest.fn(() => 'mocked')
  }
})

describe('useApi hook', () => {

  it('should handle useEffect hook', () => {
    renderHook(() => useApi())
    expect(generateMessage).toHaveBeenCalled()
  })

  it('should handle onToggleRunning action', () => {
    const { result } = renderHook(() => useApi(), { wrapper: StoreProvider })

    act(() => {
      result.current.onToggleRunning()
    })

    expect(result.current.isRunning).toBeFalsy()
  })
})