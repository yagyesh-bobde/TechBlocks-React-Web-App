import React, { useContext, useEffect, useRef, useState } from 'react'
import { exchangeContext } from '../../context/exchangeState'

const CalForm = () => {
    const { getConversion, value, currencies } = useContext(exchangeContext);
    const [formValues, setformValues] = useState({
        currency: 'USD',
        value: 500
    });
    
    // TODO: DECLARE A CONSTANT FOR THE CONVERSION DISPLAY
    const [display, setdisplay] = useState(false);
    
    
    // TODO: CHANGE THE VALUE 
    useEffect(() => {
    }, [value]);
    
    const handleChange = (e) => {
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
        console.log(formValues)
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        getConversion(formValues.currency, formValues.value)
        setdisplay(true)
    }

    const handleBack = (e) => {
        e.preventDefault()
        setdisplay(false)
    }
  return (
    <div className='cal-form'>
        <div className="container">
        <form >
            <div className="row">
                {/* TODO: AMOUNT  */}
                    <div className="col-4">
                          <label htmlFor='currency' className="input-group" style={{ alignItems: 'center' }} >Amount</label >
                          <input name='value' onChange={(e) => handleChange(e)} style={{ display: 'inline-block', padding: '0 2.5%' }} type="number" className="form-control" aria-label="Input group example" aria-describedby="btnGroupAddon" value={formValues.value} />
                    </div>

                    {/* TODO: CURRENCIES  */}
                    <div className="col-4">
                        <label htmlFor='Value' className="input-group" style={{ alignItems: 'center' }} >
                            From
                          </label>
                          <select name='currency'  onChange={(e) => handleChange(e)} style={{ display: 'inline-block', padding: '0 2.5%', minHeight: '40px' }} type="text" className="form-control" aria-label="Input group example" aria-describedby="btnGroupAddon" defaultValue={'USD'} >
                              {currencies.map(curr => <option style={{ border:'1px solid black'}} key={curr} value={curr}>{curr}</option>)}

                          </select>
                           
                        
                    </div>

                {/* TODO : TO BITCOIN */}
                        <div className="col-4">
                            <label htmlFor='converted-to'>To Bitcoin</label>
                            <div className="input-group" style={{ alignItems: 'center' }} >
                                <div className="input-group-prepend" style={{ maxHeight: '40px' }}>
                                  <div className="input-group-text" id="btnGroupAddon" style={{ fontSize: "1.5rem" }}>
                                      <i style={{ padding: '5%' }} className="fa fa-bitcoin" ></i> 
                                    </div>
                                </div>
                            </div >
                        </div>
            </div>
                    </form>
        <div className="row">
            {
                (display) && 
                <div className='col-6' style={{ justifyContent: 'center' , textAlign: 'left', marginTop: '2.5%'}}>
                    <p style={{ color: 'grey', fontWeight: '700'}}>{formValues.value} {formValues.currency} =</p>
                            {(value !== 0) &&  <h4> {value} BTC</h4>}
                </div>
            }                    
        </div>
            <div className="row" style={{ justifyContent: 'space-between', textAlign: 'center', marginTop: '2.5%'}}>
                  <div className="col-6" style={{ margin: '2.5% 5%', display: 'flex', alignItems: 'center', backgroundColor: '#aef1ff', borderRadius: '25px 25px'}}>
                      <i style={{ maxWidth: '20%'}} className="fa-solid fa-circle-info"></i>
                      <span style={{ fontSize: '0.75rem'}}>We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money. Check send rates</span>
                </div>
                <div className="col-4" style={{ margin: '2.5% 0'}}>
                     {!(display) && <button style={{ fontSize: '1.25rem'}} onClick={(e) => handleSubmit(e) } type='submit' className='btn btn-primary'>
                    Convert
                </button>}
                {(display) && 
                          <button style={{ fontSize: '1.25rem' }} onClick={(e) => handleBack(e)}  className='btn btn-primary'>
                              {'<'}
                          </button>
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CalForm

    