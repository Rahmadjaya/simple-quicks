import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Chat = () => {
    let history = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {

        // setLoading(false);
    }
    return (
        <div className="chat">
            <div className="header-chat">
                <button className="back-chat"  onClick={() => history(-1)}>
                    <img src="schedule_24px_outlined-12.svg" alt=""></img>
                </button>
                <div className="title-chat">
                    <div className="name-chat">Nama group jamaah</div>
                    <div className="participants">3 participant</div>
                </div>
                <button className="back-chat"  onClick={() => history(-1)}>
                    <img src="schedule_24px_outlined-12.svg" alt=""></img>
                </button>
            </div>
            <div className="content-chat">
                <div className="messanger-chat">
                    <div className="name-messager">Hilda</div>
                    <div className="desc-message">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates perspiciatis quod vero ea magnam adipisci?
                            <br/>
                            <br/>
                            <span className="time">19.09</span>
                        </p>
                        <div className="option-message">
                            <img src="schedule_24px_outlined-12.svg" alt=""></img>
                            <div className="action-message">
                                <div className="item-action-message edit">Edit</div>
                                <div className="item-action-message delete">Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="messanger-chat-me">
                    <div className="name-messager">You</div>
                    <div className="desc-message">
                        <div className="option-message">
                            <img src="schedule_24px_outlined-12.svg" alt=""></img>
                            <div className="action-message">
                                <div className="item-action-message edit">Edit</div>
                                <div className="item-action-message delete">Delete</div>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates perspiciatis quod vero ea magnam adipisci?
                            <br/>
                            <br/>
                            <span className="time">19.09</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
 
export default Chat;