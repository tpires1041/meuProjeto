
import React, { useState } from "react";

function Voos() {
  const [voos, setVoos] = useState([]);
  const [empresa, setEmpresa] = useState("");
  const [destino, setDestino] = useState("");
  const [horario, setHorario] = useState("");
  const [valor, setValor] = useState("");

  function addVoo() {
    const vooNovo = {empresa, destino, horario, valor};
    const lista = [...voos, vooNovo];
    setVoos(lista);
    setEmpresa("")
    setDestino("")
    setHorario("")
    setValor("")
}

export default Voos
