import React, {  } from 'react'
import img from '../../assets/images/img-1.png'
import { Button } from 'react-bootstrap'

const Home = () => {
  const elements = [
    {
      image: img,
      h3: '',
      h1: '',
      p: ''
    },
    {
      image: img,
      h3: '',
      h1: '',
      p: ''
    },
    {
      image: img,
      h3: '',
      h1: '',
      p: ''
    }
  ]
  // const vidref = createRef()
  // useEffect(() => {
  //   vidref.current.play()
  // }, []);

  return (

    <div className='bg-home' style={{  }}>
      <div className="container">

        <div className='row' style={{ marginTop: '25%', display:'flex',justifyContent:'space-evenly'}}>
          
          <div className="col-6 home">
            <h3>Learn</h3>
            <h1>BlockChain</h1>
            <p>Best resources to get you started in your blockchain journey.</p>
            
          <div className="row" style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5% !important'}}>
            <div className="col-6">
                <Button style={{ marginTop: '5%'}} variant="primary">TechBlock Academy</Button>
            </div>
          </div>
            
          </div>
          
          {/* <video ref={vidref} autoplay muted loop  plays-inline className='video' >
            <source src={bg} type="video/mp4" />
          </video>
       */}

       {/* LEFT & RIGHT BUTTONS FOR THE CAROUSEL */}
       <div className='btn btn-secondary button_home-style button_right'>
        <span>
        {'>'}
        </span>
       </div>
       <div className='btn btn-secondary button_home-style button_left'>
        <span>{'<'}</span>
       </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home;
