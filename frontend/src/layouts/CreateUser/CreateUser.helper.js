import {
  httpPost,
  httpGet,
} from '@communication/communication';

const loginHelper = {
  addUser: (userObj) => httpPost('user/addUser', userObj),
  getUserDetails: userObj => httpPost('user/getUserDetails', userObj),
  updateUser: userObj => httpPost('user/updateUserDetails', userObj),
};

export default loginHelper;
