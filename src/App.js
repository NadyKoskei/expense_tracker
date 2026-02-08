import Home from "./Components/Home";

function Main() {
  console.log("This is the main function.");

  let name = "Nady";
  console.log(name);

  setTimeout(() => {
    name = "To expense tracker";
    console.log(name, 'after timeout');
  }, 2000);
  return (
    <>
      <div className="first-div">

        {/* <Home name = {name}/>  */}

        Hii {name}
      </div>
    </>
  );
}

export default Main;
