/*Formulario de Registro de Usuarios
Nombre, email, contraseña, género, aceptación de términos.
Validación de campos y resumen al enviar.
import React, { useState } from 'react';
*/
import React, { useState } from 'react';
import './RegistroUsuarios.css';

function RegistroUsuarios()
{
    return(
        <form>  
            <label>
                Nombre:
                <input type="text" name="nombre" required />
            </label>
            <label>
                Apellido:
                <input type="text" name="apellido" required />
            </label>
            <label>
                Email:
                <input type="email" name="email" required />
            </label>
            <label>
                Contraseña:
                <input type="password" name="contraseña" required />
            </label>
            <label>
                Género:
                <select name="genero" required>
                    <option value="">Seleccione</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </label>
            <label>
                Acepto los términos y condiciones
                <input type="checkbox" name="terminos" required />
            </label>
            <button type="submit">Registrar</button>
        </form>
            );
}