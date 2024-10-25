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
      <div className='flex flex-col items-center justify-center relative'>
        <div className='text-left text-[#000] text-[15px] p-10 w-full md:w-[600px]'>

          <div className='text-left border-b border-[#0000FF] mb-4'>
            <div className='flex justify-between'> 
              <h2 className=' italic font-bold '>Index of/</h2>
              <a href="https://dexscreener.com/solana/cs2sgzzkxj8wkzd61ohfp6zcu3sxq11kmcakeapeyhg8" target="_blank" className='text-right text-white hover:text-white hover:underline bg-[#0000FF]'>buy $yap</a>
            </div>
          </div>
          🗣️🗣️🗣️


          <div className='spacer'></div>

          <div>
          <h2 className='border-b border-[#0000FF] italic mb-4'>welcome/yaptivators/</h2>
          <p>We <i>yappers</i>, pushing boudaries in web3, fashion, technology through groundbreaking collaborations and community-driven innovations.</p>
          </div>


          <div className='spacer'></div>


          <div>
          <h2 className='border-b border-[#0000FF] italic mb-4'>we/yapping/</h2>

          <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.ing/" target="_blank" rel="noopener noreferrer">yap.ing</a> about what <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.is/" target="_blank" rel="noopener noreferrer">yap.is</a> will soon get you <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.money/" target="_blank" rel="noopener noreferrer">yap.money</a> so you can have <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.cash/" target="_blank" rel="noopener noreferrer">yap.cash</a> to spend <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.shopping/" target="_blank" rel="noopener noreferrer">yap.shopping</a> or at the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yapple.store/" target="_blank" rel="noopener noreferrer">yapple.store</a> or use <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.link/" target="_blank" rel="noopener noreferrer">yappay.link</a> to pay for <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.plus/" target="_blank" rel="noopener noreferrer">yap.plus</a> so you can have <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.news/" target="_blank" rel="noopener noreferrer">yap.news</a> & <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.codes/" target="_blank" rel="noopener noreferrer">yap.codes</a> for incentivized referrals in the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.community/" target="_blank" rel="noopener noreferrer">yap.community</a> or a premium <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.page/" target="_blank" rel="noopener noreferrer">yap.page</a> or to listen to <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.zip/" target="_blank" rel="noopener noreferrer">yap.zip</a> we just tryna <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.it.com/" target="_blank" rel="noopener noreferrer">yap.it.com</a> to the moon so we can <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.farm/" target="_blank" rel="noopener noreferrer">yap.farm</a> on <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.earth/" target="_blank" rel="noopener noreferrer">yap.earth</a> but that is just the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.today/" target="_blank" rel="noopener noreferrer">yap.today</a> on the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.site/" target="_blank" rel="noopener noreferrer">yap.site</a> welcome to the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.team/" target="_blank" rel="noopener noreferrer">yap.team</a> of the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.meme/" target="_blank" rel="noopener noreferrer">yap.meme</a>  
        <br/><br/>
        <span className='text-[15px] bg-[#000FFF] text-white underline cursor-pointer' onClick={handleCopy}>
          3gcdoCBQMKAFVopsQ377X7JhkcNPg9fwPY4eW46Apump
        </span>
        {toastVisible && <div className="toast text-[#000FFF] text-[15px] italic">in clipboard</div>}

          {hoveredImage && (
            <img 
              className=' max-w-60 border border-[#0000FF]'
              src={hoveredImage} 
              alt="hovered" 
              style={{ position: 'absolute', top: '200px', left: '0px', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }} // Adjusted position
            />
          )}
          </div>




          <div className='spacer'></div>





          <div>
            <h2 className='border-b border-[#0000FF] italic mb-4'>yap/build/cook</h2>
            
            <div className='flex flex-wrap items-center gap-3'>
              <img src="/logo/yapcapital.png" alt="yapcorp" className="h-24" />
              <img src="/logo/yapplestore.png" alt="yapcorp" className="h-24" />
              <img src="/logo/yappay.png" alt="yapcorp" className="h-24" />
              <img src="/logo/yapcapital.png" alt="yapcorp" className="h-24" />
              <img src="/logo/yapplestore.png" alt="yapcorp" className="h-24" />
              <img src="/logo/yapcapital.png" alt="yapcorp" className="h-24" />
              <img src="/logo/yapplestore.png" alt="yapcorp" className="h-24" />
              <img src="/logo/yappay.png" alt="yapcorp" className="h-24" />
            </div>
          </div>



          <div className='spacer'></div>




          <div>
          <h2 className='border-b border-[#0000FF] italic mb-4'>we/yapping/</h2>
          <p>A collective of visionaries shaping the future of digital experiences and decentralized technologies.</p>
          </div>
          
          <div className='team-profiles flex space-x-4 mt-4'>
            {['#f0da91', '#f0da91', '#f0da91', '#f0da91', '#f0da91'].map((color, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className=' border rounded-full p-1 border-[#0000FF]'>
                <div className='w-8 h-8 rounded-full' style={{ backgroundColor: color }}></div>
                </div>
                <span className='text-xs text-[#0000FF]'>{color}</span>
              </div>
            ))}
          </div>




          <div className='spacer'></div>


          <div>
          <h2 className='border-b border-[#0000FF] italic mb-4'>worked/working/with/</h2>

          <div className='brand-logos flex items-center space-x-4'>
          {['/logo/1.png', '/logo/2.png', '/logo/3.png', '/logo/4.png', '/logo/5.png'].map((logo, index) => (
            <div key={index} className='flex items-center'>
              <img src={logo} alt={`Brand logo ${index + 1}`} className='w-auto h-auto' />
            </div>
          ))}
        </div>

          </div>


          <div className='spacer'></div>

          <div>
          <h2 className='border-b border-[#0000FF] italic mb-4'>communities/yap/contribute/</h2>

          <div className='brand-logos flex space-x-4'>

          <span className='text-right text-white bg-[#0000FF]'>$wif</span>
          <span className='text-right text-white bg-[#0000FF]'>$sfc</span>
          <span className='text-right text-white bg-[#0000FF]'>$mew</span>
          <span className='text-right text-white bg-[#0000FF]'>$michi</span>


          </div>

          </div>


      </div>

      <div className='spacer'></div>
      <div className='spacer'></div>
      <div className='footer fixed bottom-4 text-[10px] text-[#0000FF] cursor-wait'>yap site 2024 ©</div>
      </div>

    </>
  )
}

export default App
