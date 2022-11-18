import React from 'react'
import Popular from '../popular/Popular';
import Life from '../life/Life';
import './style.css'
import Ppost from '../Ppost/Ppost'
import Music from '../music/Music';
import Side from '../../sideContent/side/Side';
const Home = () => {
  return (
    <div>
        <main>
            <div className="container">
                <section className="mainContent">
                    <Popular />
                    <Ppost />
                    <Life />
                    <Music />
                </section>
                <section className="sideContent">
                   <Side />
                </section>
            </div>
        </main>
    </div>
  )
}

export default Home;