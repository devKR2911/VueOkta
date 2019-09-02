import {
  httpPost
} from '@communication/okta.communication';

const loginHelper = {
  login: () =>
    httpPost('', {
      'username': 'nitheeshkr115@gmail.com',
      'password': 'NitheeshCommon@123'
    }),
};

export default loginHelper;
