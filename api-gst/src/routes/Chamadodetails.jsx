import React from "react"
import axios from "axios"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Chamadodetails = () => {
  const { id } = useParams()

  const [chamado, setChamado] = useState()

  const getChamadosdetails = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/chamados/${id}`)
      const data = response.data
      setChamado(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getChamadosdetails()
  }, [])

  return <div>Chamadodetails</div>
}

export default Chamadodetails
