import  TasksList  from "./taskslist";

const LoadingTasks = (props) => {
    const Loading = () => {
        if(props.dataloading === true){
            return (
                <div className="loading">
                    <img src="loading.png" className="spin-loading" alt=""></img>
                    <p>Loading Tasks List...</p>
                </div>
            )
        } else {
            return (
                <div className="content-tasks">
                    <TasksList datatasks={props.datatasklist}/>
                </div>
            )
        }
    }
    return (
        <div>
            <Loading />
        </div>
    )
}
 
export default LoadingTasks;