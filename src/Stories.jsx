
import React, { useState, useEffect } from 'react'

function Stories() {

  const [stories, setStories] = useState([])

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
      {
        stories.length > 0 ? 
        (
          stories.map((story) => (
            <div className='story_container' key={story.id}>
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

