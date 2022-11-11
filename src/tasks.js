import  LoadingTasks  from "./loadingtasks";
import { useState, useEffect } from "react";
import  FooterTasks  from "./footertasks";

function Tasks() {
  const [datatasks, setDataTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const response = await fetch('data-tasks.json');
    const data = await response.json();
    setDataTasks(data)
    setTimeout(function() {
        setLoading(false);
    }, 3000);
  }

  const  clickTasks = () => {
    document.getElementsByClassName('list-dropdown')[0].style.display= "inline-block";
  }
  

  return (
    <>
      <div className="header-tasks d-flex">
        <div className="dropdown">
          <div className="label-dropdown" onClick={() => clickTasks()}>My Tasks <span><img src="expand_more_24px.png" alt=""></img></span></div>
          <div className="list-dropdown">
            <div className="item-dropdown">Personal Errands</div>
            <div className="item-dropdown">Urgent to-do</div>
          </div>
        </div>
        <div className="new-tasks">
            <button>New Tasks</button>
        </div>
      </div>
      <LoadingTasks datatasklist={datatasks} dataloading={loading}/>
      <FooterTasks />
    </>
  );
}

export default Tasks;
