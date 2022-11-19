import React from 'react'
import Heading from '../../common/Heading/Heading';
import { discover } from "../../../dummyData";
import './style.css'
const Discover = () => {
  return (
    <div>
        <section className="discover">
            <div className="container">
                <Heading title="Discover" />
                <div className="content">
                    {discover.map((val) => {
                        return (
                            <div className="box">
                                <div className="img">
                                    <img src={val.cover} alt="" />
                                </div>
                                <h1 className="title">{val.title}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </div>
  )
}
export default Discover;