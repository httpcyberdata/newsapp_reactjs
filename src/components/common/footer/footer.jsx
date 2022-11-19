import React from 'react';

const Footer = () => {
    return (
    <>
      <footer>
        <div className="container">
            <div className="box logo">
                <img src="../images/tech-logo-footer.png" alt="" />
                <p>Busan is an amazing magazine Blogger theme that is easy to customize for your needs</p>
                <i className="fa fa-envelope"></i>
                <span>hello@beatufiul.com</span>
                <i className="fa fa-headphones"></i>
                <span>+1 602521488</span>
            </div>
            <div className="box">
                <h3>SPORT</h3>
                <div className="item">
                    <img src="../images/hero/hero1.jpg" alt="" />
                    <p>Google to Boost Android Security in Few Days</p>
                </div>
                <div className="item">
                    <img src="../images/hero/hero2.jpg" alt="" />
                    <p>Cespedes play the winning Baseball Game</p>
                </div>
            </div>
            <div className="box">
                <div className="item">
                    <img src="../images/hero/hero3.jpg" alt="" />
                    <p>US Promises to give Intel aid to locate the soldiers</p>
                </div>
                <div className="item">
                    <img src="../images/hero/hero1.jpg" alt="" />
                    <p>Cespedes play the winning Baseball Game</p>
                </div>
            </div>
        </div>
      </footer>
    </>
    )
}

export default Footer;