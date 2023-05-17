import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Thumbs, Autoplay, FreeMode } from 'swiper';
import { useState, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/thumbs';
import "swiper/css/free-mode";

export default function TestimonialSection() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // set window size to display different menu icon behaviour
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    // add event listener for window resize
    window.addEventListener("resize", handleResize);

    // call handleResize initially
    handleResize();

    // remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="testimonial" className="spacer">
      <div className="testimonial-section">
        {isSmallScreen && (
          <>
                  <div className="user-saying small">
          <Swiper
            className="testimonial"
            direction="vertical"
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false 
            }}
            spaceBetween={10}
            slidesPerView={1}
            freeMode={true}
            grabCursor={true}
            watchSlidesProgress={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Working with Carmina has been an incredible journey of self-discovery and growth. She created a safe and enjoyable environment where I had so much fun while gaining the confidence to shine as an actor."
                </p>
                <div className="name">-Stacey Adams-</div>
                <div className="designation">Student</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Collaborating with Carmina as a scriptwriter was an absolute pleasure. Her creative insights and attention to detail brought our project to life in ways I couldn't have imagined. I highly recommend working with her."
                </p>
                <div className="name">-Gabi Rayleigh-</div>
                <div className="designation">Writer</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Performing alongside Carmina in a theatrical production was an enriching experience. Her passion, dedication, and exceptional talent brought a magical energy to the stage."
                </p>
                <div className="name">-Ben Layenski-</div>
                <div className="designation">Actor</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Carmina's guidance and support took my acting skills to a whole new level. She helped me break through a plateau, deepening my connection with characters and bringing authenticity to my performances."
                </p>
                <div className="name">-Lucy Traton-</div>
                <div className="designation">Student</div>
              </div>
            </SwiperSlide>
         </Swiper>
        </div>
          </>
        )}
        {!isSmallScreen && (
          <>
          <div className="testi-user-img">
        <Swiper
        className="gallery-thumbs"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false 
        }}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay, Thumbs, FreeMode]}
      >
            <SwiperSlide>
              <img className="u3" src="https://res.cloudinary.com/dtfxpyxoc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/gallery_acting/kurstulwjwglp5h3pnpz" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="u1" src="https://res.cloudinary.com/dtfxpyxoc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/gallery_acting/ifidxpri1bsjvhaxnkqp" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="u2" src="https://res.cloudinary.com/dtfxpyxoc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/gallery_acting/diqoxfrqzdckfaladbly" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="u4" src="https://res.cloudinary.com/dtfxpyxoc/image/upload/c_limit,f_jpg,fl_lossy.any_format.preserve_transparency.progressive,h_1600,pg_1,q_auto,w_1600/v1/gallery_acting/icakisjngtvjguwfybra" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="user-saying">
          <Swiper
            className="testimonial"
            direction="vertical"
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
<SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Working with Carmina has been an incredible journey of self-discovery and growth. She created a safe and enjoyable environment where I had so much fun while gaining the confidence to shine as an actor."
                </p>
                <div className="name">-Stacey Adams-</div>
                <div className="designation">Student</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Collaborating with Carmina as a scriptwriter was an absolute pleasure. Her creative insights and attention to detail brought our project to life in ways I couldn't have imagined. I highly recommend working with her."
                </p>
                <div className="name">-Gabi Rayleigh-</div>
                <div className="designation">Writer</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Performing alongside Carmina in a theatrical production was an enriching experience. Her passion, dedication, and exceptional talent brought a magical energy to the stage."
                </p>
                <div className="name">-Ben Layenski-</div>
                <div className="designation">Actor</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quote">
                <img className="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt="" />
                <p>
                  "Carmina's guidance and support took my acting skills to a whole new level. She helped me break through a plateau, deepening my connection with characters and bringing authenticity to my performances."
                </p>
                <div className="name">-Lucy Traton-</div>
                <div className="designation">Student</div>
              </div>
            </SwiperSlide>
         </Swiper>
        </div>
        </>
        )}
        
    </div>
    </section>
    )
}