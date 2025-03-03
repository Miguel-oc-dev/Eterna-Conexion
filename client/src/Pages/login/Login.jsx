import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Iniciar Sesión</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Ingresa tu Email..."/>
                <label>Contraseña</label>
                <input type="password" className="loginInput" placeholder="Ingresa tu Contraseña..."/>
                <button className="loginButton">Iniciar Sesión</button>
            </form>
            <button className="loginRegisterButton">Registrar usuario</button>
        </div>
    )
}
