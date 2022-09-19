import { useState, useCallback } from 'react'
import { useIsMounted } from './useIsMounted'

function useSafeAsyncState (initialState) {
  const [state, setState] = useState(initialState)

  const isMounted = useIsMounted()

  const setSafeAsyncState = useCallback((data) => {
    if (isMounted()) {
      setState(data)
    }
  }, [isMounted])

  return [state, setSafeAsyncState]
}

export { useSafeAsyncState }
