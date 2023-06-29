
import { Grid } from '@mui/material'
import { useState } from 'react'

import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'

import nextImg from '../../img/next.png'
import prevImg from '../../img/prev.png'
import bulletin from '../../img/bulletin.png'

export type profileType = {
    title: string,
    subTitle: string,
    content: string,
    pages: number
}

export type coreValueType = {
    title: string,
    content: string,
}

export const profileList: Array<profileType> = [
    {
        title: "Who we are",
        subTitle: "Technology Company",
        content: "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        pages: 1
    },
    {
        title: "What we do",
        subTitle: "Professional Brand Management",
        content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        pages: 2
    },
    {
        title: "How we do",
        subTitle: "Strategize, Design, Collaborate",
        content: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.",
        pages: 3
    },
]

export const coreValuesList: Array<coreValueType> = [
    {
        title: "Dedication",
        content: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    },
    {
        title: "Intellectual Honesty",
        content: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.",
    },
    {
        title: "Curiosity",
        content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    },
]


export default function Home() {
    const [currentProfilePages, setCurrentProfilePages] = useState(0);

    const handleNextClick = (prevIndex: number) => {
        if (currentProfilePages === 2) {
            setCurrentProfilePages(0)
        } else {
            setCurrentProfilePages(prevIndex + 1);
        }
    }

    const handlePrevClick = (prevIndex: number) => {
        if (currentProfilePages === 0) {
            setCurrentProfilePages(2)
        } else {
            setCurrentProfilePages(prevIndex - 1);
        }
    }

    const currentProfile = profileList[currentProfilePages]


    return (
        <>
            <Grid className='home'>
                <Grid className='home__textArea'>
                    <div className='home__textArea__title'>
                        Discover <br />Your Wonder
                    </div>
                    <div className='home__textArea__content'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam.
                    </div>
                </Grid>
                <Grid className='home__profile'>
                    <Grid>
                        <Grid>
                            <div className='home__profile__title'>{currentProfile.title}</div>
                            <div className='home__profile__subTitle'>{currentProfile.subTitle}</div>
                            <div className='home__profile__content'>{currentProfile.content}</div>
                        </Grid>
                        <Grid className='home__profile__pagination'>
                            <div>{currentProfile.pages}/3</div>
                            <Grid className='home__profile__pagination__buttonArea'>
                                <div onClick={() => handlePrevClick(currentProfilePages)}><img src={prevImg} alt="prev-img" /></div>
                                <div onClick={() => handleNextClick(currentProfilePages)}><img src={nextImg} alt="next-img" /></div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className='home__valuesContainer'>
                    <Grid className='home__values'>
                        <div className='home__values__title'>Our Core Values</div>
                        <div className='home__values__content'>Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
                            <br /><br />
                            In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
                        </div>
                    </Grid>
                    <Grid className='home__point'>
                        {coreValuesList.map((values: coreValueType) => {
                            return (
                                <>
                                    <Grid className='home__point__bulletin'>
                                        <img src={bulletin} alt="bulletin" style={{ objectFit: 'contain', marginRight: '1rem' }} />
                                        <div className='home__point__title'>{values.title}</div>
                                    </Grid>
                                    <div className='home__values__content'>
                                        {values.content}
                                    </div>
                                </>
                            )
                        }
                        )}
                    </Grid>
                    <Grid className='home__illustration'></Grid>
                </Grid>
                <Grid className='home__speciality'>
                    <Grid className='home__speciality__frame'>
                        <div className='home__speciality__title'>Our Core Values</div>
                        <div className='home__speciality__content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Duis euismod libero vel leo auctor, in venenatis nulla consequat.
                            Sed commodo nunc sit amet congue aliquam.
                        </div>
                        <Carousel />
                    </Grid>
                </Grid>
                <Footer></Footer>

            </Grid>
        </>
    )
}