import gql from 'graphql-tag'

const viewer = gql`
  query viewer {
    viewer {
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
export default viewer
