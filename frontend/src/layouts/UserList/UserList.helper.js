import { httpGet, httpPost } from '@communication/communication';

const userListHelper = {
  getAllUsers: () => httpGet('user/getAllUsers'),
  deleteUser: userObj => httpPost('user/deleteUser', userObj),
};

export default userListHelper;
