import { httpGet } from '@communication/communication';

const groupListHelper = {
  getAllGroups: () => httpGet('groups/getAllGroups'),
};

export default groupListHelper;
