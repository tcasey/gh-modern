import gql from 'graphql-tag'

const user = gql`
  query user($login: String!) {
    user(login: $login) {
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
`
export default user
