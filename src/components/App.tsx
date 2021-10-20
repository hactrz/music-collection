import React from 'react'
import {Route, Switch, useLocation} from 'react-router-dom'

import Artists from '../containers/Artist'
import Albums from '../containers/Album'
import Tracks from '../containers/Track'

import Header from './Header'

export default function App() {
    return (
        <React.Fragment>
            <Header currentPath={useLocation().pathname}/>
            <Switch>
                <Route exact path="/" component={Albums}/>
                <Route exact path="/artist" component={Artists}/>
                <Route exact path="/track" component={Tracks}/>
            </Switch>
        </React.Fragment>
    )
}

