import React from 'react'
import { useState } from 'react'

function Form() {
   const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(values)
    }

    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <h2 className='titleContac'>Contacto</h2>
                <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    />
                {values.nombre.length === 0 && <small className='dateImput'>Campo obligatorio</small>}

                <input
                    className="form-control my-2"
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    value={values.apellido}
                    onChange={handleInputChange}
                    />
                {values.apellido.length === 0 && <small className='dateImput'>Campo obligatorio</small>}

                <input
                    className="form-control my-2"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                />
                {values.email.length === 0 && <small className='dateImput'>Campo obligatorio</small>}
            
                <div>
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
                
            </form>
        </div>
    )
}

export default Form
