const Text = ({ style = {} }) => (
  <p style={{...style, fontFamily: "Inter"}}> The Dead!</p>
);
const StyledText = withStyles(Text);

function withStyles(Component){
  return (props) => {
    const style = {
      color: "red",
      fontSize: "2em",
      ...props.style,
    };
    return <Component {...props} style={style} />;
  };
}

function Welcome({myName}){
  return(
    <section>
      <h1>Hello, <span>{myName}</span>😒</h1>
    </section>
  )
}

// export default function MyApp() {
//   return (
//     <div className='App'>
//       <Welcome myName="Pham Kim Kien" />
//       Text Component <Text />
//       StyledText Component <StyledText />
//     </div>
//   );
// }

function User(){
  const myName= "Kien"
  const pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFEIkJFoLQi-i_qHPt6lJnlPkDqVEzK8d23w&usqp=CAU"
  return (
    <section>
      <img className='user-profile-pic' src={pic} alt={myName} />
      <h2 className='user-name'>
        Hello, <span className='user-first-name'>{myName}</span>😒
      </h2>
    </section>
  )
}
export default User;