import { gql } from '@apollo/client'

const PERSON_DETAILS = gql`
    fragment PersonDetails on Person {
        name
        phone
        id
        address {
            street
            city
        }
    }`

export const PERSON_ADDED = gql`
    subscription {
      personAdded {
        ...PersonDetails
      }
    }
    ${PERSON_DETAILS}`