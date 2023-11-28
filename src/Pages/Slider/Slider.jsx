import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import slider1 from "../../assets/slider/slide1.jpg"
import slider2 from "../../assets/slider/slide2.jpg"
import slider3 from "../../assets/slider/slide3.jpg"
import 'swiper/css/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';


const Slider = () => {
    return (
        <div className='mt-28'>
            <Swiper
                className='relative group'
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation ={{
                    nextEl:".button-next-slide",
                    prevEl:".button-prev-slide",
                }}
                >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full' src={slider1} alt="" />
                        <div className='absolute top-[25%] left-[8rem] space-y-4'>
                            {/* <h2 className='uppercase font-bold text-xl'>Medical Center</h2> */}
                            <TypeAnimation
                            sequence={[
                                'Medical Center for Men',
                                1000,
                                'Medical Center for Women',
                                1000,
                                'Medical Center for Child',
                                1000,
                                'Medical Center for Old',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                            classname="font-bold"
                            />
                            <div className='divider divider-accent'></div>
                            <p className='text-6xl uppercase'>Your Health <br /><span className='text-cyan-400 font-bold'> is our priority</span></p>
                            <button className='bg-cyan-400 px-4 py-2 text-white font-bold uppercase text-xl '>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative'>
                        <img className='w-full' src={slider2} alt="" />
                        <div className='absolute top-[25%] left-[8rem] space-y-4'>
                            {/* <h2 className='uppercase font-bold text-xl'>Online Support</h2> */}
                            <TypeAnimation
                            sequence={[
                                'ONLINE SUPPORT 24/7',
                                1000,
                                'ONLINE CONSULTATIONS',
                                1000,
                                'ONLINE DOCTOR',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                            classname="font-bold"
                            />
                            <div className='divider divider-accent'></div>
                            <p className='text-6xl uppercase'>Need Help! <br /><span className='text-cyan-400 font-bold'> We're Online</span></p>
                            <button className='bg-cyan-400 px-4 py-2 text-white font-bold uppercase text-xl '>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative'>
                        <img className='w-full' src={slider3} alt="" />
                        <div className='absolute top-[25%] left-[8rem] space-y-4'>
                            {/* <h2 className='uppercase font-bold text-xl'>Personal Consultation</h2> */}
                            <TypeAnimation
                            sequence={[
                                'PERSONAL CONSULTATION',
                                1000,
                                'PERSONAL MEDICATION',
                                1000,
                                'PERSONAL PORTFOLIO CHECKER',
                                1000,
                            ]}
                            speed={50}
                            style={{ fontSize: '2em' }}
                            repeat={Infinity}
                            classname="font-bold"
                            />
                            <div className='divider divider-accent'></div>
                            <p className='text-6xl uppercase text-cyan-400 font-bold'>Doctor <br />support </p>
                            <button className='bg-cyan-400 px-4 py-2 text-white font-bold uppercase text-xl '>Read More</button>
                        </div>
                    </div>
                </SwiperSlide>

                <div className='button-next-slide absolute top-[50%] z-10 w-[40px] h-[40px] bg-black grid place-content-center text-white group-hover:left-0 -left-[23rem] duration-500'>
                    <FaArrowLeft></FaArrowLeft>
                </div>
                <div className='button-prev-slide absolute top-[50%] z-10 w-[40px] h-[40px] bg-black grid place-content-center text-white group-hover:right-0 -right-[23rem] duration-500'>
                    {/* {" "} */}
                    <FaArrowRight></FaArrowRight>
                </div>
                </Swiper>
        </div>
    );
};

export default Slider;