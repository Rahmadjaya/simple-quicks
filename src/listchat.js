import { useState, useEffect } from "react";
 
const ListChat = () => {
    // const [member, setMembers] = useState([]);
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    // const [modaladd, setModalAdd] = useState(false);

    useEffect(() => {
        // fetchData();
    }, []);
 
    // const fetchData = async() => {
    //     const response = await fetch('http://localhost:3005/api/getusers');
    //     const data = await response.json();
    //     setMembers(data);
    // }
 
    // const deleteMember = async(id) => {
    //     await fetch(`http://localhost:3005/api/deleteuser/${id}`,{
    //         method: 'DELETE',
    //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    //     });
    //     fetchData();
    // }

    // const clickModalAdd = () => {
    //     setModalAdd(true);
	// }

    // const ModalAdd = () => {
	// 	if(modaladd === true){
	// 		return(
	// 			<div className="modal-form">
    //                 <form onSubmit={saveSubmit}>
    //                     <h2>Add User</h2>
    //                     <button className="dismiss" onClick={() => setModalAdd(false)}>&#8855;</button>
    //                     <div className="group">
    //                         <label htmlFor="username">Username</label>
    //                         <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
    //                     </div>
    //                     <div className="group">
    //                         <label htmlFor="password">Password</label>                        
    //                         <input type="password" id="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
    //                     </div>
    //                     <div className="group">
    //                         <label htmlFor="email">Email</label>                        
    //                         <input type="email" id="email" placeholder="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
    //                     </div>
    //                     <button type="submit">Submit</button>
    //                 </form>
	// 			</div>
	// 		)
	// 	}
	// }

    // const saveSubmit = async(e) => {
    //     e.preventDefault();
    //     await fetch('http://localhost:3005/api/insertuser',{
    //         method: "POST",
    //         body: JSON.stringify({ 
    //             username    : username, 
    //             password    : password, 
    //             email       : email
    //         }),
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //     .then(response => response.json())
    //         .then(data =>{
    //            console.log(data)
    //         } );
    //     setModalAdd(false);
    //     fetchData();
    // }
 
    return (
        <div className="list-chats">
            <div className="item-chats">
                <div className="profile-chat">
                    <div className="group-chat group-chat-1">
                        <img src="schedule_24px_outlined-12.svg" alt=""></img>
                    </div>
                    <div className="group-chat group-chat-2">
                        <img src="schedule_24px_outlined-12.svg" alt=""></img>
                    </div>
                </div>
                <div className="display-chat">
                    <div className="header">
                        <div className="name"> Nama messager</div>
                        <div className="date">01/08/2022 19:00</div>
                    </div>
                    <div className="massager">Ellen</div>
                    <div className="massage">
                        <div className="text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque.</div>
                        <div className="notif">
                            <div className="icon-notif"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="item-chats">
                <div className="profile-chat">
                    <div className="group-chat group-chat-2">
                        <img src="schedule_24px_outlined-12.svg" alt=""></img>
                    </div>
                </div>
                <div className="display-chat">
                    <div className="header">
                        <div className="name"> Nama messager</div>
                        <div className="date">01/08/2022 19:00</div>
                    </div>
                    <div className="massage">
                        <div className="text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque.</div>
                        <div className="notif">
                            <div className="icon-notif"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {member.map((data, i) => (
                <tr key={data._id}>
                    <td>{ i + 1 }</td>
                    <td>{ data.username }</td>
                </tr>
            ))} */}
            {/* <ModalAdd /> */}
        </div>
    )
}
 
export default ListChat;