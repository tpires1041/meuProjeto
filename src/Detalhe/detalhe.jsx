import { useParams } from "react-router-dom";
import Card from "../Componente/Card";

export default function Detalhe() {
    const { id } = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"));
    console.log(lista);

    const voo = lista.filter((voo) => {
        if(voo.id === id){
            return voo;
        }
        return null;
    });
    console.log(voo);
    return (
        <Card voo={voo[0]}/>
    );
}
