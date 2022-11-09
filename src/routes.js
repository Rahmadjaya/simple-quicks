import React from 'react';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { createBrowserHistory } from 'history' 
import ListChat from './listchat';
import Chat from './chat';
import PrivateChat from './privatechat';
import App from './App';
// import Header from './header';
const history = createBrowserHistory();

export const routes = (
    <Router history={ history }>
        <div className="main">
            {/* <Header /> */}
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<App />}/>
                    <Route path="/listchat" element={<ListChat />}/>  
                    <Route path="/chat" element={<Chat />}/>  
                    <Route path="/privatechat" element={<PrivateChat />}/>  
                </Routes>
            </div>
            <div className="footer">
                <div className="d-flex">
                    <div className="chrome-reader-mode">
                        <img src="chrome_reader_mode_24px.png" alt=""></img>
                    </div>
                    <div className="question-answer">
                        <div className="ellipse ellipse-1">
                        </div>
                        <div className="ellipse ellipse-2">
                            <img src="question_answer_24px.png" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Router>
);