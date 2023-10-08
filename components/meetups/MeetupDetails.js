
import React from 'react'
import classes from './MeetupDetails.module.css'
const MeetupDetails = (props) => {
  return (
    <>
    <section className={classes.detail}>
        <img src={props.image} alt={props.title} />
        <p>{props.title}</p>
        <p>{props.desc}</p>
    </section>
    </>
  )
}

export default MeetupDetails
