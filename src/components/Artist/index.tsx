import React from 'react'

import {ArtistsQuery} from '../../api-types'

import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export default class ArtistComponent extends React.Component<{
    data: ArtistsQuery
}> {
    render() {
        const {data} = this.props
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Идентификатор</TableCell>
                            <TableCell>Имя</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.artists.map(artist =>
                            <TableRow key={artist.id}>
                                <TableCell>{artist.id}</TableCell>
                                <TableCell>{artist.name}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}