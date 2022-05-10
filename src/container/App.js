import React, { useState } from "react";
import "../assets/css/App.css";

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajeDos, setMensajeDos] = useState("");

  let calcIMC = (event) => {
    event.preventDefault();
    if (altura === 0 || peso === 0) {
      alert("Por favor ingrese un peso y altura correcta.");
    } else {
      const imc = peso / (altura * altura);
      setImc(imc.toFixed(1));
      setMensajeDos("*Esta Calculadora es para mayores de 20 Años");
      if (imc < 18.5) {
        setMensaje("Estas con Bajo peso");
      } else if (imc > 18.5 && imc < 24.99) {
        setMensaje("Estas con peso Normal");
      } else if (imc > 25 && imc < 29.99) {
        setMensaje("Estas con Sobrepeso");
      } else {
        setMensaje("Tienes Obesidad");
      }
    }
  };
  const recargar = () => {
    if (altura === 0 || peso === 0) {
      alert("No hay ningun peso y altura cargada para reiniciar.");
    } else {
      window.location.reload();
    }
  };
  let imgSrc;

  if (imc < 1) {
    imgSrc = "";
  } else if (imc <= 18.5) {
    imgSrc = require("../assets/static/naranja.png");
  } else if (imc > 18.6 && imc <= 25) {
    imgSrc = require("../assets/static/verde.png");
  } else if (imc > 25.01 && imc < 30) {
    imgSrc = require("../assets/static/amarillo.png");
  } else {
    imgSrc = require("../assets/static/rojo.png");
  }

  return (
    <div className="App BlinkMacSystemFont flex justify-center items-center min-h-screen text-center">
      <div className="container shadow-2xl rounded p-4">
        <h2 className="flex justify-center items-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Calculadora IMC
        </h2>
        <form className="flex justify-center items-center flex-col">
          <div className="flex items-center flex-col  justify-center">
            <label htmlFor="">Peso(kgs)</label>
            <input
              type="number"
              value={peso}
              className="w-full my-8  border-solid border-slate-700 border rounded text-center"
              onChange={(event) => setPeso(event.target.value)}
            />
          </div>
          <div className="flex items-center flex-col justify-center">
            <label htmlFor="">Altura (m)</label>
            <input
              type="number"
              className="w-full  my-8  border-solid border-slate-700 border rounded text-center"
              value={altura}
              onChange={(event) => setAltura(event.target.value)}
            />
          </div>
          <div className="btns">
            <button
              className="btn bg-blue-500 shadow-lg shadow-blue-500/50 text-slate-50 p-4 my-4 w-full rounded "
              type="submit"
              onClick={calcIMC}
            >
              Calcular
            </button>
            <button
              className="btn bg-indigo-500 shadow-lg shadow-indigo-500/50 text-slate-50 p-4 my-4 w-full rounded"
              type="submit"
              onClick={recargar}
            >
              Reiniciar
            </button>
          </div>
        </form>
        <div className="center">
          {!imc ? <p></p> : <p>Tu IMC es: {imc}</p>}
          <p className="my-4">{mensaje}</p>
        </div>
        <div className="img-container flex justify-center">
          <img src={imgSrc} alt="" className="h-48" />
        </div>
        <p className="my-1 text-xs">{mensajeDos}</p>{" "}
      </div>
    </div>
  );
}

export default App;
