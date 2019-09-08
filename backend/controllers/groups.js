const okta = require('../config/okta.config');

const client = okta.client;

exports.getAllGroups = (req, resp, next) => {
    const orgUsersCollection = client.listGroups();
    const groupList = [];

    orgUsersCollection.each(group => {
            groupList.push(group);
        })
        .then((res) => resp.status(200).json({
            message: 'Group List retrived successfully',
            groups: groupList,
            totalCount: groupList.length,
        })).catch(err => {
            resp.status(500).json({
                message: 'Error',
                error: err,
            })
        })

}

exports.createGroup = (req, resp, next) => {
    const newGroup = req.body;

    client.createGroup(newGroup)
        .then(group => {
            resp.status(200).json({
                message: 'Group created successfully',
                group: group,
            })
        }).catch(err => {
            resp.status(500).json({
                message: 'Error',
                error: err,
            })
        });

}

exports.getAllGroupUsers = (req, resp, next) => {
    const groupObj = req.body;
    const userList = [];
    client.getGroup(groupObj.id).then((group) => {
        group.listUsers().each(user => {
            userList.push(user);
        }).then((res) => resp.status(200).json({
            message: 'Group user list retrived successfully',
            users: userList,
            totalCount: userList.length,
            group: group,
        })).catch(err => {
            resp.status(500).json({
                message: 'Error',
                error: err,
            })
        });
    }).catch(err => {
        resp.status(500).json({
            message: 'Error',
            error: err,
        })
    });
}