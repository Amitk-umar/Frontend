import React from 'react';
import About from './About.jsx'
let App = () => {
  // let ui = React.createElement("div",{}, [
  //   React.createElement("h1",{key:"h1"},"I am h1"),
  //   React.createElement("h2",{key:"h2"},"I am h2"),
  //   React.createElement("h3",{key:"h3"},"I am h3")
  // ])
  // return ui;
  return <main>
    <div>
      <h1>i am h1</h1>
      <h2>i am h2</h2>
      <h3>i am h3</h3>
    </div>
    {/* <About /> */}
    {/* {About("hello raghav")} */}
    <About width= "300" name="Raghav sharma" age = {25}/>
  </main>
}
export default App;