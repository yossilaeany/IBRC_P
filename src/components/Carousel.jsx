import React from 'react'

const Carousel = () => {
  return (
  <div className=''>
         <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="../public/images/turtel dove.jpg" class="d-block w-100" alt="bird"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="fst-italic text-white">פצחן מטובע</h3>
                                    <p></p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="../public/images/ramiz.jpg" class="d-block w-100" alt="bird"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="fst-italic text-white">רמיות מטובעות</h3>
                                    <p></p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="../public/images/1000106387.jpg" class="d-block w-100" alt="bird"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="fst-italic text-white">שלדג גמדי מטובע</h3>
                                    <p></p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../public/images/FB_IMG_1704403199497.jpg" class="d-block w-100" alt="bird"/>
                            <div class="carousel-caption d-none d-md-block">
                                <h3 class="fst-italic text-white">שחפית גמדית מטובעת</h3>
                                    <p></p>
                            </div>
                        </div>

                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> 
                </div>
  )
}

export default Carousel