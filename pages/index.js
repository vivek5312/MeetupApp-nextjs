import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

const Dummy_Meetup = [
  {
    id: 'a1',
    title: 'A first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Phyang_Monastery_01.jpg',
    des: 'This is the first meetup',
  },
  {
    id: 'a2',
    title: 'A second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Phyang_Monastery_01.jpg',
    des: 'This is the second meetup',
  },
];

export default function MeetupPage(props) {
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from MongoDB
  const client = await MongoClient.connect('mongodb+srv://vivek5312707:5312707@cluster0.6nrsruz.mongodb.net/meetups?retryWrites=true&w=majority&appName=AtlasApp');
  const db = client.db();
  const meetupCollection = db.collection('meetups');
  const meetups = await meetupCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate:1
  };
}
