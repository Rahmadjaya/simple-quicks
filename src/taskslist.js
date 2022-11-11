
 
const TasksList = (props) => {
    console.log(props.datatasks)

    const  clickOption = () => {

	}

    const  checkTasks = (id) => {

	}

    return (
        <>
            {props.datatasks.map((data, i) => (
                <div className="label-tasks" key={i}>
                    <div className="d-flex">
                        <label>
                            <input type="checkbox" value="" onChange={() => checkTasks(data.id)}/> <span>{data.name}</span>
                        </label>
                        <div className="date">
                            <div className="expdate">{data.expdate} Days Left</div>
                            <div className="datetime">{data.date}</div>
                            <img src="expand_more-top_24px.png" alt="" />
                            <img src="more_horiz_24px.png" alt="" onClick={() => clickOption()} />
                        </div>
                    </div>
                    <div className="description-date">
                        <img src="schedule_24px.png" alt=""/>
                        <input type="date" className="datetimepicker"/>
                    </div>
                    <div className="description">
                        <img src="edit_24px.png" alt=""/>
                        <div>{data.description}</div>
                    </div>
                </div>
            ))}
        </>
    )
}
 
export default TasksList;