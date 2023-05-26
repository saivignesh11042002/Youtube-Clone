import React from 'react';
import { Link } from 'react-router-dom';

import './Videocard'
import Videocard from './Videocard';

const HomePage = ({ videos }) => {

    console.log(videos.length)
    
  return (
    <div>
      <div>
      {videos.map((video) => (
        <div class="row">
            {video.map((v)=>(
            <div class="col-md-3">
            <div>
              

              <Videocard v={v}/>
              </div>
              </div>

                



            ))}
            </div>
        
      ))}
    </div>
    </div>
   
  );
};

export default HomePage;

