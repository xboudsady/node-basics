// Problem: We need a simple way to look a a user's badege count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

 const profile = require('./profile');

const users= process.argv.slice(2);
users.forEach(profile.get);