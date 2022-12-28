import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function Formulario({label, passwords, span}) {

    

    const [name, setName] = useState ('')
    const [password, setPassword] = useState ('')
    const [error, setError] = useState (false)
    const [sucess, setSucess] = useState (false)

    if(password === '252525'){
       document.getElementById('btn').style.display = 'block'
    }
    
    const validarInput = (e) => {
        e.preventDefault()

        if(name === ''){
            setError(true)
            setSucess(false)
        }else if(name.length > 0){
            setError(false)
            setSucess(true)
        }

        
    }


    return (
        <div className='containerForm'>
            <Form onSubmit={validarInput}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{label}</Form.Label>
                    <Form.Control type="text" placeholder="Enter you name" name='name' onChange={(e) => setName(e.target.value)}/>
                    <Form.Text className="text-muted">
                       {span}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>{passwords}</Form.Label>
                    <Form.Control  type="password" placeholder="Password" name='password' onKeyUp={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" id='btn' style={{display: 'none', textAlign: 'center', width: '100%'}}>
                    Send
                </Button>
                {error ? <p className='error' style={{color: 'red'}}>Debe Ingresar tu nombre</p> : null}
                {sucess ? <p className='error' style={{color: 'green'}}>Ingresaste el nombre</p> : null}
            </Form>
        </div>
    )
}

export default Formulario