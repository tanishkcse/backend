import { useState , useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes , setJokes] = useState([]);

  useEffect(() =>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })

    .catch((error)=>{
     console.log(error)
    }) 
  })


 return(
  <>
  <h1> full stack series
  </h1>
  <p>JOKES : {jokes.length}</p>

  {
    jokes.map((jokes , index)=>(
  <div key = {jokes.id}>
    <h3>{jokes.joke}</h3>
    </div>
    ))
  }
  </>
 )
}

export default App
