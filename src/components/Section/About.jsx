import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="min-h-screen bg-[#F5FCFF] flex">
        <div className="flex flex-wrap  md:flex-nowrap md:items-center my-10 mx-5 md:mx-12 gap-10">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img
              src="./images/profile.jpg"
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
              <p className="mt-4 capitalize">
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
