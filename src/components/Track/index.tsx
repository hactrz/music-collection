import React from 'react'

import {TracksQuery} from '../../api-types'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export default class ArtistComponent extends React.Component<{
    data: TracksQuery
}> {
    render() {
        const {data} = this.props
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Номер</TableCell>
                            <TableCell>Название</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.tracks.map(track =>
                            <TableRow key={track.id}>
                                <TableCell component="th" scope="row">{track.track_num}</TableCell>
                                <TableCell>{track.title}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}