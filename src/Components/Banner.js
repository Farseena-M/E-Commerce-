import React from 'react'
import  banner from '../Components/Assets/Banner.png'

const Banner = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:'735px', width:'100%'}}>
        <img src={banner} class="d-block w-100" alt="..." />
    </div>
  </div>
</div>
    </div>
  )
}
export default Banner