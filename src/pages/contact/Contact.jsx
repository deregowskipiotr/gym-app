import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import './contact.css';

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quia
          saepe natus hic debitis at maiores obcaecati repudiandae pariatur
          ducimus repellendus! Saepe, laborum?
        </p>
      </Header>
      <section className="contact">
        <div className="contact contact_container">
          <div className="contact_wrapper">
            <a href="piotr@pisz.pl" target="blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href="https://www.messanger.com" target="blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href="https://www.whatsapp.com" target="blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact