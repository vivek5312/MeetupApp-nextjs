import MeetupList from '../components/meetups/MeetupList'

const Dummy_Meetup=[{
    id:1,
    title:'A first meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/f/f4/Phyang_Monastery_01.jpg',
    des:'This is first meetup'
},{
    id:2,
    title:'A first meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/f/f4/Phyang_Monastery_01.jpg',
    des:'This is first meetup'
}
]
export default function(){
    return (
        <div>
            
            <MeetupList meetups={Dummy_Meetup}/>
            
      
        </div>
    )
}