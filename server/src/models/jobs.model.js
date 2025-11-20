const { client } = require("../config/db");

const jobsCollection = client.db('job_portal').collection('jobs');


module.exports = jobsCollection;