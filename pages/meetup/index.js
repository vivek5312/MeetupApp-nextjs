import { json } from 'react-router-dom';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import Head from 'next/head';
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
             <Head>
        <title>Next Js  Add Meetup </title>
        <meta name='description' content='Add meetup place according to your choice'></meta>
      </Head>
            <NewMeetupForm  onAddMeetup={AddMeetupHandler}/>
            
        </div>
    )
}