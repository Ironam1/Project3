// module.exports = {
//     mongoURI: process.env.MONGODB_URI || "mongodb://localhost/babytracker",
//     secretOrKey: "baby"
// };
dbPassword = 'mongodb+srv://localhost/babytracker:' +
 encodeURIComponent('YOUR_PASSWORD_HERE') 
 + 
 //????????????
 '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';

module.exports = {
    mongoURI: dbPassword
};