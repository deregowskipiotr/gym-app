import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_4.jpg';
import Card from '../../UI/Card';
import { plans } from '../../data';
import './plans.css';

const Plans = () => {
  return (
    <>
      <Header title='Membership Plans' image={HeaderImage}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam eum laudantium laborum veritatis labore illum necessitatibus voluptates reprehenderit sequi, suscipit, tenetur voluptate dolorem corporis. Minima ipsum animi excepturi vitae?</p>
      </Header>
      <section className="plans">
        <div className="container plans_container">
          {
            plans.map(({id, name, desc,price,features}) => {
              return <Card key={id} className='plan'>
                <h1>{name}</h1>
                <small>{desc}</small>
                <h3>{`$${price} /month`}</h3>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index) => {
                    return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                  })
                }
                <button className='btn lg'>Choose Plan</button>
              </Card>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans