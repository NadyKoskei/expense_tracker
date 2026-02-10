import { useEffect } from "react";

function Home(props){

// console.log(props, 'fromHome');

// useEffect(() => {
//     console.log('home component created');

//     return () => {
//         console.log('home component destroyed');
//     }
// }, []);    


return(
    <div>
       Home Component {props.name}
    </div>
);
}

export default Home;