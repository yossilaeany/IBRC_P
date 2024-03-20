import React from 'react'
import { css } from "@emotion/css"

const MyCarousel = () => {
    return (
        <div className='carusH container-fluid mb-5'>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="images/turtel dove.jpg" className="d-block w-100" alt="bird" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="fst-italic text-white">תור מטובע</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="images/ramiz.jpg" className="d-block w-100" alt="bird" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="fst-italic text-white">רמיות מטובעות</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="images/eurasian wryneck.jpg" className="d-block w-100" alt="bird" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="fst-italic text-white">סבראש מטובע</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/moustached warbler.jpg" className="d-block w-100" alt="bird" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className="fst-italic text-white">זמירון מטובע</h3>
                            <p></p>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default MyCarousel
const style = {
    carusel: css`
    height: 350;
    
    `

}