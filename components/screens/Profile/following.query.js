import gql from 'graphql-tag'

const following = gql`
  query following($login: String!, $number_of_following: Int) {
    user(login: $login) {
      following(last: $number_of_following) {
        totalCount
        nodes {
          login
          avatarUrl
        }
      }
    }
  }
`
export default following
