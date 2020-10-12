/* eslint-disable no-lone-blocks */
import 'dotenv/config';

const env = process.env.NODE_ENV || 'development';
console.log(`Environment : ${env}`);

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  isProd: env === 'production',
  port: process.env.PORT || 3000,
};

switch (env) {
  case 'dev':
  case 'development':
    {
      baseConfig.API_SERVER = `http://localhost:3000`;
    }
    break;

  case 'test':
  case 'testing':
    {
      baseConfig.API_SERVER = `http://localhost:3000`;
    }
    break;

  case 'prod':
  case 'live':
  case 'production':
    {
      baseConfig.API_SERVER = `https://seer-backend.herokuapp.com:5000`;
    }
    break;

  default: {
    baseConfig.API_SERVER = `http://localhost:3000`;
  }
}
export default baseConfig;
