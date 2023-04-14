import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from "react-icons/ai";
import Card from '../UI/Card';

const FAQ = ({question, answer}) => {

  const [isAnswerShowing, setIsAnswerShowing] = useState(false);

  return (
    <article className="faq" onClick={() => setIsAnswerShowing(prev => !prev)}>
      <Card className='faq_card'>
        <h4>{question}</h4>
        <button className="faq_icon">
          {
            isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
        </button>
        { isAnswerShowing && <p>{answer}</p> }
      </Card>
    </article>
  );
}

export default FAQ