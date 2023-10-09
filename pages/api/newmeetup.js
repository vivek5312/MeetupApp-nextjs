import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        let data = req.body;

        const client = await MongoClient.connect('mongodb+srv://vivek5312707:5312707@cluster0.6nrsruz.mongodb.net/meetups?retryWrites=true&w=majority&appName=AtlasApp');
        const db = client.db();
        const meetupCollection = db.collection('meetups');

        // Await the insertion operation
        const result = await meetupCollection.insertOne(data);

        console.log(result);

        client.close();
        res.status(201).json({ message: 'Meetup inserted' });
    }
}

export default handler;
