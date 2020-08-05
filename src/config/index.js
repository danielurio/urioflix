export const URL_API = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://juntos-api.herokuapp.com';

export default { URL_API };
