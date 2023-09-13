import React, { useState } from "react";
import './App.css'

function Voos() {
  const [voos, setVoos] = useState([]);
  const [empresa, setEmpresa] = useState("");
  const [codVoo, setcodVoo] = useState("");
  const [horario, setHorario] = useState("");
  const [destino, setDestino] = useState("");

  function addVoo() {
    const vooNovo = {empresa, codVoo, horario, destino};
    const listaDeVoos = [...voos, vooNovo];
    setVoos(listaDeVoos);
    setEmpresa("")
    setcodVoo("")
    setDestino("")
    setHorario("")
}

function removeVoos(index){
  const listaDeVoos = voos.filter((voo, i) => i !== index);
  setVoos(listaDeVoos);
}

return (
  <div className="container">
    <h1>Voos partindo de Presidente Prudente</h1>
    <div className="form">
      <label>Empresa: </label>
      <input
        type="text"
        value={empresa}
        onChange={(e) => { setEmpresa(e.target.value) }}
      />
      <label>Voo: </label>
      <input
        type="text"
        value={codVoo}
        onChange={(e) => { setcodVoo(e.target.value) }}
      />
      <label>Destino: </label>
      <input
        type="text"
        value={destino}
        onChange={(e) => { setDestino(e.target.value) }}
      />
      <label>Horario: </label>
      <input
        type="text"
        value={horario}
        onChange={(e) => { setHorario(e.target.value) }}
      />
      <button onClick={addVoo}>Adicionar Voo</button>
    </div>

    <div className="lista">
      <ul>
        {voos.map((voo, index) => (
          <li key={index} className="item">
            <p>
              Empresa: {voo.empresa}
            </p>
            <p>
              Voo: {voo.codVoo}
            </p>
            <p>
              Destino: {voo.destino}
            </p>
            <p>
              Horario: {voo.horario}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

}

export default Voos
