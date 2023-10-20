import React, { useEffect, useState } from "react";
import './App.css'


function Voos() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
  const [voos, setVoos] = useState( listaLocalStorage || []);
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

useEffect(() => { localStorage.setItem("Lista", JSON.stringify(voos))}, [voos]);


return (
  <div className="container">
    <header>
      <h1>Voos partindo de Presidente Prudente/SP</h1>
    </header>
    
    <img className="SBDN" src="SBDN.jpg"></img>
    
    <div className="form">
    <div class="flex-container">
      <div>
      <label>Empresa: </label>
      <input
        type="text"
        value={empresa}
        onChange={(e) => { setEmpresa(e.target.value) }}
      />
      </div>
      <div>
      <label>Voo: </label>
      <input
        type="text"
        value={codVoo}
        onChange={(e) => { setcodVoo(e.target.value) }}
      />
      </div>
      <div>
      <label>Destino: </label>
      <input
        type="text"
        value={destino}
        onChange={(e) => { setDestino(e.target.value) }}
      />
      </div> 
      <div>
      <label>Horario: </label>
      <input
        type="time"
        value={horario}
        onChange={(e) => { setHorario(e.target.value) }}
      />
      </div>
      </div>      
      
      
      
      <button className="button" onClick={addVoo}>Adicionar Voo</button>
    </div>

    <div className="lista">
      <ul>
        {voos.map((voo, index) => (
          <li key={index} className="item">
            <h2>
              Empresa: {voo.empresa}
            </h2>
            <h2>
              Voo: {voo.codVoo}
            </h2>
            <h2>
              Destino: {voo.destino}
            </h2>
            <h2>
              Horario: {voo.horario}
            </h2>
            <button className="buttonRemover" onClick={() => removeVoos(index)}>Remover Voo</button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

}

export default Voos
