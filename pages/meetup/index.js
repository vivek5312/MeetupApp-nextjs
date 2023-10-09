import { json } from 'react-router-dom';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
export default function (){
    const router=useRouter();
 
   async function AddMeetupHandler(enterdetail){
      const response=await fetch('/api/newmeetup',{
        method:'POST',
        body:JSON.stringify(enterdetail),
        headers:{
            'Content-Type':'application/json'
        }
      });
          const data=await response.json();
          console.log(data);

          router.push('/');
    }

    return (
        <div>
            
            <NewMeetupForm  onAddMeetup={AddMeetupHandler}/>
            
        </div>
    )
}