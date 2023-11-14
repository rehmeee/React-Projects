import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
   const data= useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/ScriptSorcererMani')
    //     .then(response =>response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className = "github">
        <div className = "photo_section">
           <img src={data.avatar_url} alt="github Photo" />
        </div>
        <div className = "followers_section">
            <h2>My followers: {data.followers}</h2>
        </div>
        
    </div>
  )
}

export default GitHub
export const  githubinfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/ScriptSorcererMani')
    return response.json()
}