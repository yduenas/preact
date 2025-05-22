// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// Import Cabecera component
import Cabecera from "../../components/cabecera";
import Imagen from "../../components/imagen";
import Tabla from "../../components/tabla";

// import Button from '../../components/button';
// import Counter from '../../components/counter';

// Update the import path if Button is located elsewhere, for example:
// interface HomeProps {
//   currentValue?: string;
//   onChange?: React.ChangeEventHandler<HTMLSelectElement>;
// }

// function Home(props: HomeProps) {
function Home() {
  // let currentValue = props.currentValue || "DEFAULT";

  return (
    <div className="container mx-5">
      <Cabecera />

      <div className="row mt-5 mb-5">
        <Imagen />

        <Tabla />

        <Imagen />
      </div>
    </div>
  );
}

export default Home;
