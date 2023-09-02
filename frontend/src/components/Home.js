import * as React from 'react'
import { useState } from 'react';

import { Card } from 'react-bootstrap';

const Home =()=>{
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const sendLogin = ()=>{
    if(!!email || !!password) return;
    fetch("http://localhost:9030/login", {
      method:'POST'
    })
  }

  return (
    <Card style={{ margin:'30px' }} className="justify-content-center align-items-center">
      <Card.Body >
          <div style={{ width:'100%', textAlign:'center' }} >
            <form class="form" method="POST">
            <h1>Tienda CI/CD</h1>
            <span>
              Somos una Tienda de prueba para CI/CD
            </span>
              <div class="form-group">
                  <label for="email" class="text-info"></label>
                  <input type="email" name="email" id="email" class="form-control" 
                      onChange={(e)=> setEmail(e.target.value)} defaultValue={email} />
              </div>
              <div class="form-group">
                  <label for="password" class="text-info"></label>
                  <input type="password" name="password" id="password" class="form-control" 
                      onChange={(e)=> setPassword(e.target.value)} defaultValue={password} />
              </div>
              <hr/>
              <div className='row'>
                <button className='btn btn-sm btn-primary col-9 mx-3' type='submit'>Acceder</button>
                <button className='btn btn-sm btn-secondary col-1' type='submit'>?</button>
              </div>
          </form>
        </div>
        </Card.Body>
    </Card>
  )
};

export default Home;