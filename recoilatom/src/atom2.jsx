
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { useEffect } from 'react'
import axios from 'axios'
import { networkatoms, totalselector } from './atom'
import { fetchselector, networkfetchatoms } from './atom2'

function Atom2() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(networkfetchatoms);
  const totalNotificationCount = useRecoilValue(fetchselector);

  useEffect(() => {
    // fetch
    axios.get("http://localhost:3000/react")
      .then(res => {
        console.log(res.data);
        setNetworkCount(res.data);
      })
  }, [])



  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.network >= 100 ? "99+" : networkCount.network})</button>
      <button>Jobs {networkCount.job}</button>
      <button>Messaging ({networkCount.message})</button>
      <button>Notifications ({networkCount.notification})</button>
      <button>Me ({totalNotificationCount})</button>
      <button >click</button>
    </>
  )
}

export default Atom2;
