import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Eterna Conexión </span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img 
                alt="" className="headerImg"
                src="https://image-tc.galaxy.tf/wijpeg-c9wkpph9vvfrm3kqvkuhl08sk/tulum-1920x1080_wide.jpg?crop=0%2C0%2C1920%2C1080&width=2500" 
            />
        </div>
    );
}
