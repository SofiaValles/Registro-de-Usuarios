/* Formulario de Registro de Usuarios
Nombre, email, contraseña, género, aceptación de términos.
Validación de campos y resumen al enviar.
*/
import React, { useState } from 'react';
import './App.css';

function App() {
    const [form, setForm] = useState({
        nombre: '',
        apellido: '',
        email: '',
        contrasena: '',
        genero: '',
        terminos: false,
    });
    const [resumen, setResumen] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.terminos) {
            alert('Debes aceptar los términos y condiciones');
            return;
        }
        setResumen(
            `Nombre: ${form.nombre}\nApellido: ${form.apellido}\nEmail: ${form.email}\nGénero: ${form.genero}`
        );
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
                </label>
                <label>
                    Apellido:
                    <input type="text" name="apellido" value={form.apellido} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </label>
                <label>
                    Contraseña:
                    <input type="password" name="contrasena" value={form.contrasena} onChange={handleChange} required />
                </label>
                <label>
                    Género:
                    <select name="genero" value={form.genero} onChange={handleChange} required>
                        <option value="">Seleccione</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                </label>
                <label>
                    Acepto los términos y condiciones
                    <input type="checkbox" name="terminos" checked={form.terminos} onChange={handleChange} required />
                </label>
                <button type="submit">Registrar</button>
            </form>
            {resumen && (
                <div>
                    <h2>Resumen</h2>
                    <pre>{resumen}</pre>
                </div>
            )}
        </div>
    );
}

export default App;