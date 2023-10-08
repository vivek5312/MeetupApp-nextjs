import MeetupDetails from "../../components/meetups/MeetupDetails";
export default function (){

return(
    <>
    <MeetupDetails image='https://upload.wikimedia.org/wikipedia/commons/f/f4/Phyang_Monastery_01.jpg'
    title='A first meetup'
    desc='This is first meetup'
    />
    </>
)

}

export async function getStaticPaths(){
    return{
        fallback:false,
        paths:[
        {
            params:{
                meetId:'a1',
            },

        },
        {
            params:{
                meetId:'a2',
            },
            
        },
        {
            params:{
                meetId:'a3',
            },
            
        }
        ]
    }
}

export async function getStaticProps(context){
    const meetupId=context.params.meetId
    return{
        props:{
            meetupData:{
            image:'https://upload.wikimedia.org/wikipedia/commons/f/f4/Phyang_Monastery_01.jpg',
            id:meetupId,
            title:'A first meetup',
            desc:'This is first meetup'
            }
        }
    }
}