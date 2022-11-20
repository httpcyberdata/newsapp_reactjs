import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { hero } from '../../dummyData';
import SinglePageSlider from './SinglePageSlider/SinglePageSlider';
import './singlepage.css'
import Side from '../home/sideContent/side/Side';

const Singlepages = () => {
    const { id } = useParams()
    const [item, setItem] = useState(null)
  
    useEffect(() => {
      const item = hero.find((item) => item.id === parseInt(id))
      if (item) {
        setItem(item)
      }
    }, [id])
  
  return (
  <> 
    {item ? (
        <main>
            <SinglePageSlider />
            <div className="container">
                <section className="mainContent details">
                    <h1 className="title">
                        {item.title}
                    </h1>
                    <div className="author">
                        <span>by</span>
                        <img src={item.authorImg} alt="" />
                        <p>{item.authorName}</p>
                        <label>{item.time}</label>
                    </div>
                   <div className="social">
                        <div className="socBox">
                            <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className="socBox">
                            <i className="fab fa-pinterest"></i>
                        </div>
                        <div className="socBox">
                            <i className="fab fa-twitter"></i>                            
                        </div>
                        <div className="socBox">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="socBox">
                            <i className="fab fa-youtube"></i>
                        </div>
                        </div>
                        <div className="desctop">
                            {item.desc.map((val) => {
                                return (
                                    <>
                                    <p>
                                        {val.para1}
                                    </p>
                                    <p>
                                        {val.para2}
                                    </p>
                                    </>
                                )
                            })}
                        </div>
                        <img src={item.cover} alt="" />
                        {item.desc.map((val) => (
                            <p>{val.para3}</p>
                        ))}

                        <div className="descbot">
                        {item.details.map((data) => {
                                return (
                                    <>
                                    <h1>
                                        {data.title}
                                    </h1>
                                    <p>
                                        {data.para1}
                                    </p>
                                    </>
                                )
                            })} 
                        </div>
                        <div className="quote">
                            <i className="fa fa-quote-left"></i>
                            {item.details.map((data) => {
                                return (
                                    <>
                                        <p>{data.quote}</p>
                                    </>
                                )
                            })}
                        </div>
                        <div className="desctop">
                            {item.details.map((data) => {
                                return (
                                    <>
                                        <p>{data.para2}</p>
                                        <p>{data.para3}</p>
                                    </>
                                )
                            })}
                        </div>
                 </section>
                 
                 <section className="sideContent">
                    <Side />
                 </section>
            </div>
        </main>
        ) : ( <h1>not found</h1>
        )}
  </>
  )
}

export default Singlepages;