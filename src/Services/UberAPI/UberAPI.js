import axios from 'axios'
const {REACT_APP_UBER_TOKEN} = process.env

class UberAPI {
  constructor () {
    this.uberAPI = `https://api.uber.com/v1`
  }

  async payments () {
    const url = `${this.uberAPI}/partners/payments`
    return axios.get(url, {
      headers: {
        'Authorization': `Bearer ${REACT_APP_UBER_TOKEN}`
      }
    })
  }
}
export default UberAPI
