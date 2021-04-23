import Vue from 'vue';
import Vuex from 'vuex';
import api from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    devices: [],
    selectedDevice: {}
  },

  getters: {
    items (state) {
      return state.devices
    },
    selectedDevice (state) {
      return state.selectedDevice
    }
  },

  mutations: {
    loadDevices (state, list) {
      state.devices = list
    },
    selectDevice (state, details) {
      state.selectedDevice = details
    }
  },

  actions: {
    async getDevices(context) {
      const devices = await api.getDevices()
      context.commit('loadDevices', devices.data.devices)
    },

    deviceDetails(context, payload) {
      context.commit('selectDevice', payload)
    }
  }
})
