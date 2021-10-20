import React from 'react'
import {withRouter, RouteComponentProps} from 'react-router'
import {Link} from 'react-router-dom'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

interface LinkTab {
    to: string
    label: string
}

class Header extends React.Component<RouteComponentProps & { currentPath: string }> {
    state = {
        value: this.props.currentPath,
    }
    handleChange = (e: React.FormEvent, value: string) => {
        this.setState({value})
    }

    render() {
        const {value} = this.state
        const linkTabs: LinkTab[] = [
            {to: '/', label: 'Альбомы'},
            {to: '/artist', label: 'Исполнители'},
            {to: '/track', label: 'Композиции'}
        ]
        return (
            <Tabs value={value} onChange={this.handleChange}>
                {linkTabs.map((l, index) =>
                    <Tab label={l.label} value={l.to} key={index} component={Link} to={l.to}/>
                )}
            </Tabs>
        )
    }
}

export default withRouter(Header)
