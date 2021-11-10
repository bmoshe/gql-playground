import {gql} from "@apollo/client";

export const getPerson = gql`
  query getPerson($id: String!) {
    person(id: $id) {
      id
      name
      email
    }
  }
`;
