import React from "react"
import { childrenWithProps } from "../utilitarios/utilitarios"


export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
           {
            childrenWithProps(props)
           }
        </ul>
    </div>