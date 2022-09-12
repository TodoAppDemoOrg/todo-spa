import { gql } from '@apollo/client';

export const GET_TODOS = gql`
    query TodoList {
        todos {
            id
            title
            commentCount
            comments {
                id
                author
                text
            }
        }
    }
`;