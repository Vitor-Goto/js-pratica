import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render (
    <div>
    <Pai nome="Paulo" sobrenome="Silva"> 
        <Filho nome="pedro"  />
        <Filho nome="paulo"  />
        <Filho nome="carla"  />
    </Pai>
    </div>
    , document.getElementById('root'))