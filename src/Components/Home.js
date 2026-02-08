function Home(props){

console.log(props, 'fromHome');

return(
    <div>
       Home Component {props.name}
    </div>
);
}

export default Home;