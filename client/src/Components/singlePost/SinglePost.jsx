import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                    src="https://h2ohcruises.com/wp-content/uploads/2023/02/Cenote-Caracol.jpg" 
                    alt="" 
                    className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Miguel Contreras Ortiz</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Donec nec tincidunt libero. Proin a arcu ex. Vivamus nec sodales est. Nunc blandit tellus sed quam luctus, sed cursus dolor luctus. Maecenas hendrerit odio sit amet aliquam volutpat. Mauris commodo quis nunc vitae consequat. Nullam a libero et massa tristique tempor.
                    Phasellus bibendum consectetur eros, a mattis quam ultrices id. Proin eget ante urna. Sed lacinia vel eros eget rhoncus. Vestibulum aliquet elementum commodo. Proin nisi turpis, congue tempor elit eu, scelerisque efficitur ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi nisl diam, bibendum egestas elit interdum, lacinia auctor odio. Cras eu nisi et mi consequat facilisis.
                    Ut vitae quam purus. Quisque efficitur sem ut ante aliquam, volutpat lacinia massa tempus. Aliquam tempus sagittis purus, in cursus enim aliquet ac. Aenean vitae nibh nibh. Maecenas convallis libero eu leo volutpat, sed euismod massa feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque malesuada dolor at eros facilisis, et tincidunt nisi viverra. Maecenas eget erat orci. In elementum risus eu tincidunt imperdiet. Fusce ligula orci, aliquam vel ullamcorper at, iaculis maximus ligula. Suspendisse mattis sagittis semper. Aenean in mattis leo, et sodales ante.

                    Donec nec tincidunt libero. Proin a arcu ex. Vivamus nec sodales est. Nunc blandit tellus sed quam luctus, sed cursus dolor luctus. Maecenas hendrerit odio sit amet aliquam volutpat. Mauris commodo quis nunc vitae consequat. Nullam a libero et massa tristique tempor. Phasellus bibendum consectetur eros, a mattis quam ultrices id. Proin eget ante urna. Sed lacinia vel eros eget rhoncus. Vestibulum aliquet elementum commodo. Proin nisi turpis, congue tempor elit eu, scelerisque efficitur ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi nisl diam, bibendum egestas elit interdum, lacinia auctor odio. Cras eu nisi et mi consequat facilisis.

                    Quisque sit amet sapien quis nibh lobortis mattis. Phasellus libero nulla, condimentum eget congue at, convallis et eros. Quisque metus metus, rhoncus non est accumsan, venenatis placerat odio. Donec eget lectus ac ante bibendum eleifend. Nullam ullamcorper dolor elit, auctor hendrerit massa venenatis eu. Donec convallis eu diam id varius. Nam condimentum scelerisque elit sed aliquet. Maecenas vel ante tincidunt, luctus diam eu, lacinia felis. Morbi rhoncus urna a imperdiet fringilla. Etiam eleifend felis sit amet hendrerit viverra. Donec fringilla purus nec dictum pellentesque. Morbi tellus tortor, suscipit ut diam sit amet, varius egestas metus. Donec euismod egestas nunc, eu convallis dolor vehicula id. Vivamus quis convallis dui.
                </p>
            </div>
        </div>
    );
}
