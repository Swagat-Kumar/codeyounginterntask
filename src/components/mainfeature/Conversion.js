import React from 'react';
import {Row,Col,InputNumber,Select} from 'antd';
import Answer from './Answer';
import './Conversion.css';
const {Option}=Select;

const Conversion = ({name}) => {
    const [amount,setAmount]=React.useState('');
    const [currency,setCurrency]=React.useState('INR');
    const [target,setTarget]=React.useState([]);
    const [exchangeRates,setExchangeRates]=React.useState({'rates':{}});
    const onCurrencyChange=(val)=>{
        setCurrency(val);
        console.log(val);
    }
    const onTargetChange=(val)=>{
        setTarget(val);
        console.log(val);
    }
    const API_KEY='0edfd455987d7473fc8cd7515e42c26c';
    const onChange=(val)=>{
        setAmount(val);
    }
    React.useEffect(()=>{
        fetch(`http://data.fixer.io/api/latest?access_key=${API_KEY}`).then(res=>res.json()).then(val=>{setExchangeRates(val);console.log(val);});
    },[]);
    return (
        <div>
            <Row justify='space-around' align='middle'>
                <Col span={8} className='middle'>
                    <div className="contain">
                        <InputNumber size='large' onChange={onChange} placeholder="Amount" min={0} bordered={false} style={{width:'50%',color:'white',marginBottom:'2em'}}/>
                        <p style={{color:'whitesmoke',marginBottom:'4em'}}>Enter the Amount and Select The Base Currency</p>
                        <Select
                        showSearch
                        style={{ width: '50%' }}
                        defaultValue="INR"
                        optionFilterProp="children"
                        onChange={onCurrencyChange}
                        >
                        <Option value="INR">Indian Rupees</Option>
                        <Option value="USD">US Dollars</Option>
                        <Option value="EUR">Euros</Option>
                        <Option value="CAD">Candian Dollars</Option>
                        <Option value="CHF">Swiss Franc</Option>
                        <Option value="GBP">British Pound Sterling</Option>
                        <Option value="JPY">Japanese Yen</Option>
                        <Option value="CNY">Chinese Yuan</Option>
                        <Option value="PKR">Pakistani Rupee</Option>
                        </Select>
                    </div>
                </Col>
                <Col span={8} className="middle">
                <div className="contain">
                        <h3 style={{color:'white',marginBottom:'4em'}}>Welcome {name}</h3>
                        <p style={{color:'whitesmoke',marginBottom:'4em'}}>Target Currency</p>
                        <Select
                        showSearch
                        mode='multiple'
                        style={{ width: '80%' }}
                        optionFilterProp="children"
                        onChange={onTargetChange}
                        >
                        <Option value="INR">Indian Rupees</Option>
                        <Option value="USD">US Dollars</Option>
                        <Option value="EUR">Euros</Option>
                        <Option value="CAD">Candian Dollars</Option>
                        <Option value="CHF">Swiss Franc</Option>
                        <Option value="GBP">British Pound Sterling</Option>
                        <Option value="JPY">Japanese Yen</Option>
                        <Option value="CNY">Chinese Yuan</Option>
                        <Option value="PKR">Pakistani Rupee</Option>

                        </Select>
                    </div>
                </Col>
                <Col span={8}>
                <p style={{color:'whitesmoke',marginBottom:'4em',marginTop:'20vh'}}>Target Amounts</p>
                    <Answer currency={currency} target={target} amount={amount} exchangeRates={exchangeRates}/>
                </Col>
            </Row>
        </div>
    )
}

export default Conversion
