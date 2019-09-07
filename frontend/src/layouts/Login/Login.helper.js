import {
  httpPostOkta
} from '@communication/okta.communication';
import {
  httpGet
} from '@communication/communication';

const loginHelper = {
  login: () =>
    httpPostOkta('', {
      username: 'nitheeshkr115@gmail.com',
      password: 'NitheeshCommon@123',
    }),
  getAllUsers: () =>
    httpGet('employee/getAllEmployee'),
};

export default loginHelper;
