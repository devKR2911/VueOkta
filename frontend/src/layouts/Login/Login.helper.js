import { httpPostOkta } from '@communication/okta.communication';
import { httpGet } from '@communication/communication';

const loginHelper = {
  login: () =>
    httpPostOkta('', {
      username: 'nitheeshkr115@gmail.com',
      password: 'NitheeshCommon@123',
    }),
  getAllUsers: () => httpGet('user/getAllUsers'),
};

export default loginHelper;
