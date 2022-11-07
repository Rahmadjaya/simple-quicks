import { useState, useEffect } from "react";
import  ListChat  from "./listchat";

const Loadings = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {

        // setLoading(false);
    }
    const Loading = () => {
        if(loading === true){
            return (
                <div className="loading">
                    <img src="schedule_24px_outlined-12.svg" className="spin-loading" alt=""></img>
                    <p>Loading Chats...</p>
                </div>
            )
        } else {
            return (
                <div>
                    <ListChat />
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
 
export default Loadings;