import React from 'react'
import  banner from '../Components/Assets/banner1.jpg'

const Banner = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:'720px', width:'100%'}}>
        <img src={banner} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..." />
    </div>
    0
  </div>
</div>
    </div>
  )
}

export default Banner