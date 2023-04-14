import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
  return (
    <section>
      <div className="container notfound_container">
        <h1>Ups... something went wrong</h1>
        <Link to='/' className='btn'>Go Home</Link>
      </div>
    </section>
  )
}

export default NotFound