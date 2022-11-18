import React from 'react'
import Popular from '../popular/Popular';
import './style.css'
import Ppost from '../Ppost/Ppost'
const Home = () => {
  return (
    <div>
        <main>
            <div className="container">
                <section className="mainContent">
                    <Popular />
                    <Ppost />
                </section>
                <section className="sideContent">

                </section>
            </div>
        </main>
    </div>
  )
}

export default Home;