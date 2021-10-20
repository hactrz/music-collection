import React from 'react'

import {useTracksQuery} from '../../api-types'

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import TrackComponent from '../../components/Track'

export default function Tracks() {
    const {data, error, loading} = useTracksQuery()
    if (loading)
        return <Box sx={{display: 'flex'}}><CircularProgress/></Box>
    if (error || !data)
        return <div>ERROR</div>
    return <TrackComponent data={data}/>
}