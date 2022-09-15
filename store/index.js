import detectEthereumProvider from '@metamask/detect-provider'

export const state = () => ({
  account: null,
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
}

export const mutations = {
  setAccount(state, value) {
    state.account = value
  },
}

export const actions = {
  async fetchAccount({ commit }, provider) {
    const accounts = await provider.request({ method: 'eth_accounts' })

    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      throw new Error('Please connect to MetaMask.')
    } else {
      commit('setAccount', accounts[0])
      return accounts[0]
    }
  },
  async fetchChainId({ commit }, provider) {
    const chainId = await provider.request({ method: 'eth_chainId' })

    if (chainId) {
      //   commit('setChainId', chainId)
      return chainId
    }

    return false
  },

  async checkProvider({ dispatch }) {
    console.log('checkProvider')
    const provider = await detectEthereumProvider()
    if (!provider) {
      throw new Error('checkError: Please install MetaMask!')
    }
    if (provider !== window.ethereum) {
      throw new Error('checkError: Do you have multiple wallets installed?')
    }
    return await dispatch('checkConnection', provider)
  },
  async checkConnection({ dispatch }, provider) {
    console.log('checkConnection', provider)

    const address = await dispatch('fetchAccount', provider)
    console.log(address)

    if (!address) {
      throw new Error('checkError: No wallet found')
    }
    const chainId = await dispatch('fetchChainId', provider)

    console.log(chainId)

    if (chainId !== '0x89') throw new Error('WRONG_NETWORK')

    return { address, chainId }
  },
}
