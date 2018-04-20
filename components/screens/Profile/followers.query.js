import gql from 'graphql-tag'

const followers = gql`
  query followers($login: String!, $number_of_followers: Int) {
    user(login: $login) {
      login
      followers(last: $number_of_followers) {
        totalCount
        nodes {
          login
          avatarUrl
        }
      }
    }
  }
`
export default followers
