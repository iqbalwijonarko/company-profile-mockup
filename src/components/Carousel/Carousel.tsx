import React, { useState } from 'react';
import { Grid } from '@mui/material';
import clsx from 'clsx'

import acc from '../../img/acc.png'
import spd from '../../img/spd.png'
import exh from '../../img/exh.png'
import { ReactComponent as LeftIcon } from '../../img/left.svg'
import { ReactComponent as RightIcon } from '../../img/right.svg'

export type carouselType = {
    label: string,
    img: string,
    caption: string,
}

export const carouselList: Array<carouselType> = [
    {
        label: "Accesories",
        img: acc,
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam."
    },
    {
        label: "Speed Improvement",
        img: spd,
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam."
    },
    {
        label: "Exhaust",
        img: exh,
        caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam."
    },
]

const Carousel: React.FC = () => {


    const [activeIndex, setActiveIndex] = useState(0);

    const goToNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === carouselList.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselList.length - 1 : prevIndex - 1));
    };

    return (
        <Grid className="carousel">
            <div className="carousel__image">
                <img src={carouselList[activeIndex].img} alt={`Image ${activeIndex + 1}`} />
                <div style={{ marginTop: ".5rem" }}>{carouselList[activeIndex].label}</div>
                <div className="carousel__caption">{carouselList[activeIndex].caption}</div>
            </div>
            <div className="carousel__controls">
                <LeftIcon onClick={goToPrevSlide} />
                <RightIcon onClick={goToNextSlide} fill='blue' />
            </div>
            <div className="carousel__indicators">
                {carouselList.map((_, index) => (
                    <span
                        key={index}
                        className={`carousel__indicator ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </Grid>
    );
};

export default Carousel;
