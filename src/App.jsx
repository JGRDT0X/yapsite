import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

// random pic selector
import image1 from '/1.jpg'; 
import image2 from '/2.jpg'; 
import image3 from '/3.jpg'; 
import image4 from '/4.jpg'; 
import image5 from '/5.jpg'; 
import image6 from '/6.jpg'; 
import image7 from '/7.jpg'; 
import image8 from '/8.jpg'; 
import image9 from '/9.jpg'; 
import image10 from '/10.jpg'; 
import image11 from '/11.jpg'; 
import image12 from '/12.jpg'; 
import image13 from '/13.jpg'; 
import image14 from '/14.jpg'; 
import image15 from '/15.jpg'; 
import image16 from '/16.jpg'; 
import image17 from '/17.jpg'; 
import image18 from '/18.jpg'; 
import image19 from '/19.jpg'; 
import image20 from '/20.jpg'; 
import image21 from '/21.jpg'; 

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20, image21]; // Array of images

function App() {
  const [count, setCount] = useState(0)
  const [toastVisible, setToastVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null); // State for hovered image

  const handleCopy = () => {
    navigator.clipboard.writeText('3gcdoCBQMKAFVopsQ377X7JhkcNPg9fwPY4eW46Apump')
      .then(() => {
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2000); // Hide toast after 2 seconds
      });
  };

  const handleMouseEnter = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setHoveredImage(randomImage);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <span className='w-1/2 md:w-1/3 text-left text-[#000] text-[15px]'>
          🗣️<br/>

      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.ing/" target="_blank" rel="noopener noreferrer">yap.ing</a> about what <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.is/" target="_blank" rel="noopener noreferrer">yap.is</a> will soon get you <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.money/" target="_blank" rel="noopener noreferrer">yap.money</a> so you can have <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.cash/" target="_blank" rel="noopener noreferrer">yap.cash</a> to spend <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.shopping/" target="_blank" rel="noopener noreferrer">yap.shopping</a> or at the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.store/" target="_blank" rel="noopener noreferrer">yapple.store</a> or use <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.link/" target="_blank" rel="noopener noreferrer">yappay.link</a> to pay for <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.plus/" target="_blank" rel="noopener noreferrer">yap.plus</a> so you can have <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.news/" target="_blank" rel="noopener noreferrer">yap.news</a> & <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.codes/" target="_blank" rel="noopener noreferrer">yap.codes</a> for incentivized referrals in the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.community/" target="_blank" rel="noopener noreferrer">yap.community</a> or a premium <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.page/" target="_blank" rel="noopener noreferrer">yap.page</a> or to listen to <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.zip/" target="_blank" rel="noopener noreferrer">yap.zip</a> we just tryna <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.it.com/" target="_blank" rel="noopener noreferrer">yap.it.com</a> to the moon so we can <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.farm/" target="_blank" rel="noopener noreferrer">yap.farm</a> on <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.earth/" target="_blank" rel="noopener noreferrer">yap.earth</a> but that is just the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.today/" target="_blank" rel="noopener noreferrer">yap.today</a> on the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.site/" target="_blank" rel="noopener noreferrer">yap.site</a> welcome to the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.team/" target="_blank" rel="noopener noreferrer">yap.team</a> of the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline" href="https://www.yap.meme/" target="_blank" rel="noopener noreferrer">yap.meme</a>  


      <br/><br/>
      
          <span className='text-[11px] underline' onClick={handleCopy} style={{ cursor: 'pointer' }}>
            3gcdoCBQMKAFVopsQ377X7JhkcNPg9fwPY4eW46Apump
          </span>
          {toastVisible && <div className="toast text-[#000be2] text-[11px] ">yaped in clipboard</div>}
        </span>

        {hoveredImage && (
          <img 
            src={hoveredImage} 
            alt="hovered" 
            style={{ position: 'absolute', top: '30%', left: '30%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }} // Adjusted position
          />
        )}

        <div className='footer fixed bottom-4 text-[10px] text-gray-400'>Yap Site 2024 ©</div>
      </div>
    </>
  )
}

export default App
