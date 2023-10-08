import MeetupList from '../components/meetups/MeetupList';

const Dummy_Meetup = [
  {
    id:'a1',
    title: 'A first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Phyang_Monastery_01.jpg',
    des: 'This is first meetup',
  },
  {
    id: 'a2',
    title: 'A first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Phyang_Monastery_01.jpg',
    des: 'This is first meetup',
  },
];

export default function MeetupPage(props) {
  return (
    <div>
      <MeetupList meetups={props.meetups} />
    </div>
  );
}
export async function getServerSideProps(context){
 
    const req=context.req;
    const res=context.res;

    return{
        props:{
            meetups: Dummy_Meetup,
        }
    }
}

/*export async function getStaticProps() {
  // Fetch API
  return {
    props: {
      meetups: Dummy_Meetup,
    },
  };
}
*/