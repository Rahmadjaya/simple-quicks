import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  FooterInbox  from "./footerinbox";


const InboxPrivate = () => {
    const [nameChat, setNameChats] = useState('');
    const [dateChat, setDateChats] = useState('');
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputchat, setInputChat] = useState('');

    let history = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const  url_string = window.location.href;
        const  url = new URL(url_string);
		const  id = url.searchParams.get("id");
        const response = await fetch('data-quicks.json');
        const data = await response.json();
        const dataid = data.listchat.filter((e) => {
            return e.id === Number(id) && e.role === "private";
        })
        setNameChats(dataid[0].name);
        setDateChats(dataid[0].date);
        setChats(dataid[0].chat);

        setTimeout(function() {
            setLoading(false);
        }, 3000);
    }

    const  clickOption = (id) => {
        document.getElementsByClassName('action-message')[0].style.display= "none";
        document.getElementById('option'+id).style.display= "inline-block";
	}

    const saveSubmit = async(e) => {
        e.preventDefault();
        const newInput = {
            "id": chats.length+1,
            "nameMassanger": "You",
            "color":"",
            "datetime": "15.04",
            "Massage": inputchat
        }
        setChats(chats.concat(newInput));
        setInputChat('')
    }
    
    return (
        <div className="chat private-chat">
            <div className="header-chat">
                <button className="back-chat"  onClick={() => history(-1)}>
                    <img src="arrow_back_24px.png" alt=""></img>
                </button>
                <div className="title-chat">
                    <div className="name-chat">{nameChat}</div>
                </div>
                <button className="back-chat"  onClick={() => history(-1)}>
                    <img src="close_24px.png" alt=""></img>
                </button>
            </div>
            <div className="content-chat">
                <div className="line-date">
                    <div><hr/></div>
                    <div className="line-datetime">
                        {dateChat}
                    </div>
                    <div><hr/></div>
                </div>
                {chats.map((data, i) => (
                    <div key={data.id} className={`messanger-chat-${data.color} ${data.nameMassanger === "You" && "messanger-chat-me"} ${data.nameMassanger !== "You" && "messanger-chat"} `}>
                        <div className="name-messager">{data.nameMassanger}</div>
                        <div className="desc-message">
                            {data.nameMassanger === "You" && 
                                <div className="option-message">
                                    <img src="more_horiz_24px.png" alt="" onClick={() => clickOption(data.id)}></img>
                                    <div className="action-message" id={`option${data.id}`}>
                                        <div className="item-action-message edit">Edit</div>
                                        <div className="item-action-message delete">Delete</div>
                                    </div>
                                </div>
                            }
                            <p>
                                {data.Massage}
                                <br/>
                                <br/>
                                <span className="time">{data.datetime}</span>
                            </p>
                            {data.nameMassanger !== "You" && 
                                <div className="option-message">
                                    <img src="more_horiz_24px.png" alt="" onClick={() => clickOption(data.id)}></img>
                                    <div className="action-message" id={`option${data.id}`}>
                                        <div className="item-action-message edit">Edit</div>
                                        <div className="item-action-message delete">Delete</div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                ))}
                <div className="notif-new-message">
                    <div className="notif">
                        New Message
                    </div>
                </div>
            </div>
            {loading === true && 
                <div className="notif-loading-chat">
                    <div className="loading-chat">
                        <div className="spin-loading-chat">
                            <img className="icon-spin-loading" src="schedule_24px_outlined-12.svg" alt=""></img>
                        </div>
                        <p>Place wait while we connect you with one our team...</p>
                    </div>
                </div>
            }
            <form className="footer-chat" onSubmit={saveSubmit}>
                <input className="input" placeholder="Type a new message" value={inputchat} onChange={(e) => setInputChat(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
            <FooterInbox />
        </div>
    )
}
 
export default InboxPrivate;