import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';
import './gallery.css';

const Gallery = () => {

  const galleryLenght = 15;
  const images = [];

  for(let i = 1; i <= galleryLenght; i ++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }
  
  return (
    <>
      <Header title='Our Gallery' image={HeaderImage}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quisquam quasi, sapiente facilis consequuntur vitae repudiandae, maxime iste vel dolorum adipisci. Accusantium asperiores porro odit repudiandae consequuntur repellendus! Ab, sint.</p>
      </Header>
      <section className="gallery">
        <div className="container gallery_container">
          {
            images.map((image, index) => {
              return<article key={index}>
                <img src={image} alt={`Gallery Img ${index + 1}`}/>
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery