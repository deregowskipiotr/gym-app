import { useState } from "react";
import SectionHead from "./SectionHead";
import { ImQuotesLeft} from 'react-icons/im';
import Card from "../UI/Card";
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from "react-icons/hi";
import { testimonials } from "../data";

const Testimonials = () => {

  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonialsHandler = () => {
    setIndex(prev => prev - 1);

    if(index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };

  const nextTestimonialsHandler = () => {
    setIndex(prev => prev + 1);

    if(index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className="testimonials">
      <div className="container testimonials_container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials_head"
        />
        <Card className="testimonials">
          <div className="testimonials_avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonials_quote">{`"${quote}"`}</p>
          <h3>{name}</h3>
          <small className="testimonials_title">{job}</small>
        </Card>
        <div className="testimonials_btn-container">
          <button
            className="testimonials_btn"
            onClick={prevTestimonialsHandler}
          >
            <HiOutlineArrowCircleLeft />
          </button>
          <button
            className="testimonials_btn"
            onClick={nextTestimonialsHandler}
          >
            <HiOutlineArrowCircleRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials