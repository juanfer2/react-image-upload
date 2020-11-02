import React, { useState, useEffect } from 'react'
import { map, filter, mergeMap, delay } from 'rxjs/operators'
import { from } from 'rxjs'

import { useHome } from './useHome'
import UploadFile from '../uploadFile'

let numbersObservable = from([1, 2, 3, 4, 5])
let squareNumbers = numbersObservable.pipe(
  filter((val) => val > 2),
  mergeMap((val) => from([val]).pipe(delay(1000 * val))),
  map((val) => val * val),
)

function Home() {
  const [currentNumber, setCurrentNumber] = useState<Number>(0)
  useHome(squareNumbers, setCurrentNumber)

  return (
    <div>
      <UploadFile/>
    </div>
  )
}

export default Home
