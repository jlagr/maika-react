import React from 'react'
import {BrowserRouter as Router,
Switch,
Route,
Redirect
} from 'react-router-dom'

import MineScreen from '../components/MineScreen'
import PageRouter from './PageRouter'

const AppRouter = () => {
    return (        
        <Router basename="/maika-react">
            <div>
                <Switch>
                    <Route exact path="/" component= { MineScreen } />                       
                    <Route path="/pages" component= { PageRouter } />                       

                    <Redirect to="/" />                  
                </Switch>
            </div>        
        </Router>
        
    )
}

export default AppRouter
