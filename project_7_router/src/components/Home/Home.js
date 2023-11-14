import React from 'react'
import './home.css'
function Home() {
  return (

    <div className='home'>
      <div className='innerdiv'>
        <div className='headinghome'>
          <h1>
            This is my First <br /> React Website
          </h1>
        </div>
        <div className='buttons'>
          <button>Follow Me</button>
          <button type='button' onClick={() => {
            const github = 'https://github.com/ScriptSorcererMani';
            window.open(github, '_blank')
          }}>My github</button>

        </div>

      </div>

    </div>

  )
}

export default Home