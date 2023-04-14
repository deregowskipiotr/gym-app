import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import './about.css';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
          labore ut amet debitis fugiat corporis non ex atque.
        </p>
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story Pic" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              odio libero iste laudantium architecto tenetur nostrum delectus
              minima quos. Quae magni magnam voluptate inventore! Ab sit eos
              accusantium laudantium error. Soluta pariatur repellat tempore
              saepe officiis adipisci laboriosam quidem? Ad est perspiciatis,
              blanditiis laboriosam numquam ab laudantium voluptatum ipsa veniam
              explicabo. Nobis voluptatum recusandae quasi inventore laudantium
              impedit modi eligendi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              perferendis molestias a quo quis eius, quas nemo, impedit
              distinctio doloribus aliquam eos minus, velit illum enim iusto
              provident corporis. Esse.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              voluptas minus placeat, repellendus excepturi consectetur ipsa
              quod, laborum nesciunt reprehenderit porro! Ipsa recusandae veniam
              soluta pariatur illum, veritatis repudiandae. Omnis.
            </p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              odio libero iste laudantium architecto tenetur nostrum delectus
              minima quos. Quae magni magnam voluptate inventore! Ab sit eos
              accusantium laudantium error. Soluta pariatur repellat tempore
              saepe officiis adipisci laboriosam quidem? Ad est perspiciatis,
              blanditiis laboriosam numquam ab laudantium voluptatum ipsa veniam
              explicabo. Nobis voluptatum recusandae quasi inventore laudantium
              impedit modi eligendi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              perferendis molestias a quo quis eius, quas nemo, impedit
              distinctio doloribus aliquam eos minus, velit illum enim iusto
              provident corporis. Esse.
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision Pic" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Mission Pic" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              odio libero iste laudantium architecto tenetur nostrum delectus
              minima quos. Soluta pariatur repellat tempore saepe officiis
              adipisci laboriosam quidem? Ad est perspiciatis, blanditiis
              laboriosam numquam ab laudantium voluptatum ipsa veniam explicabo.
              Nobis voluptatum recusandae quasi inventore laudantium impedit
              modi eligendi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              perferendis molestias a quo quis eius.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              voluptas minus placeat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About