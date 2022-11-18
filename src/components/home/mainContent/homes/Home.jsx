import React from 'react'
import Popular from '../popular/Popular';
import Life from '../life/Life';
import './style.css'
import Ppost from '../Ppost/Ppost'
import Music from '../music/Music';
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

                </section>
            </div>
        </main>
    </div>
  )
}

export default Home;