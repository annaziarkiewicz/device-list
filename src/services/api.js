import axios from 'axios'

export default {
  async getDevices() {
    return await axios.get('/devices')
  }
}
