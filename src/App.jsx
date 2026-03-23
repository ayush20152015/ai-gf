import './App.css'
import { useRef } from 'react';




function App() {

   const audio = useRef(null);

  const goToProfile = () => {
    window.location.href="profile.html";
  };

  const playaudio = () =>{
    window.location.href="aa gayi meri yaad ya.m4a";
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/bglandingpfp copy.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>

      {/* Card */}
      <div className="relative backdrop-blur-lg bg-white/20 border border-white/30 
      flex flex-col gap-4 p-10 sm:flex-row sm:items-center sm:gap-6 rounded-2xl 
      shadow-2xl hover:scale-105 transition-all duration-300">

        {/* Profile Image */}
        <img
          className="mx-auto block h-28 w-28 rounded-full sm:mx-0 
          ring-4 ring-purple-400 object-cover"
          src="pfp copy.jpeg"
          alt="profile"
        />


       


        {/* Text Content */}
        <div className="space-y-3 text-center sm:text-left">

          <div>
            <p className="text-2xl font-bold text-white">
              Meri Bandi
            </p>

            <p className="text-green-300 font-medium">
              ● Available
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-center sm:justify-start">

            <button className="px-5 py-2 rounded-lg bg-purple-600 
            text-white font-semibold hover:bg-purple-700 transition" button onClick={playaudio}>

              Message

            </button>


            <button className="px-5 py-2 rounded-lg border border-white 
            text-white hover:bg-white hover:text-black transition" button onClick={goToProfile}>

              Profile

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default App