import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Autoplay, EffectCube, Pagination } from 'swiper';
import One from '../data/one.jpg';
import Two from '../data/two.jpg';
import Three from '../data/three.jpg';
import Four from '../data/four.jpg';

import UseStyles from '../style';

const Sliders = () => {
  const classes = UseStyles();

  return (
    <div
      style={{
        width: '800px',
      }}
    >
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        modules={[Autoplay, EffectCube, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='sliderInfo'>info</div>

          <img className={classes.picStyles} width='200px' src={One} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='sliderInfo'>info</div>

          <img className={classes.picStyles} width='200px' src={Two} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='sliderInfo'>info</div>

          <img className={classes.picStyles} width='200px' src={Three} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='sliderInfo'>info</div>
          <img className={classes.picStyles} src={Four} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliders;
