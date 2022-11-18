import React from 'react'
import './life.css';
import { lifestyle } from '../../../../dummyData';
import Slider from 'react-slick';
import Heading from '../../../common/Heading/Heading';
const Life = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }
  return (
    <div>
        <section className="popularPost life">
                <Heading title="Life Style"/>
                <div className="content">
                <Slider {...settings} >
                {lifestyle.map((val) => {
                    return (
                    <div className="items">
                        <div className="box shadow">
                            <div className="images">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <div className="category category1">
                                    <span>{val.catgeory}</span>
                                </div>
                            </div>
                            <div className="text">
                                <h1 className="title">
                                    {val.title.slice(0,40)}...
                                </h1>
                                <div className="date">
                                    <i className="fas fa-calendar-days"></i>
                                    <label>{val.date}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    )
                })}
            </Slider>
            </div>
        </section>
    </div> 
  )
}

export default Life;