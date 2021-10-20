import { gql } from '@apollo/client'

export const ALL_ARTISTS = gql`
    query artists {
        artists {
            id
            name
        }
    }
`