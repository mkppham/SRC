import './App.css';
import PricingPage from './Component/PricingPage';

// const Text = ({ style = {} }) => (
//     <p style={{...style, fontFamily: "Inter"}}> Hello World!</p>
// );
// const StyledText = withStyles(Text);

// function withStyles(Component){
//     return (props) => {
//         const style  = {
//             color: "red",
//             fontSize: "2em",
//             ...props.style,
//         };
//         return <Component {...props} style={style} />;
//     };
// }

// function Welcome({myName}){
//     return(
//         <section>
//             <h1>Hello, <span>{myName}</span> </h1>
//         </section>
//     )
// }

// function MyButton() {
//     const [count, setCount] = useState(0);

//     function handleClick() {
//         setCount(count + 1 );
//     }

//     return (
//         <button onClick={handleClick}>
//            Clicked {count} times  
//         </button>
//     );
// }

export default function MyApp() {
    return (
        <div className='App'>
            <PricingPage />
        </div>
    );
}