// Problem: We need a simple way to look a a user's badege count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

// Require
const https = require('https');
const username = "xboudsady"

// Function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message)
}

// Connect to the API URL (https://teamtreehouse.com/xboudsady.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = "";
    // Read the data
    response.on('data', data => {
        body += data.toString();
    });

    response.on('end', () => {
        // Parse the data
        console.log(body);
        console.log(typeof body);
        // Print the data
    });
});
