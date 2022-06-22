import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';
// import One from '../data/one.jpg';
// import Two from '../data/two.jpg';
// import Three from '../data/three.jpg';
// import Four from '../data/four.jpg';
const Sliders = ({ datas }) => {
  return (
    <div className='slidersBox'>
      <Swiper
        autoplay={true}
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={false}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className='mySwiper'
      >
        {datas.map((data) => (
          <SwiperSlide key={data.pid}>
            <div className='info'>
              <h1>{data.title}</h1>
              <ul>
                <li>{data.details.d1}</li>
                <li>{data.details.d2}</li>
                <li>{data.details.d3}</li>
              </ul>
              <div className='links'>
                <a href={data.links.source} target='_blank' rel='noreferrer'>
                  live
                </a>
                <a
                  href={data.links.livePreview}
                  target='_blank'
                  rel='noreferrer'
                >
                  Source
                </a>
              </div>
            </div>
            <img className='picStyles' src={data.poster} alt='' />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className='info'>
            <h1>Project title</h1>
            <ul>
              <li>one</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
            <div className='links'>
              <a href='.'>live</a>
              <a href='.'>Source</a>
            </div>
          </div>
          <img className='picStyles' src={One} alt='' />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className='info'>
            <h1>Project title</h1>
            <ul>
              <li> {data.title} </li>
              <li>Two</li>
              <li>Three</li>
            </ul>
            <div className='links'>
              <a href='.'>live</a>
              <a href='.'>Source</a>
            </div>
          </div>
          <img className='picStyles' src={Two} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='info'>
            <h1>Project title</h1>
            <ul>
              <li>one</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
            <div className='links'>
              <a href='.'>live</a>
              <a href='.'>Source</a>
            </div>
          </div>
          <img className='picStyles' src={Three} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <div className='info'>
            <h1>Project title</h1>
            <ul>
              <li>one</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
            <div className='links'>
              <a href='.'>live</a>
              <a href='.'>Source</a>
            </div>
          </div>
          <img className='picStyles' src={Four} alt='' />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Sliders;
