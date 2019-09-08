import {
  httpGet,
  httpPost
} from '@communication/communication';

const groupListHelper = {
  getAllGroups: () => httpGet('groups/getAllGroups'),
  deleteGroup: (groupObj) => httpPost('groups/deleteGroup'),
};

export default groupListHelper;
