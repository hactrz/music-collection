import { gql } from '@apollo/client'

export const ALL_TRACKS = gql`
    query tracks {
        tracks {
            id
            track_num
            title
        }
    }
`