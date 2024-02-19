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

export const ALL_PERSONS = gql`
    query {
        allPersons {
            ...PersonDetails
        }
    }
    ${PERSON_DETAILS}`