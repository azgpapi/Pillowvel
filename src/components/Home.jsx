import React from 'react'

const Home = () => {
  return (
    <div>
      <video src="public/video/IMG_1701.MOV" 
      autoPlay
      infinites="true"
      loop
      width="100%"
      height="100%"
      preload='metadata'
      muted
      >
        Browser not support video
      </video>

      <div className='background-video-video/IMG_1791.MOV'>
        <h1>Pillowvel Store</h1>
        <p>Discover our exclusive collection of pillows designed to bring comfort and style to your fashion. Explore our store and find the perfect pillow brand.</p>
        <button>Shop Now</button>
      </div>
    </div>
  )
}

export default Home
