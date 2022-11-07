import  Loadings  from "./loading";

function App() {
  return (
    <div>
      <form className="search">
        <input placeholder="Search"/>
        <span>
          <img src="schedule_24px_outlined-12.svg" alt=""></img>
        </span>
      </form>
      <Loadings />
    </div>
  );
}

export default App;
