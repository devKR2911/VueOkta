const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
    orgUrl: 'https://dev-623833.oktapreview.com/',
    token: '00Exg7bVflQ4iQ6AS-mux2kDRrfiiMHAxV1NGzIjvA' // Obtained from Developer Dashboard
});

exports.client = client;