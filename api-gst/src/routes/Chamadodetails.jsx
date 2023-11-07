import React from "react"
import axios from "axios"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Chamadodetails = () => {
  const { id } = useParams()

  const [chamado, setChamado] = useState({})

  const getChamadosdetails = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/chamados/${id}`)

      const data = response.data
      setChamado(data)
      console.log(data)
      console.log(typeof data, typeof chamado.map)
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
      {Object.keys(chamado).map((key) => (
        <div className="chamad" key={key}>
          <p>
            {key}: {chamado[key]}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Chamadodetails
