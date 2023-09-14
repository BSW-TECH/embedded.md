import React from "react"
import Image from "next/image"
import pic from '/public/assets/img/work_in_progress.jpg'

const Companies = () => {
  return (
    <>
      <div className="flex justify-center mt-52">
        <Image
          src={pic}
          alt="Work in progress"
        >

        </Image>
      </div>
    </>
  )
}

export default Companies