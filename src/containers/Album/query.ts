import { gql } from '@apollo/client'

export const ALL_ALBUMS = gql`
    query albums {
        albums {
            id
            title
            artist {
                name
            }
        }
    }
`