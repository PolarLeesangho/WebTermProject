import React, { useEffect, useRef , useState} from 'react';
import '../css/MainBody.css'
const MainBody = () => 
{
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const carousel = carouselRef.current;
        const slides = carousel.querySelectorAll('.carousel-slide');
        const slideWidth = slides[0].offsetWidth;
        const slideCount = slides.length;

        let currentIndex = 0;

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slideCount;
            const translateX = -currentIndex * slideWidth;
            carousel.style.transform = `translateX(${translateX}px)`;
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
        };

    const interval = setInterval(nextSlide, 3000);

    return () => {
        clearInterval(interval);
    };
    }, []);

  return (
    <div className="carousel">
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-slide">
          <img src="https://img.pizzaalvolo.co.kr/uploads/tmpF1A2.jpg" alt="쏘핫피자 레시피 변경" />
        </div>
        <div className="carousel-slide">
          <img src="https://img.pizzaalvolo.co.kr/uploads/tmp88A9.jpg" alt="이륙데이 이벤트" />
        </div>
        <div className="carousel-slide">
          <img src="https://img.pizzaalvolo.co.kr/uploads/tmp605A.jpg" alt="모바일 교환권 사용안내" />
        </div>
        <div className="carousel-slide">
          <img src="https://img.pizzaalvolo.co.kr/uploads/tmpEDBA.jpg" alt="베스트메뉴" />
        </div>
      </div>
      <div className="carousel-dots">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}


export default MainBody;

