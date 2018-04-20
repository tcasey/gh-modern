import gql from 'graphql-tag'

const repositories = gql`
  query repositories(
    $login: String!
    $number_of_repos: Int
    $orderBy: RepositoryOrder
  ) {
    user(login: $login) {
      repositories(last: $number_of_repos, orderBy: $orderBy) {
        totalCount
        nodes {
          name
          forkCount
          stargazers {
            totalCount
          }
          owner {
            login
          }
          description
          isPrivate
          pushedAt
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`
export default repositories
