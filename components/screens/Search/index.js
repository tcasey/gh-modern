import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import Touchable from '@vivintsolar-oss/native-vs-touchable'
import get from 'lodash.get'
import searchRepository from './repository.query'
import searchUser from './user.query'
import styles from './styles'

import SearchBar from '../../common/SearchBar'
import UserList from '../../common/UserList'
import RepoList from '../../common/RepoList'
import Loading from '../../common/Loading'

function propsToVariables (props, state) {
  const last = 100
  const type = state.active.toUpperCase()
  const query = state.query

  return {
    query,
    type,
    last
  }
}

export default class Search extends Component {
  static navigationOptions ({ navigation }) {
    const params = get(navigation, 'state.params', {})

    return {
      headerTitle: (
        <SearchBar navigation={navigation} onChange={params.searchTerm} />
      )
    }
  }

  constructor (props) {
    super(props)
    this.searchTerm = this.searchTerm.bind(this)
    this.state = {
      active: 'Repository',
      query: null
    }
  }
  componentDidMount () {
    this.props.navigation.setParams({ searchTerm: this.searchTerm })
  }
  searchTerm (searchTerm) {
    this.setState({ query: searchTerm })
  }
  toggleActive (active) {
    this.setState({ active })
  }
  render () {
    const { active } = this.state
    const query = active === 'Repository' ? searchRepository : searchUser
    const ListComponent = active === 'Repository' ? RepoList : UserList
    const activeTab = (type, active) => {
      const tabStyles = type === active ? styles.selected : styles.unSelected
      const textStyle = type === active ? styles.activeText : null

      return (
        <Touchable
          onPress={() => {
            this.toggleActive(type)
          }}
        >
          <View style={[styles.tab, tabStyles]}>
            <Text style={[styles.tabText, textStyle]}>{type}</Text>
          </View>
        </Touchable>
      )
    }

    return (
      <ScrollView>
        <View style={styles.tabContainer}>
          {activeTab('Repository', active)}
          {activeTab('User', active)}
        </View>
        {this.state.query ? ( // skip isn't quite working as the loading props still gets passed down
          <Query
            displayName='Search'
            query={query}
            variables={propsToVariables(this.props, this.state)}
          >
            {({ loading, error, data }) => {
              const search = get(data, 'search.nodes')
              if (loading) return <Loading />
              if (error) return <Text>Error :(</Text>

              return (
                <ScrollView>
                  <ListComponent
                    data={search}
                    navigation={this.props.navigation}
                  />
                </ScrollView>
              )
            }}
          </Query>
        ) : (
          <View style={styles.noDataWrapper}>
            <Text style={styles.noData}>No Data</Text>
          </View>
        )}
      </ScrollView>
    )
  }
}
