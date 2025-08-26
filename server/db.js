// JleiBsdk8CPuo2WG
// raidul


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://raidul:JleiBsdk8CPuo2WG@cluster0.iskl0wo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function dbConnect() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

module.exports = dbConnect