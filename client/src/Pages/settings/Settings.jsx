import "./settings.css"
import Sidebar from "../../Components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Actualiza Tu Cuenta</span>
                    <span className="settingsDeleteTitle">Eliminar Cuenta</span>
                </div>
                <form action="" className="settingsForm">
                    <label>Foto de Perfil</label>
                    <div className="settingsPP">
                        <img 
                            src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0" 
                            alt="" 
                        />
                        <label htmlFor="fileInput">
                            <i class="settingsPPIcon fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Usuario</label>
                    <input type="text" placeholder="Miguel Contreras Ortiz"/>
                    <label>Email</label>
                    <input type="email" placeholder="miguel.oc.dev@gmail.com"/>
                    <label>Contraseña</label>
                    <input type="password"/>
                    <button className="settingsSubmit">Actualizar</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
