import { Link} from "react-router-dom";

 
const ListChat = (props) => {
    return (
        <div className="list-chats">
            {props.datalist.map((data, i) => (
                <Link className="item-chats" key={data.id} to={`${data.url}?id=${data.id}`}>
                    {data.role === "group" && 
                        <div className="profile-chat">
                            <div className="group-chat group-chat-1">
                                <img src="person_24px-1.png" alt=""></img>
                            </div>
                            <div className="group-chat group-chat-2">
                                <img src="person_24px.png" alt=""></img>
                            </div>
                        </div>
                    }
                    {data.role === "private" && 
                        <div className="profile-chat">
                            <div className="group-chat group-chat-2">
                                <span>
                                    {data.name.substring(0,1)}
                                </span>
                            </div>
                        </div>
                    }
                    <div className="display-chat">
                        <div className="header">
                            <div className="name">{data.name}</div>
                            <div className="date">{data.date}</div>
                        </div>
                        {data.role === "group" && 
                            <div className="massager">{data.newMassager} :</div>
                        }
                        <div className="massage">
                            <div className="text"> {data.newMassage}</div>
                            {data.notif === true && 
                                <div className="notif">
                                    <div className="icon-notif"></div>
                                </div>
                            }
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
 
export default ListChat;