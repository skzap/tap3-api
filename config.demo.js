let config = {
  db: {
    host: '',
    database: '',
    port: 25060,
    user: '',
    password: '',
    cert: `-----BEGIN CERTIFICATE-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
-----END CERTIFICATE-----`
  },
  http: {
    port: 2347,
    host: '0.0.0.0'
  },
  intervals: {
    prices: 30000,
    tracker: 3000
  }
}

export default config