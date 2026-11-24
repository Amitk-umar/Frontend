import React, { useEffect } from 'react'

const About = () => {
  let interval = setInterval(() => {
    console.log("hey i am in About...");

  }, 1000)

  useEffect(() => {
    console.log("About is rendering..."); //before return it is mounting phase 

    return () => {
      clearInterval(interval)
      console.log("i am triggered kyuki about jaa chuka hai (unmount)"); //and this is unmounting phase 
    }
  }, [])

  return (
    <div>About</div>
  )
}

export default About