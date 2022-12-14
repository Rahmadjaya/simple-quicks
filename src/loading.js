import  InboxList  from "./inboxlist";

const Loadings = (props) => {
    const Loading = () => {
        if(props.dataloading === true){
            return (
                <div className="loading">
                    <img src="loading.png" className="spin-loading" alt=""></img>
                    <p>Loading Chats...</p>
                </div>
            )
        } else {
            return (
                <div className="content-listchat">
                    <InboxList datalist={props.datalistchat}/>
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