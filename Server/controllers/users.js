const userList = [{
    id: 0,
    name: 'User 1'
  },
  {
    id: 1,
    name: 'User 2'
  },
  {
    id: 2,
    name: 'User 3'
  },
  {
    id: 3,
    name: 'User 4'
  },
];

exports.getAllUsers = (req, resp, next) => {
  resp.status(200).json({
    massage: 'User list fetched successfully',
    result: userList,
  })
}