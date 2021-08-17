import React from 'react'
import { useHistory } from 'react-router-dom';
import {
    Card, CardImg, CardTitle, CardBody,
     CardSubtitle,
} from 'reactstrap';
import { ElementStyle } from '../assets/styles/GlobalStyles';
export default function CountryCard(props) {
    const history = useHistory();
    return (
        <React.Fragment>
            <div className="countrycard" onClick={(()=>history.push(`/country/${props.data.alpha3Code}`))}>
            <ElementStyle>
            <Card >
                <CardImg top height="140" style={{objectFit: "cover",width:"100%"}} src={props.data.flag} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{props.data.name}</CardTitle>
                    <CardSubtitle>Population: <span className="cardSubTitleProp">{props.data.population.toString().replace(/\d(?=(?:\d{3})+$)/g, '$&.')}</span></CardSubtitle>
                    <CardSubtitle>Region: <span className="cardSubTitleProp">{props.data.region}</span></CardSubtitle>
                    <CardSubtitle>Captial: <span className="cardSubTitleProp">{props.data.capital}</span></CardSubtitle>
                </CardBody>
            </Card>
            </ElementStyle>
            </div>
           
        </React.Fragment>
    )
}