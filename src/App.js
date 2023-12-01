

function Student({id, name, image, email}) {
    return (
        <div>
            <h1>Student List</h1>
            <img className="Student-profile-image" src={image} alt={name} />
            <h2 className="Student-name">{name}</h2>
            <div className="Student-id">id:{id}</div>  
            <div className="Student-email">{email}</div>
        </div>
    )
}
function list(){
    const Students = [{
        name: "Nguyễn Văn A",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c5/c53d5bba40c786410713943c96ba3d48259c7195_full.jpg",
        id: "98787",
        email: "NguyễnVănA@gmail.com",
    },

    {
        name: "Nguyễn Văn B",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/79/7978e3fa1dafbfa77f4d27d0ff2e2b293f71987a_full.jpg",
        id: "35636",
        email: "NguyễnVănB@gmail.com",
    },

    {
        name: "Nguyễn Văn C",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/03/0379803465f4b2ea04b74d7c07cc5d1d3035caa2_full.jpg",
        id: "245346",
        email: "NguyễnVănC@gmail.com",
    },

    {
        name: "Nguyễn Văn D",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/c0/c08d4bdedaa6d3195b8e3168a81fc2baff1b7d20_full.jpg",
        id: "23523",
        email: "NguyễnVănD@gmail.com",
    },

    {
        name: "Nguyễn Văn E",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/9a/9ad87315a57964fd9bc23274ee4e33c0a7dcd0c3_full.jpg",
        id: "565959",
        email: "NguyễnVănE@gmail.com",
    },

    {
        name: "Nguyễn Văn F",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/9a/9ae5a05fc7534b851aba0137a05b8380b87f3145_full.jpg",
        id: "357574",
        email: "NguyễnVănF@gmail.com",
    },

    {
        name: "Nguyễn Văn H",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/9a/9aea62a7ca336cf125d25c5199939b45319f4704_full.jpg",
        id: "59795",
        email: "NguyễnVănH@gmail.com",
    },

    {
        name: "Nguyễn Văn G",
        image: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/9a/9af8eb142b408a23df88662598ba56f12706f78d_full.jpg",
        id: "3255262",
        email: "NguyễnVănG@gmail.com",
    }
]
return (
    <div className="list">
        {Students.map((student) => (
            <Student name={student.name} image={student.image} id={student.id} email={student.email}  />
        ))}
    </div>
 )
}
export default list;