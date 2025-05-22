import React, { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_DEVIL_FRUITS } from "../../services/graphql/queries";
import { DevilFruit } from "../../types";


const DFCarousel = () => {
    const { data, loading, error } = useQuery(GET_DEVIL_FRUITS, {
        variables: { page: 1 },
    });

    const fruitsWithImages = useMemo(() => {
        return data?.devilFruits?.results?.filter((fruit: DevilFruit) => fruit.avatarSrc) ?? [];
    }, [data]);

    if (loading) return <p>Loading fruits...</p>;
    if (error) return <p>Error loading fruits. </p>;

    return (
        <div className="carousel">
            {fruitsWithImages.map((fruit: DevilFruit) => (
                <div key={fruit.id} className="carousel-item">
                    <img src={fruit.avatarSrc} alt={fruit.englishName} />
                    <p>{fruit.englishName}</p>
                </div>
            ))}
        </div>
    );
};

export default DFCarousel;

/** 
function FruitCarousel(props: { fruits: DevilFruit[] }) {

    return <div className="h-screen relative flex items-center justify-center bg-stone-200">
     // { Container for the carousel with a fixed width }
        <h1 className="onePieceHeader">How well do you know your DEVIL FRUITS?</h1>

        <div className="w-1/2" id="fruitCarousel">
           // {Splide component with configuration options }
            <Splide options={splideOptions}>
                {props.fruits.map((fruit) => (
                    <SplideSlide key={fruit.id}>
                        <img src={fruit.filename} alt={fruit.roman_name} style={imageStyle} />
                        <p>{fruit.roman_name}</p>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
        <Button variant="danger">Let's Play (guessing game coming soon)</Button>
    </div>
}; 
*/