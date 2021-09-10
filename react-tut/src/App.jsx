import React, { useEffect, useState } from "react"
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初")
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClicCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  },;

  useEffect(() => {
    console.log("useEffect");
  }, []);
  if (num > 0) {
    if (num % 3 === 0) {
       faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false); 
    }
  }

  return (
    <>
      <h1 style= {{ color: "red"}}>こんにちは！</h1>
      <ColorfulMessage color= "blue" >お元気ですか？</ColorfulMessage>
      <ColorfulMessage color= "pink" >元気です！</ColorfulMessage>
      <button onClick= {onClicCountUp}>カウントアップ</button>
      <br />
      <button onClick= {onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>(*^^*)</p>}      
    </>
  );
};

export default App;