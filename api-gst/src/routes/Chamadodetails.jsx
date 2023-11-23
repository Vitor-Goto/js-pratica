import React from "react"
import axios from "axios"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Chamadodetails = () => {
  const { OS } = useParams()

  const [chamado, setChamado] = useState([])

  const getChamadosdetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:6001/api/chamados/${OS}`
      )

      const data = response.data
      setChamado(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getChamadosdetails()
  }, [])
  return (
    <div className="chamadodetails">
      <h1>Detalhes do chamado</h1>
      <p>{chamado.OS}</p>
      {/* {Object.keys(chamado).map((key) => (
        <div className="chamad" key={key}>
          <p>
            {key}: {chamado[key]}
          </p>
        </div>
      ))} */}
    </div>
  )
}

export default Chamadodetails
