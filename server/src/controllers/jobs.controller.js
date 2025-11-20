
const { ObjectId } = require("mongodb");
const jobsCollection = require("../models/jobs.model");

async function getAllJobs(req, res) {
    try {
        const jobs = await jobsCollection.find();
        const result = await jobs.toArray();
        res.send(result);
    } catch (err) {
        res.status(500).send({ message: "Failed to fetch jobs" });
    }

}


async function getJobDetails(req, res) {
    try {
        const id = req.params.id
        const query = { _id: new ObjectId(id) }
        const result = await jobsCollection.findOne(query)
        res.send(result)
    } catch (err) {
        res.status(500).send({ message: "Failed to fetch job details" });
     }
}


module.exports = {
    getAllJobs,
    getJobDetails
}