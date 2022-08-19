import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardItem({ page}) {
    return (
        <Card className='services_each_card text-center my-4'>
            <Card.Img variant="top" src={`${page.img}`} style={{ maxHeight: '25vh' }}/>
            <Card.Body>
                <Card.Title>{page.title}</Card.Title>
                <Card.Text>
                    {page.desc}
                </Card.Text>
                <Button variant="primary" className='d-flex' style={{ justifyContent: 'center', alignItems:'center'}}>
                    <i className="fa-solid fa-arrow-up-right-from-square mx-2" style={{ width:'5%'}}></i>
                    {page.btn}
                    </Button>
            </Card.Body>
        </Card>
    );
}

export default CardItem;