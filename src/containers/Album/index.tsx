import React from 'react'

import {useAlbumsQuery} from '../../api-types'

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import AlbumComponent from '../../components/Album'

export default function Albums() {
    const {data, error, loading} = useAlbumsQuery()
    if (loading)
        return <Box sx={{display: 'flex'}}><CircularProgress/></Box>
    if (error || !data)
        return <div>ERROR</div>
    return <AlbumComponent data={data}/>
}