import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import flightgif from "../assets/airport.gif";

export const FlightSearchcard = () => {
  return (
    <div>
      <Card className='card-design'>
        <Card.Body>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <Card.Subtitle className='mb-2 text-muted'>
                Where would you want to go?
              </Card.Subtitle>
              <Card.Title className='fs-1'>Book a Flight</Card.Title>
              <img className='flight-image' src={flightgif} alt='' />
            </div>

            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>From</Form.Label>
                  <Form.Control type='text' placeholder='Batticaloa' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>To</Form.Label>
                  <Form.Control type='text' placeholder='Jaffna' />
                </Form.Group>
                <Form.Group className='mb-2' controlId='date'>
                  <Form.Label>Date</Form.Label>
                  <Form.Control type='date'/>
                </Form.Group>
                <Button className='w-100 btn-color' variant='primary' type='submit'>
                  Search
                </Button>
              </Form>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FlightSearchcard;
