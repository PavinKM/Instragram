import React, { useEffect, useState } from 'react'
import { useParams, Link ,useNavigate } from 'react-router-dom'
 
 function ViewStory() {

    const {id, tot} = useParams()

    const [story, setStory] = useState(null)

    const navigate = useNavigate()

    useEffect(()=>{
      fetch(`http://localhost:4000/story/${id}`)
      .then(data => data.json())
      .then(data => setStory(data))
      .catch(err => console.log(err))
    },[id]);

    if(id> tot || id<1){
      navigate('/')
    }

   return (

    <div>
      {story ? 
        <div className='d-flex justify-content-center align-items-center'>
          <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
          <img className='vh-100 p-4' src={story.avatar} alt='story' />
          <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
        </div> 
        : 
        <div>Loading...</div>
      }
    </div>
   )
 }
 
 export default ViewStory