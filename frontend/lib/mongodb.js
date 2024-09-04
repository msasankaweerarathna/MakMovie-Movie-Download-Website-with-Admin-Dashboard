import { MongoClient } from "mongodb";

//if env not exist then throw error 
if (!process.env.MONGODB_URI) {
    throw new Error("Invalide/Missing enviroment variable: 'MONGODB_URI'");
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let clientPromise 

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}
// Export a module scope mongoClient promise, by doign this in a separate module, 
// client can be shared acrose functions.
export default clientPromise