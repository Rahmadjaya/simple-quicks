import React from 'react';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { createBrowserHistory } from 'history' 
import InboxGroup from './inboxgroup';
import InboxPrivate from './inboxprivate';
import App from './app';
import Inbox from './inbox';
import Tasks from './tasks';
const history = createBrowserHistory();

export const routes = (
    <Router history={ history }>
        <div className="main">
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<App />}/>
                    <Route path="/inbox" element={<Inbox />}/>  
                    <Route path="/inboxgroup" element={<InboxGroup />}/>  
                    <Route path="/inboxprivate" element={<InboxPrivate />}/>  
                    <Route path="/tasks" element={<Tasks />}/>  
                </Routes>
            </div>
        </div>
    </Router>
);