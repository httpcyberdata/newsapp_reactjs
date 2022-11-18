import React from 'react'

const SocialMedia = () => {
  return (
    <div>
        <section className="social">
            <div className="socBox">
                <i className="fab fa-facebook-f"></i>
                <span>12,740 Likes</span>
            </div>
            <div className="socBox">
                <i className="fab fa-pinterest"></i>
                <span>5,400 Fans</span>
            </div>
            <div className="socBox">
                <i className="fab fa-twitter"></i>
                <span>8,700 Follows</span>
            </div>
            <div className="socBox">
                <i className="fab fa-instagram"></i>
                <span>8,700 Follows</span>
            </div>
            <div className="socBox">
                <i className="fab fa-youtube"></i>
                <span>2,700 Subscribers</span>
            </div>
        </section>
    </div>
  )
}
export default SocialMedia;