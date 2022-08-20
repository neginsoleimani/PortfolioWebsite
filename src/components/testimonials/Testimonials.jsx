import React from "react";
import "./testimonials.css";
import Avtr1 from "../../assets/avatar1.jpg";
import Avtr2 from "../../assets/avatar2.jpg";
import Avtr3 from "../../assets/avatar3.jpg";
import Avtr4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      avater: Avtr1,
      name: "Zeltzin Liwen",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate numquam, tenetur iste autem voluptatem expedita minima inventore facilis libero sit, accusantium modi adipisci? Ipsam, eaque! Nemo rem earum expedita minima.",
    },
    {
      avater: Avtr2,
      name: "Lihuén Ulloriaq",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate numquam, tenetur iste autem voluptatem expedita minima inventore facilis libero sit, accusantium modi adipisci? Ipsam, eaque! Nemo rem earum expedita minima.",
    },
    {
      avater: Avtr3,
      name: "Michaiah Pemphero Durán",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate numquam, tenetur iste autem voluptatem expedita minima inventore facilis libero sit, accusantium modi adipisci? Ipsam, eaque! Nemo rem earum expedita minima.",
    },
    {
      avater: Avtr4,
      name: "Feidlimid İlkay Abdullayev",
      review:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate numquam, tenetur iste autem voluptatem expedita minima inventore facilis libero sit, accusantium modi adipisci? Ipsam, eaque! Nemo rem earum expedita minima.",
    }
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
      >
        {data.map(({avater,name,review},index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avater} alt="client image" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
