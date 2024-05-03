import Image from 'next/image'
import React from 'react'

const AdvertisementImage = () => {
  return (
    <section className="mt-4">
        <div className="h-[222px] w-full bg-black">
          <Image
            className="w-full h-[222px]"
            src="/assets/image/categoriesImages/catBanner02.png"
            alt="banner"
            height={135}
            width={135}
          />
        </div>
      </section>
  )
}

export default AdvertisementImage