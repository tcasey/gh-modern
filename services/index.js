import axios from 'axios'
import { AuthSession, SecureStore } from 'expo'
import get from 'lodash.get'
import { github } from '@app/config'

export async function ghCode () {
  const stateRandom = Math.random().toString()
  const authUrl =
    `https://github.com/login/oauth/authorize?response_type=token&client_id=${
      github.clientId
    }&state=${stateRandom}` +
    `&redirect_uri=${encodeURIComponent(github.redirectUri)}`
  const result = await AuthSession.startAsync({
    authUrl
  })
  const code = get(result, 'params.code')

  return code
}

export async function ghToken (code, redirectUri) {
  const query = await axios.post(github.authUrl, {
    client_id: github.clientId,
    client_secret: github.clientSecret,
    code,
    redirect_uri: redirectUri
  })
  const parsedToken = await query.data.split('&')
  const tokenParam = await parsedToken.filter(param => {
    return param.includes('access_token')
  })

  if (tokenParam.length) {
    const token = tokenParam[0].split('=')[1]

    return secureSet('access_token', token)
  }

  throw new Error('User canceled')
}

export async function ghAuthorize () {
  const code = await ghCode()

  return ghToken(code, github.redirectUri)
}

export async function logout () {
  const removeToken = await secureDelete('access_token')

  return removeToken
}

export function secureGet (field, defaultValue) {
  return SecureStore.getItemAsync(field)
    .then(value => {
      return value
    })
    .catch(() => {
      return defaultValue
    })
}

export function secureSet (field, value) {
  return SecureStore.setItemAsync(field, value)
}

export function secureDelete (field) {
  return SecureStore.deleteItemAsync(field)
}

export const SecureStorage = SecureStore
