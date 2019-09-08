import { httpPost } from '@communication/communication';

const createGroupHelper = {
  createGroup: groupDetails => httpPost('groups/createGroup', groupDetails),
};

export default createGroupHelper;
