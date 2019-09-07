import {
  httpPost
} from '@communication/communication';

const loginHelper = {
  addUser: (userObj) => httpPost('user/addUser', userObj),
};

export default loginHelper;
