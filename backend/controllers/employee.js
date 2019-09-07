// const Employee = require('../models/employee');

const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
    orgUrl: 'https://dev-623833.oktapreview.com/',
    token: '00Exg7bVflQ4iQ6AS-mux2kDRrfiiMHAxV1NGzIjvA' // Obtained from Developer Dashboard
});

exports.getAllEmployee = (req, resp, next) => {
    const orgUsersCollection = client.listUsers();
    const userList = [];

    orgUsersCollection.each(user => {
            userList.push(user);
        })
        .then((res) => resp.status(200).json({
            message: 'Employee List retrived successfully',
            employees: userList,
            totalCount: userList.length,
        }));

}