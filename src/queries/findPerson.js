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

export const FIND_PERSON = gql`
    query findPersonByName($nameToSearch: String!) {
        findPerson(name: $nameToSearch) {
            ...PersonDetails
        }
    }
    ${PERSON_DETAILS}`