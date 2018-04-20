import gql from 'graphql-tag'

const repository = gql`
  query repository($owner: String!, $name: String!, $first: Int) {
    repository(owner: $owner, name: $name) {
      name
      createdAt
      pushedAt
      description
      homepageUrl
      isFork
      isArchived
      isPrivate
      viewerHasStarred
      viewerPermission
      viewerCanSubscribe
      viewerSubscription
      viewerCanAdminister
      viewerCanUpdateTopics
      viewerCanCreateProjects
      object(expression: "master:README.md") {
        ... on Blob {
          text
        }
      }
      parent {
        name
      }
      licenseInfo {
        name
      }
      owner {
        login
      }
      issues(first: $first) {
        nodes {
          number
          title
          createdAt
          closedAt
          closed
          author {
            login
          }
          assignees(first: $first) {
            nodes {
              name
            }
          }
          comments(first: $first) {
            totalCount
          }
        }
      }
      pullRequests(first: $first) {
        nodes {
          labels(first: $first) {
            nodes {
              name
            }
          }
          title
          url
          lastEditedAt
          participants(first: $first) {
            nodes {
              name
              login
              avatarUrl
            }
          }
          createdAt
          author {
            avatarUrl
            login
          }
        }
      }
      repositoryTopics(first: $first) {
        totalCount
        nodes {
          topic {
            name
          }
        }
      }
      forks(first: $first) {
        totalCount
      }
      stargazers(first: $first) {
        totalCount
      }
      # collaborators(first: $first) {
      #   nodes {
      #     name
      #     avatarUrl
      #     login
      #   }
      # }
      watchers(first: $first) {
        totalCount
        nodes {
          name
          login
          avatarUrl
        }
      }
      primaryLanguage {
        color
        name
      }
      languages(first: $first) {
        totalSize
        totalCount
        nodes {
          name
          color
        }
      }
    }
  }
`
export default repository
