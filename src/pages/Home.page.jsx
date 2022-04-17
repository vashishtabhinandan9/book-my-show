import React from "react";
//components

import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

import Premier from "../components/Premiere/Premiere.component";

import PosterSlider from "../components/PosterSlider/PosterSlider.component";
//config
import TempPosters from "../config/PremiereImages.config";

const HomePage =()=>{
    return <>

    <div className="flex flex-col gap-10">

    <div className="container mx-auto px-4">
        <h1 className="text-xl font-bold text-gray-800 my-3">The Best Of Entertainment</h1>
        <EntertainmentCardSlider/>
       
    </div>

    <div className="bg-bmsnavbar-900 py-16">

    <div className="container mx-auto px-4 flex flex-col gap-3">
    <div  className="hidden items-center justify-between md:flex">
            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png"
                 alt="premiere and rupay"
                 className="w-full h-full" 
             />
    </div>
          <PosterSlider images={TempPosters} 
          title="Premieres" 
          subtitle="Brand new releases evey friday"
          isDark={true}
          />

    </div>
    
    </div>

    <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPosters}
          title="Online Streaming events"
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPosters}
          title="Outdoor events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider
          images={TempPosters}
          title="you can keep on adding such events further as many as you like"
          isDark={false}
        />
      </div>


    </div>
   
   
    </>
}


export default HomePage;