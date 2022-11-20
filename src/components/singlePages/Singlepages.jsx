import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { hero } from '../../dummyData';
import SinglePageSlider from './SinglePageSlider/SinglePageSlider';
import './singlepage.css'
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
                </section>
            </div>
        </main>
        ) : ( <h1>not found</h1>
        )}
  </>
  )
}

export default Singlepages;