import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="min-h-screen bg-[#F5FCFF] flex">
        <div className="flex flex-wrap  md:flex-nowrap md:items-center my-10 mx-5 md:mx-12 gap-10">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="https://scontent.fbth1-1.fna.fbcdn.net/v/t39.30808-6/405170119_665175859128791_8197447080101270151_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGqrUCiAVjjOI2FHfW8pVi5a1fx89u2GNprV_Hz27YY2pF7pthLAvDHnMTCIvdznBxrCZSAqrK-R7X8jltMCoMi&_nc_ohc=mPBnk5urIkQAX_k97Um&_nc_zt=23&_nc_ht=scontent.fbth1-1.fna&oh=00_AfAFfkGAbVum4McEOx7lSBjjNtWAD5Q5ANgd5WvLje3GQg&oe=65AEA023"
              alt=""
              className="max-w-full lg:w-1/2 rounded-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="flex-col">
              {" "}
              <h1 className="font-bold text-3xl md:text-4xl capitalize">
                About <span className="text-[#5E3BEE]">Me!</span>
              </h1>
              <p className="mt-4">
                Greetings! Allow me to introduce myself. My name is Hijriyanto
                Wahyudi, but you can call me Yudi for short. I am a non-binary
                individual, and my pronouns are he/him. At the age of 17, I am
                from kepulauan riau indonesia As a passionate full stack web
                developer and software engineer, I am enthusiastic about
                crafting innovative digital solutions that cater to the evolving
                demands of various industries and businesses I am excited to
                contribute my skills, enthusiasm, and creativity to a dynamic
                team that values innovation and collaboration. I believe that my
                technical expertise, coupled with my dedication to excellence,
                will make me an asset to any organization. Thank you for taking
                the time to learn more about me. I am eager to connect with you
                and explore potential opportunities for collaboration. Let's
                embark on a journey of innovation together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
