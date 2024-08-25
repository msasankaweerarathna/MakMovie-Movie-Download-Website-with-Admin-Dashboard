import { MongoClient } from "mongodb";

//if env not exist then throw error 
if (!process.env.MONGODB_URI) {
    throw new Error("Invalide/Missing enviroment variable: 'MONGODB_URI'");
}

const uri = process.env.MONGODB_URI
const options = {}

let client
let ClientPromise 

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect()
    }
    ClientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(uri, options)
    ClientPromise = client.connect()
}

export default ClientPromise