import Image from 'next/image'

const HeroImage = ({image}: any) => {
  return (
    <section>
        <div className="h-[222px] w-full bg-black">
          <Image
            className="w-full h-[222px]"
            src={image || "/assets/image/categoriesImages/catBanner01.png"}
            alt="banner"
            height={135}
            width={135}
          />
        </div>
      </section>
  )
}

export default HeroImage