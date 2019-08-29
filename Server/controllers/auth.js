const https = require('https');

const userList = [{
        id: 0,
        name: 'Name 1'
    },
    {
        id: 1,
        name: 'Name 2'
    },
    {
        id: 2,
        name: 'Name 3'
    },
    {
        id: 3,
        name: 'Name 4'
    }
];

exports.login = (req, resp, next) => {
    // https.get('https://dev-623833.oktapreview.com/api/v1/users?limit=200', (response) => {
    //   // console.log('response -- ', response);
    //   return resp.status(200).json({
    //     massage: 'User list fetched successfully',
    //     result: response,
    //   })
    // }).on("error", (err) => {
    //   console.log("Error: " + err.message);
    // });
    resp.status(200).json({
        message: 'User list retrived successfully',
        posts: userList,
        totalCount: userList.length
    });
};