import React, { useState } from 'react'
import { content } from '../../assets/data/info'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Academy = () => {
    const [search, setsearch] = useState('');

    // TODO: HANDLE SEARCH
    const handleSearch= (e) => {
        e.preventDefault()
        alert('Search Functionality is not yet worked on because the data is static!')  
    }


    // TODO: ATTACH REFs To Topics & Connect with Table of connects
    const handleClick = () => {
        
    }

  return (
    <div className='exchange_page_parent'>
          <div className="academy_page_forum  ">
        <h1>
          <u>Block Chain Academy</u> 
        </h1>
        <span style={{ fontWeight: '700'}}>
            Everything to get you started in your blockcahin journey is right here!
        </span>
      </div>

        <div className="container academy_container" style={{ display:'flex', justifyContent:'flex-end', textAlign: 'center'}}>
            <div className="col-sm-12 col-md-4 content_div ">
                
                
                    <h4>Table of Content</h4>
                    {content.map(item => {
                        return <li key={item.title} onClick={handleClick} className='content_list_item'>
                        {item.title}
                        </li>
                    })}
                    
               
                  <div className="row">
                      <Form onSubmit={(e) => handleSearch(e)}>
                          <Form.Control
                              type="search"
                              placeholder="Search"
                              className="me-2"
                              aria-label="Search"
                              onChange={(e) => setsearch(e.target.value)}
                              value={search}
                          />
                          <Button type='submit' variant="outline-success">Search</Button>
                      </Form>
                  </div>
            </div>
             
            <div className="col-sm-12 col-md-8 text-center">

                {content.map(item => {
                    return (
                        <div key={item.title}>
                            <h1>
                                {item.title}
                            </h1>
                            <p>
                                {item.para}
                            </p>
                        {(item.img.length !==0) ? 
                        <div>
                            {item.img.map(image => {
                                return <div key={image.url}>
                                    <h2>{image.title}</h2>
                                    <div>
                                        <img style={{ width:'100%', maxHeight: '50vh'}} src={`${image.url}`} alt={image.title} />
                                    </div>
                                </div>
                            })}
                        </div>: ''}
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Academy