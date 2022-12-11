import '../App.css';
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

function Contact() {

    const contactInfo = {
        email: 'email@email.com',
        phone: '(+351) 123 456 789',
        description:
          'Write some extra neeeded information here ??? blablablablabla blablablablabl abalbalbal blababl abaalbaa blal'
     };
    
     const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    
     const [error, setError] = useState(false);
     const [message, setMessage] = useState("");
    
     const handleAlerts = () => {
        if (error && message) {
          return <div className="alert alert-danger mt-4">{message}</div>;
        } else if (!error && message) {
          return <div className="alert alert-success mt-4">{message}</div>;
        } else {
          return null;
        }
      };
    
      const handleChange = (event) => {
        setFormdata({
          ...formdata,
          [event.currentTarget.name]: event.currentTarget.value,
        });
      };
    
     const submitHandler = (event) => {
        event.preventDefault();
        if (!formdata.name) {
          setError(true);
          setMessage("Name is required");
        } else if (!formdata.email) {
          setError(true);
          setMessage("Email is required");
        } else if (!formdata.subject) {
          setError(true);
          setMessage("Subject is required");
        } else if (!formdata.message) {
          setError(true);
          setMessage("Message is required");
        } else {
          setError(false);
          setMessage("You message has been sent!!!");
        }
      };    

  return (
    <section className="Contact" id="Contact">

            <section className="titleContact">
                <h1 className="display-4 mb-4">Let's talk!</h1>
            </section>

            <section className="sectionContact">

                <Row className="leftContact">
                    <Col lg="5" className="mb-5">
                        <h3 className="color_sec py-4">Don't like forms?</h3>
                        <address>
                        <b>Email:</b>{" "}
                        <a href={`mailto:${contactInfo.email}`}>
                            {contactInfo.email}
                        </a>
                        <br />
                        <br />
                        {contactInfo.hasOwnProperty("phone") ? (
                            <p>
                            <b>Phone:</b> {contactInfo.phone}
                            </p>
                        ) : (
                            ""
                        )}
                        </address>
                        <p>{contactInfo.description}</p>
                    </Col>
                </Row>

                <Row className="rightContact">
                    <Col lg="7" className="d-flex align-items-center">
                    <form id="contact-form" className="contact__form" onSubmit={submitHandler}>
                <Row>
                    <Col lg="6" className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="InputName"
                        placeholder="Your name"
                        onChange={handleChange}
                        value={formdata.name}
                        />
                    </Col>
                    <Col lg="6" className="form-group">
                        <input
                        type="email"
                        className="form-control"
                        id="InputEmail"
                        name="email"
                        placeholder="Email address"
                        onChange={handleChange}
                        value={formdata.email}
                        />  
                    </Col>
                    <Col lg="6" className="form-group">
                        <input
                        type="text"
                        className="form-control"
                        id="InputSubject"
                        name="subject"
                        placeholder="Subject"
                        onChange={handleChange}
                        value={formdata.subject}
                        />
                    <br /> 
                    </Col>
                </Row>

                <textarea
                      name="message"
                      id="InputMessage"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                      onChange={handleChange}
                      value={formdata.message}
                ></textarea>
                <Row>
                    <Col lg="12" className="form-group" id="submitContact">
                    <button
                        type="submit"
                        name="submit"
                        id="submit"
                        value="Submit"
                        className="btn button-6"
                    >
                        Send
                    </button>
                    </Col>
                </Row>
                </form>
                {handleAlerts()}
            </Col>
            </Row>
        </section>
    </section>
  );
}

export default Contact;
