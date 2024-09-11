export default {
    subApps: [
      {
        name: 'subapp1',
        entry: 'http://localhost:7001', 
        container: '#sub-container',
        activeRule: '/subapp1',
        props: {} 
      },
      {
        name: 'app-vue2',
        entry: 'http://localhost:7002',
        container: '#sub-container',
        activeRule: '/subapp2',
        props: {}
      }
    ]
  }
