import React from 'react'

import {useArtistsQuery} from '../../api-types'

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import ArtistComponent from '../../components/Artist'

export default function Artists() {
    const {data, error, loading} = useArtistsQuery()
    if (loading)
        return <Box sx={{display: 'flex'}}><CircularProgress/></Box>
    if (error || !data)
        return <div>ERROR</div>
    return <ArtistComponent data={data}/>
}