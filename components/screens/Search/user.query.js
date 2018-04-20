import gql from 'graphql-tag'

const searchUser = gql`
  query searchUser($query: String!, $type: SearchType!, $last: Int) {
    search(query: $query, type: $type, last: $last) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        ... on User {
          login
          email
          avatarUrl
          name
          bio
          websiteUrl
          location
          company
          followers {
            totalCount
          }
          following {
            totalCount
          }
          repositories {
            totalCount
          }
          starredRepositories {
            totalCount
          }
        }
      }
    }
  }
`
export default searchUser
