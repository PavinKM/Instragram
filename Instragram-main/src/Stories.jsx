
import React, { useState, useEffect, use } from 'react'
import { useNavigate } from 'react-router';

function Stories() {

  const [stories, setStories] = useState([])

  const navigate = useNavigate()

  let tot = 0

  useEffect(() => {
          async function fetchData() {
            try {
                const profileRes = await fetch("http://localhost:4000/story");
                const profileData = await profileRes.json();
                setStories(profileData);
              }
  
            catch (err) {
                console.log(err);
              }
          }
          fetchData();
        }, []);

  return (
    <div className='story d-flex'>
      <div className='d-none'>{tot=stories.length}</div>
      {
        stories.length > 0 ? 
        (
          stories.map((story) => (
            <div className='story_container' key={story.id} onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
                <div className="gradient-border">
                  <img src={story.image} alt='dp' className='story-dp rounded-circle'/>
                </div>
                <p className="text-truncate" style={{width:"50px"}}>{story.username}</p>
            </div>
          ))
        )
        :
        (<p>Loading...</p>)
      }
    </div>
  )
}

export default Stories

