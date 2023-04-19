import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import 'swiper/css/controller';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from 'swiper';
import { memo, useEffect, useRef } from "react";
import Backdrop from "./Backdrop";
import Poster from "./Poster";

const NetflixSlider = ({dataList,type,datatype}) => {
    const swiperRef = useRef();
    return ( 
        <Swiper
        modules={[Pagination, A11y]}
        slidesPerView="auto"
        spaceBetween={10}
        onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
        }}>
            {dataList?.map(item => (
                <SwiperSlide key={item.id}>
                    {
                    type=='backdrop'? 
                    <Backdrop data={item} datatype={datatype} />
                    :
                    <Poster data={item} datatype={datatype}/>
                    }
                </SwiperSlide>
            ))}
            <button
            className='absolute left-0 top-[50%] translate-y-[-50%] z-40' 
            onClick={() => swiperRef.current?.slidePrev()}
            >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="max-[500px]:w-10 max-[500px]:h-10 w-14 h-14">
                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                    </svg>

            </button>
            <button
            className='absolute right-0 top-[50%] translate-y-[-50%] z-40' 
            onClick={() => swiperRef.current?.slideNext()}
            >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="max-[500px]:w-10 max-[500px]:h-10 w-14 h-14">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                    </svg>
            </button>
        </Swiper>
    );
}

export default memo(NetflixSlider);