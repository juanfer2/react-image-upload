import { useState, useEffect } from 'react'

export const useHome = (observable: any, setter: any) => {
  const useObservableCounter = () => {
    useEffect(() => {
      let subscription = observable.subscribe((result: any) => {
        setter(result)
      })

      return () => subscription.unsubscribe()
    }, [observable, setter])
  }

  const [state, setState] = useState({
    useObservable: useObservableCounter,
  })

  state.useObservable()
  return state
}
