import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const axiosInstance = axios.create()

const mock = new MockAdapter(axiosInstance)

mock.onGet('/assets').reply(200, [
  {
    name: 'BTC',
    lastTrade: '63,000.00',
    dayPercentage: '-2.21',
    dayChange: '-1.426.18',
    icon: '/btc.png',
  },
  {
    name: 'ETH',
    lastTrade: '3,408.90',
    dayPercentage: '-0.33%',
    dayChange: '-11.20',
    icon: '/eth.png',
  },
  {
    name: 'DOGE',
    lastTrade: '$0.15',
    dayPercentage: '+15.75',
    dayChange: '0.02',
    icon: '/doge.png',
  },
  {
    name: 'ALGO',
    lastTrade: '0.15',
    dayPercentage: '+0.00',
    dayChange: '0.00',
    icon: '/algo.png',
  },
  {
    name: 'DOT',
    lastTrade: '0.15',
    dayPercentage: '+0.00',
    dayChange: '0.00',
    icon: '/dot.png',
  },
  {
    name: 'UNI',
    lastTrade: '0.15',
    dayPercentage: '+0.00',
    dayChange: '0.00',
    icon: '/uni.png',
  },
  {
    name: 'COMP',
    lastTrade: '0.15',
    dayPercentage: '-0.95',
    dayChange: '0.44',
    icon: '/comp.png',
  },
])

export default axiosInstance
