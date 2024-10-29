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
        <div className='text-left text-[#000] text-[15px] md:p-10 md:w-[600px] p-2  w-full'>

          <div className='text-left border-b border-[#0000FF] mb-4'>
            <div className='flex flex-row justify-between'>
              <h1 className='text-xl font-bold '>Index of /</h1>
              <a href="https://dexscreener.com/solana/cs2sgzzkxj8wkzd61ohfp6zcu3sxq11kmcakeapeyhg8" target="_blank" className='text-right text-white hover:text-white hover:underline bg-[#0000FF] font-mono text-xs mt-2.5'>buy $yap</a>
            </div>
          </div>
          <span className='hidden text-4xl'>🗣️🗣️🗣️</span>
          <div className='flex flex-wrap justify-left'>
          <img className="w-24 sm:w-32 m-2" src="/YAPYAP_UNI.png"/>
          <img className="w-24 sm:w-32 m-2" src="/YAPYAP_UNI.png"/>
          <img className="w-24 sm:w-32 m-2" src="/YAPYAP_UNI.png"/>
          </div>


          <div className='spacer'></div>

          <div>
            
          <div className='flex justify-between border-b border-[#0000FF]  mb-4'> 
          <span className='flex flex-grow gap-x-1'><img src="/folder.png"  className='h-4'/><h2 className=' font-bold'>/<span className='hover:underline cursor-pointer'>yap</span>/<span className='hover:underline cursor-pointer'>welcome</span>/</h2></span>
          <span className='font-mono text-[10px] hover:underline mt-1'><a className='font-mono' href="https://pump.fun/3gcdoCBQMKAFVopsQ377X7JhkcNPg9fwPY4eW46Apump" target='_blank'>2024-09-26 14:02:00</a></span>
          </div>

          <p>We <strong><i>yappers</i></strong>, are pushing boundaries in web3, fashion and technology through groundbreaking collaborations and community-driven innovations.</p>
          </div>


          <div className='spacer'></div>


          <div>
          <div className='flex justify-between border-b border-[#0000FF]  mb-4'> 
          <span className='flex flex-grow gap-x-1'><img src="/folder.png"  className='h-4'/><h2 className=' font-bold'>/<span className='hover:underline cursor-pointer'>yap</span>/<span className='hover:underline cursor-pointer'>about</span>/</h2></span>
          <span className='font-mono text-[10px] hover:underline mt-1'><a className='font-mono' href="https://pump.fun/3gcdoCBQMKAFVopsQ377X7JhkcNPg9fwPY4eW46Apump" target='_blank'>2024-09-26 14:02:00</a></span>
          </div>
          <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.ing/" target="_blank" rel="noopener noreferrer">yap.ing</a> about what <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.is/" target="_blank" rel="noopener noreferrer">yap.is</a> will soon get you <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.money/" target="_blank" rel="noopener noreferrer">yap.money</a> so you can have <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.cash/" target="_blank" rel="noopener noreferrer">yap.cash</a> to spend <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.shopping/" target="_blank" rel="noopener noreferrer">yap.shopping</a> or at the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yapple.store/" target="_blank" rel="noopener noreferrer">yapple.store</a> or use <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.link/" target="_blank" rel="noopener noreferrer">yappay.link</a> to pay for <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.plus/" target="_blank" rel="noopener noreferrer">yap.plus</a> so you can have <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.news/" target="_blank" rel="noopener noreferrer">yap.news</a> & <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.codes/" target="_blank" rel="noopener noreferrer">yap.codes</a> for incentivized referrals in the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.community/" target="_blank" rel="noopener noreferrer">yap.community</a> or a premium <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.page/" target="_blank" rel="noopener noreferrer">yap.page</a> or to listen to <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.zip/" target="_blank" rel="noopener noreferrer">yap.zip</a> we just tryna <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.it.com/" target="_blank" rel="noopener noreferrer">yap.it.com</a> to the moon so we can <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.farm/" target="_blank" rel="noopener noreferrer">yap.farm</a> on <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.earth/" target="_blank" rel="noopener noreferrer">yap.earth</a> but that is just the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.today/" target="_blank" rel="noopener noreferrer">yap.today</a> on the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.site/" target="_blank" rel="noopener noreferrer">yap.site</a> welcome to the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.team/" target="_blank" rel="noopener noreferrer">yap.team</a> of the <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="underline font-bold" href="https://www.yap.meme/" target="_blank" rel="noopener noreferrer">yap.meme</a>  
        <br/><br/>
        <span className='font-mono text-xs text-[15px] bg-[#000FFF] text-white underline cursor-pointer' onClick={handleCopy}>
          3gcdoCBQMKAFVopsQ377X7JhkcNPg9fwPY4eW46Apump
        </span>
        {toastVisible && <div className="toast text-[#000FFF] text-[10px] font-mono text-xs">in clipboard</div>}

          {hoveredImage && (
            <img 
              className=' max-w-60 border border-[#0000FF]'
              src={hoveredImage} 
              alt="hovered" 
              style={{ position: 'absolute', top: '250px', right: '0px', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }} // Adjusted position
            />
          )}
          </div>




          <div className='spacer'></div>


          <div>
          <div className='flex flex-wrap justify-between text-left border-b border-[#0000FF] mb-4'>
          <div className='flex flex-grow gap-x-1'><img src="/folder.png"  className='h-4'/><h2 className=' font-bold'>/<span className='hover:underline cursor-pointer'>yap</span>/<span className='hover:underline cursor-pointer'>worked</span>/<span className='hover:underline cursor-pointer'>working</span></h2></div>
          <span className='font-mono text-[10px] hover:underline mt-1'><a className='font-mono' href="https://pump.fun/3gcdoCBQMKAFVopsQ377X7JhkcNPg9fwPY4eW46Apump" target='_blank'>2024-09-26 14:02:00</a></span>
          </div>
            <div className='brand-logos flex items-center space-x-4'>
            {['/logo/1.png', '/logo/2.png', '/logo/3.png', '/logo/4.png', '/logo/5.png', '/logo/6.png'].map((logo, index) => (
              <div key={index} className='flex item-center'>
                <img src={logo} alt={`Brand logo ${index + 1}`} className='w-auto h-auto' />
              </div>
            ))}
            </div>

          </div>

          <div className='spacer'></div>





          <div>
          <div className='flex justify-between border-b border-[#0000FF]  mb-4'> 
          <span className='flex flex-grow gap-x-1'><img src="/folder.png"  className='h-4'/><h2 className=' font-bold'>/<span className='hover:underline cursor-pointer'>yap</span>/<span className='hover:underline cursor-pointer'>build</span>/<span className='hover:underline cursor-pointer'>cook</span></h2></span>
          <span className='font-mono text-xs mt-1'>2024-10-30 10:16</span>
          </div>


          <div className='flex flex-wrap gap-0'>
              <img src="/logo/yap_1.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-pointer hover:animate-spin" />
              <img src="/logo/yap_2.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-pointer hover:animate-spin" />
              <img src="/logo/yap_3.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-pointer hover:animate-spin" />
              <img src="/logo/yap_4.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
              <img src="/logo/yap_5.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
              <img src="/logo/yap_6.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
              <img src="/logo/yap_7.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
              <img src="/logo/yap_8.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
              <img src="/logo/yap_9.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
              <img src="/logo/yap_10.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
              <img src="/logo/yap_11.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
              <img src="/logo/yap_12.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
              <img src="/logo/yap_13.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
              <img src="/logo/yap_14.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
              <img src="/logo/yap_15.svg" alt="yapcorp" className="w-1/3 sm:-m-0.5 cursor-wait hover:animate-spin" />
            </div>

          </div>



          <div className='spacer'></div>




          <div>
          <div className='flex justify-between border-b border-[#0000FF]  mb-4'> 
          <span className='flex flex-grow gap-x-1'><img src="/folder.png"  className='h-4'/><h2 className=' font-bold'>/<span className='hover:underline cursor-pointer'>yap</span>/<span className='hover:underline cursor-pointer'>team</span>/<span className='hover:underline cursor-pointer'>members</span>/</h2></span>
          <span className='font-mono text-[10px] hover:underline mt-1'><a className='font-mono' href="https://pump.fun/3gcdoCBQMKAFVopsQ377X7JhkcNPg9fwPY4eW46Apump" target='_blank'>2024-09-26 14:02:00</a></span>
          </div>
                    <p>A collective of visionaries shaping the future of digital experiences and decentralized technologies.</p>
          </div>
          
          <div className='team-profiles flex flex-wrap justify-left space-x-2 mt-4'>
            {['#f0da91', '#f0da92', '#f0da93', '#f0da94', '#f0da95'].map((color, index) => (
              <div key={index} className='flex flex-col items-left'>
                <div className=' border p-1 border-[#0000FF]  cursor-help'>
                <div className='w-10 h-10 sm:w-16 sm:h-16 mr-4' style={{ backgroundColor: color }}></div>
                </div>
                <span className='mt-1 font-mono text-xs hover:underline text-[#0000FF] cursor-help'>{color}</span>
              </div>
            ))}
          </div>


          <div className='spacer'></div>

          <div>
          <div className='flex justify-between border-b border-[#0000FF]  mb-4'> 
          <span className='flex flex-grow gap-x-1'><img src="/folder.png"  className='h-4'/><h2 className=' font-bold'>/<span className='hover:underline cursor-pointer'>communities</span>/<span className='hover:underline cursor-pointer'>yap</span>/<span className='hover:underline cursor-pointer'>contribute</span>/</h2></span>
          <span className='font-mono text-[10px] hover:underline mt-1'><a className='font-mono' href="https://pump.fun/3gcdoCBQMKAFVopsQ377X7JhkcNPg9fwPY4eW46Apump" target='_blank'>2024-09-26 14:02:00</a></span>
          </div>

          <div className='brand-logos flex flex-wrap justify-left space-x-4'>

          <a href="https://x.com/dogwifcoin" target="_blank" className='text-right hover:text-white hover:underline text-white bg-[#0000FF] font-mono text-xs'>$wif</a>
          <a href="https://x.com/michionsolana" target="_blank" className='text-right hover:text-white hover:underline text-white bg-[#0000FF] font-mono text-xs'>$sfc</a>
          <a href="https://x.com/MewsWorld" target="_blank" className='text-right hover:text-white hover:underline text-white bg-[#0000FF] font-mono text-xs'>$mew</a>
          <a href="https://x.com/michionsolana" target="_blank" className='text-right hover:text-white hover:underline text-white bg-[#0000FF] font-mono text-xs'>$michi</a>


          </div>

          </div>


      </div>

      <div className='spacer'></div>
      <div className='spacer'></div>
      <div className='footer fixed bottom-4 text-[10px] text-[#0000FF] cursor-pointer'>yap site 2024 ©</div>
      </div>

    </>
  )
}

export default App
