import Image from '../images/values.jpg';
import SectionHead from './SectionHead';
import { GiCutDiamond } from 'react-icons/gi';
import { values } from '../data';
import Card from '../UI/Card';

const Values = () => {
  return (
    <section className='values'>
      <div className="container values_container">
        <div className="values_left">
          <div className="values_image">
            <img src={Image} alt='Values Pic'/>
          </div>
        </div>
        <div className="values_right">
          <SectionHead icon={<GiCutDiamond />} title='Values' />
          <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Explicabo sequi praesentium 
            aut maxime culpa distinctio soluta delectus. 
          </p>
          <div className='values_wrapper'>
            {
              values.map(({id, icon, title, desc}) => {
                return (
                <Card className='values_value' key={id}>
                  <span>{icon}</span>
                  <h3>{title}</h3>
                  <small>{desc}</small>
                </Card>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values