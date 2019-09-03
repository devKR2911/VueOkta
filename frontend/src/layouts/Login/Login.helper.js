import { httpPostOkta } from '@communication/okta.communication';

const loginHelper = {
  login: () =>
    httpPostOkta('', {
      username: 'nitheeshkr115@gmail.com',
      password: 'NitheeshCommon@123',
    }),
};

export default loginHelper;
