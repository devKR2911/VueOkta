import {
  // httpGet,
  httpPost
} from '@communication/communication';

const groupUserListHelper = {
  getAllGroupUsers: (groupObj) => httpPost('groups/getAllGroupUsers', groupObj),
};

export default groupUserListHelper;
