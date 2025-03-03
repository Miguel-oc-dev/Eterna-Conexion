import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">¿QUIENES SOMOS?    </span>
                <img src="https://www.chococacaomaya.com.mx/quehacerentulum/wp-content/uploads/2021/04/ven-a-la-luz.jpg" alt="" />
                <p>Sed eu sem tempus, gravida massa vitae, rutrum quam. Morbi ac nunc justo. Nulla nulla tellus, semper vitae interdum vitae, hendrerit et quam.

                </p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">LUGARES ICÓNICOS  </span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Tulum</li>
                <li className="sidebarListItem">Cenotes</li>
                <li className="sidebarListItem">Chichén Itzá</li>
                <li className="sidebarListItem">Xcatel</li>
                <li className="sidebarListItem">Xpu-Há</li>
                <li className="sidebarListItem">Akumal</li>
                <li className="sidebarListItem">Bacalar</li>
                <li className="sidebarListItem">Cobá</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">¡SIGUENOS! </span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-x-twitter"></i>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
            </div>
        </div>
    )
}
