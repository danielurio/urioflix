import { configure } from '@testing-library/react';

function config() { return {}; }

export const URL_API = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://juntos-api.herokuapp.com';

export default config;
