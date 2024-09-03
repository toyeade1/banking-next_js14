// we are creating a header box component that will be used to 
//display the header of the page

// it is useful to create a component if you will be using it multiple times
// in your application
import React from 'react'

const HeaderBox = ({type = "title", title, user, subtext}: HeaderBoxProps) => {
  return (
    <div className='header-box'>
      <h1 className='header-box-title'>
        {title}
        {/* this a common thing in react, this is a conditional that if met  */}
        {/* it will display the user name */}
        {type === "greeting" && (
            <span className='text-bankGradient'>
                {/* &nbsp; is a non-breaking space character */}
                &nbsp;{user}
            </span>
        )}
        </h1>
        <p className='header-box-subtext'>{subtext}</p>
    </div>
  )
}

export default HeaderBox
