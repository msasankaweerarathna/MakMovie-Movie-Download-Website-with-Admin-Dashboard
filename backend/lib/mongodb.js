import { MongoClient } from "mongodb";

//if env not exist then throw error 
if (!process.env.MONGODB_URI) {
    throw new Error("Invalide/Missing enviroment variable: 'MONGODB_URI'");
}

const uri = process.env.MONGODB_URI
const option = {}

let Client
let ClientPromise 

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        Client = new MongoClient(uri, option)
        global._mongoClientPromise = Client.connect()
    }
    ClientPromise = global._mongoClientPromise
} else {
    Client = new MongoClient(uri, option)
    ClientPromise = Client.connect()
}