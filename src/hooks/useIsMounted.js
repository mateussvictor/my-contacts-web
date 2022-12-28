import { useRef, useEffect, useCallback } from 'react'

function useIsMounted () {
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  const getIsMounted = useCallback(() => isMounted.current, [])

  return getIsMounted
}

export { useIsMounted }
