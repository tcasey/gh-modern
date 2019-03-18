import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import Touchable from '@vivintsolar-oss/native-vs-touchable'
import SearchLayout from '../../common/SearchBar'
import get from 'lodash.get'
import searchRepository from './repository.query'
import searchUser from './user.query'
import styles from './styles'
import { Color } from '../../../constants'

import UserList from '../../common/UserList'
import RepoList from '../../common/RepoList'
import Loading from '../../common/Loading'

function propsToVariables(props, state) {
  console.log('props', props, 'state', state)
  const last = 100
  const type = state.active.toUpperCase()
  const query = state.searchText

  return {
    type,
    last,
    query,
  }
}

export default class Search extends Component {
  static navigationOptions({ navigation }) {
    return {
      headerStyle: {
        display: 'none',
      },
    }
  }

  constructor(props) {
    super(props)
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.state = {
      active: 'Repository',
    }
  }
  static getDerivedStateFromProps(props, state) {
    const searchTerm = get(props, 'navigation.state.params.topic', null)

    if (searchTerm) {
      return { searchTerm }
    }

    return null
  }

  toggleActive(active) {
    this.setState({ active })
  }

  handleQueryChange(searchText) {
    this.setState({ searchText })
  }

  componentWillUnmount() {
    this.setState({ searchTerm: null })
  }

  render() {
    const { active, searchTerm } = this.state
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
      <SearchLayout
        headerBackgroundColor={Color.PRIMARY}
        headerTintColor={Color.WHITE}
        searchInputTintColor={Color.WHITE}
        searchInputUnderlineColorAndroid={Color.ACCENT_PRIMARY}
        searchInputSelectionColor={Color.ACCENT_PRIMARY}
        searchInputBackgroundColor={Color.PRIMARY_800}
        searchInputPlaceholderTextColor={Color.WHITE}
        searchInputIconColor={Color.WHITE}
        searchInputTextColor={Color.WHITE}
        placeholderTextColor={Color.WHITE}
        onChangeQuery={this.handleQueryChange}
        renderResults={q => (
          <ScrollView>
            <View style={styles.tabContainer}>
              {activeTab('Repository', active)}
              {activeTab('User', active)}
            </View>
            {q || searchTerm ? ( // skip isn't quite working as the loading props still gets passed down
              <Query
                displayName="Search"
                query={query}
                variables={propsToVariables(this.props, {
                  ...this.state,
                  query: searchTerm,
                })}
              >
                {({ loading, error, data }) => {
                  const search = get(data, 'search.nodes')
                  if (loading)
                    return (
                      <View style={styles.noDataWrapper}>
                        <Loading />
                      </View>
                    )

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
        )}
      />
    )
  }
}
