import React from 'react'
import ReviewProps from './ReviewProps'

const Profile2 = () => {
  return (
    <div>
        <div>
            <ReviewProps 
            pics='/images/boss.jpg'
            paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudianda '
            name='TOSH MONEY'
            position='FULL-STACK DEVELOPER'
            />

            <ReviewProps 
            pics='/images/boss.jpg'
            paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudianda '
            name='PERSONAL PERSON'
            position='FULL-STACK DEVELOPER'
            />

            <ReviewProps 
            pics='/images/boss.jpg'
            paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatem repudianda '
            name='CHRIS-MI GALATO'
            position='BACK-END DEVELOPER'
            />
        </div>
    </div>
  )
}

export default Profile2
