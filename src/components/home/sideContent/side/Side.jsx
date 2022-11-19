import React from 'react'
import { gallery } from '../../../../dummyData';
import Heading from '../../../common/Heading/Heading';
import SocialMedia from '../social/SocialMedia';
import Tpost from '../tpost/Tpost';
import Slider from 'react-slick';
import './side.css';
const Side = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
    }
     const category = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"];
  return (
    <div>
        <Heading title="Stay Connected" />
        <SocialMedia />

        <Heading title="Subscribe" />
        <section className="subscribe">
            <h1 className="title">
                Subscribe to our New Stories
                <form>
                    <input type="text" placeholder="Email Address..." />
                    <button>
                        <i className="fa fa-paper-plane"></i> SUBMIT
                    </button>
                </form>
            </h1>
        </section>
        <section className="banner">
            <img src="../images/sidebar-banner-new.jpg"/>
        </section>
        <Tpost />
        <section className="catgeorys">
            <Heading title="Categories"/>
            
            {category.map((val) => {
                return (
                    <div className="category category1">
                    <span>{val}</span>
                    </div>
                )
            })}
        </section>
        <section className="gallery">
            <Heading title="Gallery"/>
            <Slider {...settings}>
            {gallery.map((val) => {
                return (
                    <div className="img">
                        <img src={val.cover} alt="" />
                    </div>
                )
            })}
            </Slider>
        </section>
    </div>
  )
}

export default Side;