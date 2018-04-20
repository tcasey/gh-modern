import gql from 'graphql-tag'

const stars = gql`
  query stars($login: String!, $number_of_stars: Int, $orderBy: StarOrder) {
    user(login: $login) {
      starredRepositories(last: $number_of_stars, orderBy: $orderBy) {
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
export default stars
