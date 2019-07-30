let apiUrl
const expressPort = 3000
const apiUrls = {
  production: 'https://obscure-scrubland-48328.herokuapp.com/',
  development: `http://localhost:${expressPort}`
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
