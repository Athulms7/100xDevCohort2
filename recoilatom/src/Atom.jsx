import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  jobatoms,
  messageatoms,
  networkatoms,
  notificationatoms,
  totalselector,
} from "./atom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RecoilRoot>
        <Mainapp />
      </RecoilRoot>
    </>
  );
}
function Mainapp() {
  const networknotificationcount = useRecoilValue(networkatoms);
  const jobnotificationcount = useRecoilValue(jobatoms);
  const messsagenotificationcount = useRecoilValue(messageatoms);
  const notificationcount = useRecoilValue(notificationatoms);
  const messagefinal =
    messsagenotificationcount >= 20 ? "20+" : messsagenotificationcount;

  const finalvaluenetwork =
    networknotificationcount >= 100 ? "99+" : networknotificationcount;

    const totalnotification=useRecoilValue(totalselector);
//   const totalnotification= useMemo(()=>{
// return networknotificationcount+jobnotificationcount+messsagenotificationcount+notificationcount;
//   },[networknotificationcount,jobnotificationcount,messsagenotificationcount,notificationcount] 
//   ) its a way to rerender when any of these change



  return (
    <div>
      <button>Home</button>
      <button>My network{finalvaluenetwork}</button>
      <button>Jobs{jobnotificationcount}</button>
      <button>Messaging{messagefinal}</button>
      <button>Notifications{notificationcount}</button>
      <button>Total{totalnotification}</button>
      <Message></Message>
    </div>
  );
}
export default App;

function Message() {
  const setmessagecount = useSetRecoilState(messageatoms);
  return (
    <div>
      <button
        onClick={() => {
          setmessagecount((c) => c + 1);
        }}
      >
        Mssage
      </button>
    </div>
  );
}
