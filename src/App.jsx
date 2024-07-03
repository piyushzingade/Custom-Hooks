import { useEffect, useState } from 'react'
import axios from 'axios'
import { useTodos} from './hooks/useTodos'
import { useMousePointer } from './hooks/useMousePointer';
import {useIsOnline} from './hooks/useIsOnLine';


function useInterval(fn , timeout) {
  useEffect(()=>{
    setInterval(fn, timeout);
  }  , [])
}
function App() {
  const [count ,  setCount] = useState(0);

  useInterval(()=>{
    setCount(c => c+1
    );
  } ,1000)

  return <div>

  </div>
}

export default App