import "./App.css"
function User({name, pic}){
    return (
        <section>
            <img className="user-profile-pic" src={pic} alt={name} />
            <h2 className="user-name">
                Hello, <span className="user-first-name">{name}</span>
            </h2>
        </section>
    )
}
function App(){
    const users = [{
        name: "DatOC",
        pic : "https://nguoinoitieng.tv/images/nnt/102/0/bgbf.jpg"
    },
{
        name: "NAD",
        pic : "https://gamewiki.com.vn/upload/post/images/2023/06/02/353/dung-ct-1.jpg"
},
    {
        name: "PAV",
        pic : "https://gamenoob.net/wp-content/uploads/2021/03/Vu-Hay-Ho-Thanh-vien-com-can-cua-Team-750x375.jpg"
}
 ]
 return (
    <div className="App">
        {users.map((user) => (
            <User name={user.name} pic={user.pic} />
        ))}
    </div>
 )
}
export default App;