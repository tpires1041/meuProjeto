import { useParams } from "react-router-dom"

export default function Detalhe(){

    const { id } = useParams();

    return(
        <div>
            <h1>Olá</h1>
        </div>
    )
}