import React from 'react'

const Footer = () => {
  return (
    <div className='container text-center bg-dark footer' style={{ color: 'white', fontFamily: 'monospace' , paddingTop: '2.5%'}}>
      <div className='row'>
        <h4>
          TechBlocks
        </h4>
      </div>
      <div className="row">
        <div style={{ width: '100%', margin: 'auto auto !important', padding: '0 0 !important'}} className='row'>
          <div className="col-sm-12 col-md-6">
            <img src='https://img.freepik.com/premium-vector/blockchain-logo-concept-modern-technology-color-cube-logotype-cryptocurrency-bitcoin-label-digital-money-icon-illustration_158587-20.jpg?w=2000' alt='' 
            style={{ width: '50%'}} />
          </div>
          <div className="col-sm-12 col-md-6" style={{ display: 'flex', color: 'white !important', margin:'auto auto' }} >
            <div className="row" style={{ margin: '0 0', justifyContent: 'center' }}>
              <div className='col-sm-12 col-md-6 my-4 mx-0'>
                <h4>
                  Academy
                </h4>
                <u>Tutorials</u><br />
                <u>Articles</u><br />
                <u>Resources</u><br />
              </div>

              <div className='col-sm-12 col-md-6 my-4 mx-0'>
                <h4>
                  Exchange
                </h4>
                <u>Currency Calculator</u><br />
                <u>Live Exchange Rates</u><br />
                <u>Tabular Data</u><br />
              </div>

              <div className='col-sm-12 col-md-6 my-4 mx-0'>
                <h4>
                  Statistics
                </h4>
                <u>Blockchain Data</u><br />
                <u>Pooling Data</u><br />
                <u>Graphical Data</u><br />
              </div>
            </div>
                  
          </div>
        </div>
      </div>


      <div className="row">
        <div style={{ width: '100%', margin: '1.5% 0' }} className='footer_items_div'>
          <div style={{ display: 'flex', justifyContent: 'space-evenly', color: 'white !important' }} >
            <a href='https://www.linkedin.com/in/bobde-yagyesh/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BUieEc2dVTSaTeQ4HpxrMyw%3D%3D' target='_blank'>Home</a>

            <a href='https://github.com/yagyesh-bobde' target='_blank'>Academy</a>
            <a href='https://twitter.com/bobde_yagyesh' target='_blank'>Contact Us</a>
            <a href='https://www.instagram.com/bobde_yagyesh/' target='_blank'>FAQs</a>
          </div>

        </div>
        <div style={{ color: 'grey', marginTop: '1%' }}>
          <span >TechBlocks @ 2022</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
