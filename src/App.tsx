// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from './components/button';
import Counter from './components/counter';

function App() {
  // const [count, setCount] = useState(0)
// console.log('hola');
const handleClick1 = () =>{
  console.log('handleClick1');
}
const handleClick2 = () =>{
  console.log('handleClick2');
}
  return (
    <section>
      <h1> HOLA  </h1>
      <Button handleClick={handleClick1} cssClass='btn btn-primary' label="Click"/>
      <Button handleClick={handleClick2} cssClass='btn btn-secondary' label="Submit"/>
      <Button handleClick={handleClick2} cssClass='btn btn-danger' label="Submit"/>      
      <Button handleClick={handleClick2} cssClass='btn btn-warning' label="Submit"/>
      <Counter></Counter>
      <button className="btn btn-primary">hola</button>
    </section>
  )
}

export default App
