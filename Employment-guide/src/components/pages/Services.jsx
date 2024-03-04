import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Exam from '../../Quiz-app/Exam.jsx';
import './Services.css'; // Import custom CSS for styling

function Services() {
  const values = [true];
  const [fullscreen, setFullscreen] = React.useState(true);
  const [show, setShow] = React.useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div className="quiz-page">
      <h1 className="quiz-title">Welcome to The SECP Quiz</h1>
      <p className="quiz-description">Test your knowledge and learn something new!</p>
      <div className="quiz-buttons">
        {values.map((v, idx) => (
          <Button key={idx} className="quiz-button" onClick={() => handleShow(v)}>
            Start Quiz
          </Button>
        ))}
      </div>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>The SECP Quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Exam />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Services;






// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Exam from '../../Quiz-app/Exam.jsx';
// //import QuizApp from '../../../Test/QuizApp.jsx';
// //import "../../../Test/index.scss";

// function Services() {
//   const values = [true];
//   const [fullscreen, setFullscreen] = useState(true);
//   const [show, setShow] = useState(false);

//   function handleShow(breakpoint) {
//     setFullscreen(breakpoint);
//     setShow(true);
//   }

//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       {values.map((v, idx) => (
//         <Button key={idx} className="me-2 mb-2" style={{ fontSize: '2rem', padding: '20px' }} onClick={() => handleShow(v)}>
//           Click to Start Quiz
//           {typeof v === 'string' && `below ${v.split('-')[0]}`}
//         </Button>
//       ))}
//       <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>THE SECP QUIZ</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Exam />
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default Services;