import React from 'react'
import './footer.css'
import { IoShareSocial } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

function Footer() {
  return (
    <>
      <div className="container " style={{ display: 'flex', justifyContent: 'space-between' }} >

        <div>
          <IoShareSocial style={{ fontSize: '20px' }} />
          <p>Share</p>
        </div>
        <div>
          <CiFlag1 style={{ fontSize: '20px' }} />
          <p>Report</p>
        </div>
        <div>
          <CiBookmark style={{ fontSize: '20px' }} />
          <p>Save</p>
        </div>
      </div>

    </>
  )
}

export default Footer