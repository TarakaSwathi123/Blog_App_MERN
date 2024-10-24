import { MongoClient } from "mongodb";

let db;

async function connectToDb(cb) {
	const client = new MongoClient(
		`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ov6rd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
	);
	await client.connect();
	db = client.db("react-db");
	console.log(db);
	cb();
}

export { db, connectToDb };
