import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img 
                className="writeImg"
                src="https://cdn.getyourguide.com/img/location/5d304ffc17916.jpeg/88.jpg" 
                alt="" 
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Cuentanos tu historia..." 
                        type="text"
                        className="writeInput writeText">
                    </textarea>
                </div>
                <button className="writeSubmit">Publicar</button>
            </form>
        </div>
    );
}
