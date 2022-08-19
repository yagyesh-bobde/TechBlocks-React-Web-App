import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../assets/images/img-5.jpg"
import { pages } from '../../assets/data/pages';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
    <Carousel style={{ }} >
      
     {pages.map(page => {
      return (
        <Carousel.Item>
          <img
          style={{ height: '100vh'}}
            className="d-block w-100"
            src={img1}
            alt={page.title}
          />
          <div className="col-sm-12 col-md-6 m-auto home_title_div text-center" style={{ color: 'white' }}>
            
            <h1 style={{ color: 'gold' , fontSize: '3rem'}}>{page.title}</h1>
            <u>
              <p >{page.desc}</p>
            </u>
            <div className='row w-25 m-auto'>
              <Button onClick={() => navigate(page.link) } variant="dark" className='d-inline' style={{ justifyContent: 'center', alignItems: 'center' }}>
                <i className="fa-solid fa-arrow-up-right-from-square mx-2" style={{ width: '5%' }}></i>
                {page.btn}
              </Button>
            </div>
          </div>
        </Carousel.Item>
        
      )
     })}
      </Carousel>

      
    </div>
  );
}

export default Home;