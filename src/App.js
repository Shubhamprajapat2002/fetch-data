import React from 'react'
import { useState, useEffect } from 'react';
function App() {

  const [data, setData] = useState([])

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(myjson => {

        // console.log(data)
        setData(myjson)
      })
  }

  useEffect(() => {
    getData()

  }, [])



  return (
    <>
    
    <tr>
                <td style={{padding: "40px"}}>Name</td>
                <td style={{padding: "40px"}}>email</td>
               
              </tr>
    
  
      <div>
        {
          data.map((val) => {
            return (
              <>
              
                <table>
                  
                  <tr>
                    <td style={{padding: "40px"}}>{val.name}</td>
                   
                    <td style={{marginLeft: "90px"}}>{val.email}</td>
                  </tr>

                </table>


                {/* <h3>{val.name}</h3>
              <h3>{val.username}</h3>
              <h3>{val.email}</h3> */}



              </>

            )
          })
        }
      </div>
      </>
   
  )
}
export default App;