import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Chats = () => {
    let history = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {

        // setLoading(false);
    }
    return (
        <div className="search">
            <button  onClick={() => history(-1)}>Back</button>
        </div>
    )
}
 
export default Chats;