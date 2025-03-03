import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
                className="postImg"
                src="https://th.bing.com/th/id/OIP.WzpL8kP1wcGIsX7oY2cZ8AHaE9?rs=1&pid=ImgDetMain" 
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Tulum</span>
                    <span className="postCat">Zamá</span>
                </div>
                <span className="postTitle">
                    Cras et nunc lacus.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Quisque volutpat pulvinar mi, a feugiat lorem lacinia vitae. In pharetra justo in nibh imperdiet euismod. In hac habitasse platea dictumst. Suspendisse arcu lectus, gravida eu lacinia at, dignissim nec nisl. Vestibulum semper elementum finibus. Sed id eleifend justo.
            </p>
        </div>
    );
}
