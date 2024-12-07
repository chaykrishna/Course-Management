import React from 'react'


function Home() {
  return (
    <center><div
    style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${process.env.PUBLIC_URL}/logokl.jpeg)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      paddingBottom: '10px',
    }}
  
  
    >
      
      <h1>Welcome Dear Student!</h1>
      <h4>View your attendance, results, courses registered etc;</h4>
    </div>
    </center>
  )
}

export default Home