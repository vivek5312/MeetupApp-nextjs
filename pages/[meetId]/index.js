import { MongoClient,ObjectId } from 'mongodb';
import MeetupDetails from "../../components/meetups/MeetupDetails";
export default function (props){

return(
    <>
    <MeetupDetails image={props.meetupData.image}
    title={props.meetupData.title}
    address={props.meetupData.address}
    desc={props.meetupData.description}
    />
    </>
)

}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://vivek5312707:5312707@cluster0.6nrsruz.mongodb.net/meetups?retryWrites=true&w=majority&appName=AtlasApp');
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetups = await meetupCollection.find({},{_id:1}).toArray();
    client.close()
    return{
        fallback:false,
        paths:meetups.map((meetup)=>({
            params:{meetId:meetup._id.toString()}
        }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetId;
    const client = await MongoClient.connect('mongodb+srv://vivek5312707:5312707@cluster0.6nrsruz.mongodb.net/meetups?retryWrites=true&w=majority&appName=AtlasApp');
    const db = client.db();
    const meetupCollection = db.collection('meetups');

    const selectMeetupOne = await meetupCollection.findOne({ _id:new ObjectId(meetupId) });
    client.close();

    return {
        props: {
            meetupData: {
                id: selectMeetupOne._id.toString(),
                title: selectMeetupOne.title,
                image: selectMeetupOne.image,
                address: selectMeetupOne.address,
                description: selectMeetupOne.description, // Use "description" here
            },
        },
    };
}
