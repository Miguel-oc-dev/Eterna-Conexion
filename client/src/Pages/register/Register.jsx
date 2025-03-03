import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Registro de Usuario</span>
            <form className="registerForm">
                <label>Nombre de usuario</label>
                <input type="text" className="registerInput" placeholder="Nombre de usuario..."/>
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Ingresa tu Email..."/>
                <label>Contraseña</label>
                <input type="password" className="registerInput" placeholder="Ingresa tu Contraseña..."/>
                <button className="registerButton">Registrar</button>
            </form>
            <button className="registerLoginButton">Iniciar Sesión</button>
        </div>
    )
}
