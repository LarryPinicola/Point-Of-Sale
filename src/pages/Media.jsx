import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import MediaUploader from "../components/MediaUploader";
import MediaUploaded from "../components/MediaUploaded";


const Media = () => {
  const [show,setShow] = useState(false);
  return (
   <>
    
  <div className='w-full'>
    <div className=""><Dashboard/></div>
    <div className="container mx-auto">
    <div className="mt-5 ms-48">
      <MediaUploader/>
      <MediaUploaded/>
    </div>
    </div>
</div>
   </>
  )
}

export default Media