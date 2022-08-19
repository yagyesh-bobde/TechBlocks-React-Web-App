import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ContactUs() {

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Not Connected to the Database')
    }
    return (
        <div className="container w-75">
            <div className="row text-center" style={{ fontFamily:'monospace'}}>
                <h3>Contact Us</h3>
            </div>
            <div className="m-auto">
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formtext">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Subject" />
                    </Form.Group>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    
                    <Button type='submit' variant="primary mt-4" >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
        
    );
}

export default ContactUs;