import gql from 'graphql-tag'

const searchRepository = gql`
  query searchRepository($query: String!, $type: SearchType!, $last: Int) {
    search(query: $query, type: $type, last: $last) {
      repositoryCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      nodes {
        ... on Repository {
          name
          forkCount
          stargazers {
            totalCount
          }
          description
          isPrivate
          pushedAt
          primaryLanguage {
            name
            color
          }
          owner {
            login
          }
        }
      }
    }
  }
`
export default searchRepository
