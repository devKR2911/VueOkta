import {
  httpGet
} from '@communication/communication';

const userListHelper = {
  getAllUsers: () => httpGet('user/getAllUsers'),
};

export default userListHelper;
