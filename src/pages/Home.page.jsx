import React, {useState, useEffect} from "react";
import axios from 'axios';
// Components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCardComponent'
import HeroCarousel from '../components/HeroCarousel/HeroCarouselComponent'
import PosterSlider from '../components/PosterSlider/Posterslider.Component'
// Layout
import DefaultLayout from '../layout/Default.layout'


const HomePage = () => {
    const [recommendationMovies, setRecommendationMovies] = useState([])
    const [premierMovies, setPremierMovies] = useState([])
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([])

    useEffect(() =>{
        const requestTopRatedMovies = async () =>{
        const getTopRatedMovies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=3afc1d8f6f85fa0cb4c083529e5a18ae")
        setRecommendationMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    }, )

    return (
        <>
        <HeroCarousel />
        <div className="container mx-auto px-4 md:px-12 my-8">
            <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The best of Entertaiment</h1>
            <EntertainmentCardSlider />
        </div>

        <div className="container mx-auto px-4 md:px-12 my-8">
            <PosterSlider 
            title="Recommended Movies"
            subTitle="List of Recommended Movies"
            posters={recommendationMovies}
            isDark={false}
            />
        </div>

        <div className='bg-premier-800 py-12'>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
            <div className='hidden md:flex'>
            <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt="Rupay" className='w-full h-full' />

            </div>
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                <PosterSlider title="Premiers"
                subTitle="Brand new relases every Friday"
                posters={premierMovies}
                isDark={true} />
            </div>
        </div>
    </div> 
        <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
            <PosterSlider 
                title="Online Stream Events"
                subTitle=""
                posters={onlineStreamEvents}
                isDark={false}
            />
        </div>
        </>
    );
};

export default DefaultLayout(HomePage)