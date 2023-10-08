import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function (){
 
    function AddMeetupHandler(enterdetail){
        console.log(enterdetail)
    }

    return (
        <div>
            
            <NewMeetupForm  onAddMeetup={AddMeetupHandler}/>
            
        </div>
    )
}