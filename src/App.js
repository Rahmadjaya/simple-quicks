import  Loadings  from "./loading";
import { useState, useEffect } from "react";

function App() {
  const [datalist, setDataList] = useState([]);
  const [datalistfirst, setDataListFirst] = useState([]);
  const [search, setTextSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const response = await fetch('data-quicks.json');
    const data = await response.json();
    setDataList(data.listchat)
    setDataListFirst(data.listchat)
    setTimeout(function() {
        setLoading(false);
    }, 3000);
  }
  
  const  TextSearch = (e) => {
    setTextSearch(e.target.value)
    if(search !== ''){
      const filtered = datalist.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(search)));
      setDataList(filtered)
    } else {
      setDataList(datalistfirst)
    }
  }

  return (
    <div>
      <form className="search">
        <input placeholder="Search" value={search} onChange={(e) => TextSearch(e)} />
        <span>
          <img src="search_24px.png" alt=""></img>
        </span>
      </form>
      <Loadings datalistchat={datalist} dataloading={loading}/>
    </div>
  );
}

export default App;
