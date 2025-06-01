import { useState,useEffect } from 'react'

function Suggestions() {

  const [profile,setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState({})
  const [follow, setFollow] = useState("Follow")
  
      useEffect(()=>{
          fetch("http://localhost:4000/profile").
          then((data)=>data.json()). 
          then((data)=>setProfile(data)). 
          catch(err=> console.log(err))

          fetch("http://localhost:4000/suggestions").
          then((data)=>data.json()). 
          then((data)=>setSuggestions(data)). 
          catch(err=> console.log(err))
      },[])

      function follow_check(id) {
        setFollow("Unfollow")
        console.log(id)
      }

      

  return (
    
          <div>
            <div className='suggestions w-75 m-5'>
                {
                profile ?
                    <div className='d-flex'>
                      <img className='dp rounded-circle' src={profile.avatar} alt='profile pic'/>
                      <h5>{profile.username}</h5>
                      <small className='ms-auto text-primary text-decoration-underline'>Switch</small>
                    </div>
                
                  :
                  <p>Loading...</p>
                }

                <div className='d-flex mt-5'>
                  <p>Suggested for you</p>
                  <b className='ms-auto'>See all</b>
                </div>

              <div>
                    {suggestions.length > 0 ? (
                      <div>{suggestions.map((post) => (
                          <div className='my-2 post-container' key={post.id}>
                              <div className='d-flex'>
                                  <img className='dp rounded-circle' src={post.profile_pic} alt='profile pic'/>
                                  <h5>{post.username}</h5>
                                  <p className='text-primary ms-auto' onClick={()=>follow_check(post.id)}>{follow}</p>
                              </div>
                          </div>
                        )) }
                    </div>
                ) 
                :
                (
                    <div>
                        Loading....
                    </div>
                )
                }
              </div>
            </div>
          </div>
  )
}

export default Suggestions
















