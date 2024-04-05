import { MongoClient } from "mongodb";

const client = new MongoClient("process.env.MONGODB_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDb() {
  await client.connect();
  const db = client.db("NgErp");
  return db;
}

export default async function Home() {
  const db = await connectToDb();
  const collection = db.collection("customer");
  const documents = await collection.find({}).toArray();

  return <main>hello world</main>;
}
