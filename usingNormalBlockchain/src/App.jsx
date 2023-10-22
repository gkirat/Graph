import {ethers} from "ethers"
import { useState } from "react"
import Abi from "./Abic.json"
import './App.css';



function App() {
  const [state,setState] =  useState({
    signer:null,
    contract:null,
    provider:null
  })

  const contractAdd = "0x0AF89A43A3777a36bb7f0ACe04d30Eb35D6aE9b6"

  const connectWallet = async ()=>{

    if(typeof window != "undefined" && typeof window.ethereum != "undefined"){
      const provider =  new ethers.BrowserProvider(window.ethereum)
      await provider.send("eth_requestAccounts", []);
      const signer  =  await provider.getSigner()
      const contract =  new ethers.Contract(contractAdd,Abi.abi,signer)
      setState({signer:signer.address,contract:contract,provider:provider})
      alert("Metamask connected");
    }
    else{
      console.log("Please install metamask")
    }  
  }
  
  console.log(state)

const data = async()=>{
  console.time()
  const address = await state.contract.guest()
  const value = await state.contract.num()
  console.timeEnd()
  console.log(address,value)
}
  

  return (
    <>
    <h1>With normal blockchain</h1>
     <button onClick={connectWallet}>Click to connect</button>

     <p>Info</p>
     <button onClick={data}>Click for info</button>
    </>
  )
}

export default App

