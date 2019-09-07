// const Employee = require('../models/employee');

const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
    orgUrl: 'https://dev-623833.oktapreview.com/',
    token: '00Exg7bVflQ4iQ6AS-mux2kDRrfiiMHAxV1NGzIjvA' // Obtained from Developer Dashboard
});

exports.getAllUsers = (req, resp, next) => {
    const orgUsersCollection = client.listUsers();
    const userList = [];

    orgUsersCollection.each(user => {
            userList.push(user);
        })
        .then((res) => resp.status(200).json({
            message: 'Employee List retrived successfully',
            users: userList,
            totalCount: userList.length,
        })).catch(err => {
            resp.status(500).json({
                message: 'Error',
                error: err,
            })
        })

}

exports.addUser = (req, resp, next) => {
    client.createUser(req.body)
        .then(user => {
            resp.status(200).json({
                message: 'User created successfully',
                user: user,
            })
        }).catch(err => {
            resp.status(500).json({
                message: 'Failed to create user',
                error: err,
            })
        })

}