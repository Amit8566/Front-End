import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from 'components/navbar/Header';
import { Image } from '@chakra-ui/react';
import Nft1 from 'assets/img/landing/Home.webp';
import section from 'assets/img/landing/left-card.svg';
import section1 from 'assets/img/landing/white-card.svg';
import section2 from 'assets/img/landing/sponser1.svg';
import section3 from 'assets/img/landing/sponser2.svg';
import section4 from 'assets/img/landing/sponser3.svg';
import section5 from 'assets/img/landing/section2.webp';
import Cut from 'assets/img/landing/bottom.svg';
import Services from 'assets/img/landing/section1.webp';
import Top from 'assets/img/landing/top.svg';

import Footer from 'components/footer/FooterAuth';
function Landing() {
    const responsive = {
    
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    
      const responsive1 = {
        
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    
  const newLocal = 'assets/img/landing/Home.webp';
      return (
        <>
          <Header />
    
          <section className='mx-auto max-w-7xl md:mb-20'>
            <div className='grid grid-cols-12 gap-4 translate-y-6'>
              <div className='col-span-7'>
                <div className='translate-y-1/4'>
                  <h1 className='hero-text text-[80px] leading-tight font-bold text-[#00173f]'>
                    Help your business growth up to{' '}
                    <span className='hero-level text-[#4f7ac2] border-b-4 border-[#4f7ac2] italic '>
                      high level
                    </span>{' '}
                  </h1>
                  <p className='hero-text1 text-[#8f9aae] pt-8 mb-8'>
                    Dedicated to providing high-quality accounting services
                    <br /> to individuals and businesses of all sizes.
                  </p>
    
                  <button className='hero-button text-lg bg-[#4f7ac2] rounded-lg text-white h-12 w-40 hover:text-[#4f7ac2] hover:bg-transparent hover:border-[#4f7ac2] hover:border-2 '> Get Started </button>
            
                </div>
              </div>
              <div className='col-span-5'>
                <div
                  className='h-full bg-cover bg-no-repeat'
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/home.svg)`,
                  }}
                >
                  <Image src={Nft1}  width='100%' alt='Banner Image'/>
                </div>
              </div>
            </div>
          </section>
    
          <section className='mx-auto w-full max-w-7xl mb-12'>
            <div className='py-12'>
              <h1 className='Capabilities text-center text-[50px]	font-[700]'>Our Capabilities</h1>
              <p className='Capabilities-text1 hero-text1 max-w-2xl	text-[#8f9aae] pt-8 mx-auto text-[18px] leading-[1.5em] text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className='grid grid-cols-12 gap-6'>
              <div className='col-span-4 p-10 bg-no-repeat bg-cover bg-center rounded-lg border-2' style={{
                   backgroundImage: `url(${process.env.PUBLIC_URL}/img/card-background.svg)`,
                 }}>
                <h1 className='text-[28px] text-[#00173f] font-bold text-left pb-3 Capabilities-title'>Blockchain</h1>
                <p className='text-left text-[#8f9aae] text-[18px] font-[400] Capabilities-text1 hero-text1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                <p className='text-left pt-6 text-[#4f7ac2] text-[18px] font-[400] Capabilities-text1 blue'>
                   Learn More
                </p>
              </div>
               <div className='col-span-4 p-10 bg-no-repeat bg-cover bg-center rounded-lg border-2' style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/card-background.svg)`,
                  }}>
                 <h1 className='text-[28px] text-[#00173f] font-bold text-left pb-3 Capabilities-title'>Financial Services</h1>
                 <p className='text-left text-[#8f9aae] text-[18px] font-[400] Capabilities-text1 hero-text1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
                 <p className='text-left pt-6 text-[#4f7ac2] text-[18px] font-[400] Capabilities-text1 blue'>
                    Learn More
                 </p>
               </div>
               <div className='col-span-4 p-10 bg-no-repeat bg-cover bg-center rounded-lg border-2' style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/card-background.svg)`,
                  }}>
                 <h1 className='text-[28px] text-[#00173f] font-bold text-left pb-3 Capabilities-title'>Accounting</h1>
                 <p className='text-left text-[#8f9aae] text-[18px] font-[400] Capabilities-text1 hero-text1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy  </p>
                 <p className='text-left pt-6 text-[#4f7ac2] text-[18px] font-[400] Capabilities-text1 blue'>
                    Learn More
                 </p>
               </div>
            </div>
            <div className='text-center py-16'>
              <button className='hero-button text-lg bg-[#4f7ac2] rounded-lg text-white h-12 w-40 hover:text-[#4f7ac2] hover:bg-transparent hover:border-[#4f7ac2] hover:border-2 '>Learn More <span aria-hidden="true">&rarr;</span></button>
            </div>
          </section>
    
          <section className='bg-[#f1f1f7] relative '  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/section.webp)`,
                  }}>
                    
            <div className='absolute top-0 right-0 '>
            <Image src={section1} className='h-36 w-36' alt='sidetag'/>
            </div>
            <div className='absolute bottom-0 left-0 '>
            <Image src={section} className='h-36 w-36' alt='sidetag'/>
            </div>
            <div className=' bg-gradient'>
              <div className='mx-auto w-full max-w-7xl'>
                <div className='max-w-80 py-20 text-[#fff]'>
                  <h1 className='text-[50px] font-[600] Solutions'>We Offer Personalized <br/> Solutions Tailored To Meet Your<br/> Requirements</h1>
                  <p className='text-lg py-6'>We're here to help you simplify and streamline your accounting processes. Our team of certified accountants and bookkeepers are dedicated to providing high-quality accounting services to individuals and businesses of all sizes.</p>
                  <button className='Solutions-button text-lg bg-[#fff] rounded-lg text-[#4f7ac2] h-12 w-40 mt-3  hover:bg-transparent hover:border-[#4f7ac2] hover:border-2 '>Learn More <span aria-hidden="true">&rarr;</span></button>
                </div>
              </div>
            </div>
          </section>
    
          <section className='mx-auto w-full max-w-7xl mb-12'>
            <div>
              <h1 className='text-center text-[#afafbb] hero-text1 text-lg font-bold capitalize py-12 '>TRUSTED BY THE WORLD LEADING COMPANIES</h1>
    
              <div className=''>
              <Carousel
               additionalTransfrom={0}
               arrows={false}
               autoPlay
               autoPlaySpeed={1000}
               centerMode={false}
               className=""
               containerClass="container-with-dots"
               dotListClass=""
               draggable
               focusOnSelect={false}
               infinite
               itemClass=""
               keyBoardControl
               minimumTouchDrag={80}
               pauseOnHover
               renderArrowsWhenDisabled={false}
               renderButtonGroupOutside={false}
               renderDotsOutside={false}
              responsive={responsive}>
                <div>
                   <Image src={section2} height={'100%'} width={'100%'} alt='sponser Logo'/>
                </div>
                <div><Image src={section3} height={'100%'} width={'100%'} alt='sponser Logo'/></div>
                <div><Image src={section4} height={'100%'} width={'100%'} alt='sponser Logo'/></div>
                <div><Image src={section2} height={'100%'} width={'100%'} alt='sponser Logo'/></div>
                <div><Image src={section3} height={'100%'} width={'100%'} alt='sponser Logo'/></div>
               
              </Carousel>
              </div>
            </div>
          </section>
    
          <section className='bg-color relative'>
            <div className='h-52 bg-white absolute w-full z-1'></div>
            <div className='mx-auto w-full max-w-7xl relative z-10'>
              <div className='grid grid-cols-2 gap-6 bg-white pt-26 p-12'>
                <div>
                  <h1 className='text-5xl leading-[1.2em] business-title text-[#00173f] font-bold	mb-8'>Your Interests <br/> Come First</h1>
                  <p className='text-lg leading-[1.5em] hero-text1 text-[#8f9aae]'>We use the latest technology and software to ensure accurate and efficient record-keeping.</p>
    
                  <h1 className='text-[#4f7ac2] business text-3xl leading-[1.2em] font-medium mt-12'>Business Acumen</h1>
                  <p className='text-lg leading-[1.5em] mt-6 hero-text1 text-[#8f9aae]'>We pride ourselves on our attention to detail and commitment to providing exceptional customer service.</p>
                  
                  <h1 className='text-[#4f7ac2] business text-3xl leading-[1.2em] font-medium mt-12'>Critical Thinking</h1>
                  <p className='text-lg leading-[1.5em] mt-6 hero-text1 text-[#8f9aae]'>We pride ourselves on our attention to detail and commitment to providing exceptional customer service.</p>
                </div>
                <div>
                <Image src={section5} height={'100%'} width={'100%'} alt='sponser Logo'/>
                </div>
              </div>
            </div>
            <div className='mx-auto w-full max-w-7xl mb-12'>
              <h1 className='text-center text-[18px] text-[#8f9aae] my-[4rem]'>Our Community</h1>
              <h1 className='text-center text-5xl leading-[1.2em] text-[#fff] font-bold	mb-[30px]'>We make it easy for  companies and their <br/> employees  to set-up, contribute and <br/> manage complex  benefits.</h1>
               <div className='text-center mt-[50px]'>
                <h1 className='text-center text-[50px] leading-[1.2em] text-[#fff] font-bold	mb-[30px] pt-6'>Pricing</h1>
                <p className='text-[18px] leading-[1.5em] text-[#8f9aae]' >With Accting, you can rest assured that your <br/> finances are in good hands.</p>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-12'>
                <div className='relative p-6 border-[1px] border-[#8f9aae66]'>
                  <h1 className='text-[#4f7ac2] text-[18px] font-bold'>Standard Pack</h1>
                  <h1 className='text-[#98b0d9] absolute right-4 top-4'><span className='text-[#4f7ac2] text-5xl font-bold'>$19</span>/mo</h1>
                  <ul className='py-[40px] pl-[20px]'>
                    <li className='text-[#98b0d9]'>Lorem ipsum dolor sit amet</li>
                    <li className='text-[#98b0d9]'>Lorem ipsum dolor sit amet</li>
                    <li className='text-[#98b0d9]'>Lorem ipsum dolor sit amet</li>
                  </ul>
                  <button className='text-lg bg-[#4f7ac2] rounded-lg text-white h-12 px-5 hover:text-[#fff] hover:bg-transparent hover:border-[#4f7ac2] '> Get now </button>
                </div>
                <div className='relative p-6 border-[1px] bg-[#4f7ac2] border-[#8f9aae66]'>
                  <h1 className='text-[#fff] text-[18px] font-bold'>Premium Pack</h1>
                  <h1 className='text-[#fff] absolute right-4 top-4'><span className='text-[#fff] text-5xl font-bold'>$99</span>/mo</h1>
                  <ul className='py-[40px] pl-[20px]'>
                    <li className='text-[#fff]'>Lorem ipsum dolor sit amet</li>
                    <li className='text-[#fff]'>Lorem ipsum dolor sit amet</li>
                    <li className='text-[#fff]'>Lorem ipsum dolor sit amet</li>
                  </ul>
                  <button className='text-lg bg-[#fff] rounded-lg text-[#4f7ac2] h-12 px-5 hover:text-[#fff] hover:bg-transparent hover:border-[#fff] hover:border-[1px] '> Get now </button>
                </div>
                <div className='relative p-6 border-[1px] border-[#8f9aae66]'>
                  <h1 className='text-[#4f7ac2] text-[18px] font-bold'>Standard Pack</h1>
                  <h1 className='text-[#98b0d9] absolute right-4 top-4'><span className='text-[#4f7ac2] text-5xl font-bold'>$49</span>/mo</h1>
                  <ul className='py-[40px] pl-[20px]'>
                    <li className='text-[#98b0d9]'>Lorem ipsum dolor sit amet</li>
                    <li className='text-[#98b0d9]'>Lorem ipsum dolor sit amet</li>
                    <li className='text-[#98b0d9]'>Lorem ipsum dolor sit amet</li>
                  </ul>
                  <button className='text-lg bg-[#4f7ac2] rounded-lg text-white h-12 px-5 hover:text-[#fff] hover:bg-transparent hover:border-[#4f7ac2] '> Get now </button>
                </div>
               </div>
    
            </div>
            <div className=''>
            <Image src={Cut} className='h-36 w-36' alt='color Cut'/>
            </div>
          </section>
    
          <section className='bg-Tailor'>
            <div className='mx-auto w-full max-w-7xl pb-12'>
              <div className='grid grid-cols-2 gap-2'>
                <div className='py-16'>
                  <h1 className='text-5xl pt-12 leading-snug text-[#00173f] font-bold	mb-8'>We Tailor Our Services <br/> To Meet The Unique <br/> Needs</h1>
                  <p className='text-lg leading-[1.5em] text-[#8f9aae] hero-text1'>We're here to help you simplify and streamline your accounting processes. Our team of certified accountants and bookkeepers are dedicated to providing high-quality accounting services to individuals and businesses of all sizes.</p>
                  <button className='hero-button mt-12 text-lg bg-[#4f7ac2] rounded-lg text-white h-12 w-40 hover:text-[#4f7ac2] hover:bg-transparent hover:border-[#4f7ac2] hover:border-2 '> Get Started </button>
              
                </div>
                <div className='py-16'>
                <Image src={Services} alt='Services Image'/>
                </div>
              </div>
            </div>
              
          </section>
    
          <section className='relative'>
            <div className='absolute right-0'>
            <Image src={Top} className='h-36 w-36 ' alt='color Cut'/>
            </div>
            <div className='mx-auto w-full max-w-7xl py-24'>
              <p className='text-[#afafbb] font-semibold	text-base'>LATEST POST</p>
              <h1 className='text-5xl leading-[1.2em] font-bold'>From Blog</h1>
    
              <div className='postSlider'>
                  <Carousel
                  additionalTransfrom={0}
                  arrows={false}
                  autoPlay
                  autoPlaySpeed={5000}
                  centerMode={false}
                  className=""
                  containerClass="container-with-dots"
                  dotListClass=""
                  draggable
                  focusOnSelect={false}
                  infinite
                  itemClass=""
                  keyBoardControl
                  minimumTouchDrag={80}
                  pauseOnHover
                  renderArrowsWhenDisabled={false}
                  renderButtonGroupOutside={false}
                  renderDotsOutside={false}
                  responsive={responsive1}>
                    <div className='p-4'>
                    <Image src={Services} alt='sponser Logo'/>
                      <p className='mt-4'>July 10, 2023</p>
                      <h1 className='cursor-pointer text-[26px] font-medium hover:text-[#2721f5] my-4'>The standard Lorem Ipsum passage, used since the 1500s</h1>
    
                      <p className='cursor-pointer text-[#2721f5]'>Read More</p>
                    </div>
                    <div className='p-4'>
                    <Image src={Services} alt='sponser Logo'/>
                      <p className='mt-4'>July 10, 2023</p>
                      <h1 className='cursor-pointer text-[26px] font-medium hover:text-[#2721f5] my-4'>The standard Lorem Ipsum passage, used since the 1500s</h1>
    
                      <p className='cursor-pointer text-[#2721f5]'>Read More</p>
                    </div>
                    <div className='p-4'>
                    <Image src={Services} alt='sponser Logo'/>
                      <p className='mt-4'>July 10, 2023</p>
                      <h1 className='cursor-pointer text-[26px] font-medium hover:text-[#2721f5] my-4'>The standard Lorem Ipsum passage, used since the 1500s</h1>
    
                      <p className='cursor-pointer text-[#2721f5]'>Read More</p>
                    </div>
                    <div className='p-4'>
                    <Image src={Services} alt='sponser Logo'/>
                      <p className='mt-4'>July 10, 2023</p>
                      <h1 className='cursor-pointer text-[26px] font-medium hover:text-[#2721f5] my-4'>The standard Lorem Ipsum passage, used since the 1500s</h1>
    
                      <p className='cursor-pointer text-[#2721f5]'>Read More</p>
                    </div>
                    <div className='p-4'>
                    <Image src={Services} alt='sponser Logo'/>
                      <p className='mt-4'>July 10, 2023</p>
                      <h1 className='cursor-pointer text-[26px] font-medium hover:text-[#2721f5] my-4'>The standard Lorem Ipsum passage, used since the 1500s</h1>
    
                      <p className='cursor-pointer text-[#2721f5]'>Read More</p>
                    </div>
                    <div className='p-4'>
                    <Image src={Services} alt='sponser Logo'/>
                      <p className='mt-4'>July 10, 2023</p>
                      <h1 className='cursor-pointer text-[26px] font-medium hover:text-[#2721f5] my-4'>The standard Lorem Ipsum passage, used since the 1500s</h1>
    
                      <p className='cursor-pointer text-[#2721f5]'>Read More</p>
                    </div>
                  
                  </Carousel>
              </div>
            </div>
          </section>
    
          <Footer/>
        </>
      );
    }

export default Landing
