import axios from 'axios';
import React, { useEffect ,useState} from 'react';
import { Container, Row,Col } from 'reactstrap';
import { ElementStyle } from '../assets/styles/GlobalStyles';
import Layout from './Layout';
import { List } from 'reactstrap';
import {IoMdArrowBack} from 'react-icons/io'
import { useHistory } from 'react-router-dom';
export default function CountryProfile(props){
    const[data,setData] = useState(null)
    const history =useHistory()
    useEffect(()=>{
        fetch()
        async function fetch(){
            let res = await axios.get(`https://restcountries.eu/rest/v2/alpha/${props.match.params.name}?fields=name;capital;population;region;nativeName;subregion;currencies;languages;topLevelDomain;flag;borders`);
            setData(res.data)
        }
    },[props.match.params.name])
    return(
            <Layout  {...props}>
                {data ?
                <Container style={{    padding: "0 2rem"}}>
                    <Row style={{    padding: "3.5rem 0"}}>
                        <Col xs={"auto"}>
                        <ElementStyle>
                            <button className="button" onClick={()=>history.push('/')}><IoMdArrowBack/> Back</button>
                        </ElementStyle>
                        </Col>
                    </Row>
                    <div >
                    <Row>
                        <Col xs={12} md={6}>
                            <img alt="country" height="280" className="profileImage" src={data.flag} />
                        </Col>
                        <Col xs={12} md={6}>
                            <Container>
                                <Row style={{    paddingBottom: "1rem"}}>
                                    <Col><h4>{data.name}</h4></Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={6}>
                                        <List type="unstyled">
                                            <li>Native Name: <span className="cardSubTitleProp">{data.nativeName}</span></li>
                                            <li>Population: <span className="cardSubTitleProp">{data.population.toString().replace(/\d(?=(?:\d{3})+$)/g, '$&.')}</span></li>
                                            <li>Region: <span className="cardSubTitleProp">{data.region}</span></li>
                                            <li>Sub Region: <span className="cardSubTitleProp">{data.subregion}</span></li>
                                            <li>Capital: <span className="cardSubTitleProp">{data.capital}</span></li>
                                        </List>
                                    </Col>
                                    <Col xs={12} md={6}>
                                    <List type="unstyled">
                                            <li>Top Level Domain: <span className="cardSubTitleProp">{data.topLevelDomain}</span></li>
                                            <li>Currencies: {data.currencies.map((currency,i)=>{
                                                return <span className="cardSubTitleProp" key={i}>{currency.code} {(i > 0 && i !== data.currencies.length) ? ", " :""}</span>
                                            })}</li>
                                            <li>languages: {data.languages.map((lang,i)=>{
                                                return <span className="cardSubTitleProp" key={i}>{lang.name} {(i > 0 && i !== data.languages.length) ? ", " :""}</span>
                                            })}</li>
                                    </List>
                                    </Col>
                                </Row>
                                <Row style={{    padding: "3.5rem 0"}}>
                                    <Col xs={12} md={"auto"}><p>Border Countries</p></Col>
                                        {
                                            data.borders.map((border,i)=>{
                                                return<Col md={"auto"} xs={4} >
                                                    <div style={{width:"fit-content",    padding: "5px"}}>

                                                <ElementStyle>
                                                    <button className="button" onClick={()=>{
                                                        history.push({pathname:border})
                                                    }}key={i}>{border}</button>  
                                                </ElementStyle>
                                                </div>                             
                                                </Col>      
                                            })
                                        }
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    </div>
                </Container>:null}
            </Layout>
    )
}