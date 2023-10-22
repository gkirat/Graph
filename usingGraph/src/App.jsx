import { useState } from 'react'
import {createClient} from "urql"
import './App.css'

function App() {
  const [address,setAddress] = useState()
  const [value,setValue] = useState()
  // const queryUrl = "https://api.studio.thegraph.com/query/55899/graph/v4";
  const queryUrl = "https://api.studio.thegraph.com/query/55899/graph/version/latest";
  const query = `{
    lists(first: 100) {
      id
      numValue
      whoChanged
      blockNumber
    }
  }`

  const client = createClient({
    url:queryUrl
  })


    const getInfo = async()=>{

      console.time()
      const {data} = await client.query(query).toPromise();
      // console.log((data.lists).map((list)=>{
      //   const add = list.whoChanged
      //   const val = list.numValue
      //   return ()
      // }))
      (data.lists).map((list)=>{
        const add = list.whoChanged
        const val = list.numValue
        return (console.log(add,val))
      })
      console.timeEnd()
      setAddress(data.lists[0].whoChanged)
      setValue(data.lists[0].numValue)
    }
  

    // console.log(address,value)


  // console.log(address,value)
  return (
    <>
    <h1>with graph</h1>
    <p>Info</p>
     <button onClick={getInfo}>Click for info</button>
    </>
  )
}

export default App
