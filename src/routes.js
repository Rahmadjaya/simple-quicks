import React from 'react';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { createBrowserHistory } from 'history' 
import ListChat from './listchat';
import Chat from './chat';
import App from './App';
// import Header from './header';
const history = createBrowserHistory();

export const routes = (
    <Router history={ history }>
        <div>
            {/* <Header /> */}
            <div className="main">
                <Routes>
                    <Route exact path="/" element={<App />}/>
                    <Route path="/listchat" element={<ListChat />}/>  
                    <Route path="/chat" element={<Chat />}/>  
                </Routes>
            </div>
        </div>
    </Router>
);