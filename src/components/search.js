import React from 'react'
import { Container, Row, Col, InputGroup, Input, InputGroupText, InputGroupAddon } from 'reactstrap'
import { AiOutlineSearch } from 'react-icons/ai'
import { InputStyle } from '../assets/styles/GlobalStyles'
export default function Search(props) {
    return (
        <React.Fragment>
            <Container >
                <Row  className="SearchContainer">
                    <Col >
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText className="addOnInputSympol"><AiOutlineSearch className="addOnInputIcon" /></InputGroupText>
                            </InputGroupAddon>{" "}
                            <InputStyle>
                                <Input placeholder="Search for a country .."
                                onChange={(e)=>{props.functions.serachUpdate(e.target.value)}}
                                 className={"FormInput"} type="text" id="search" name="search" ></Input>
                            </InputStyle>
                        </InputGroup>
                    </Col>
                    <Col className="selectCol">
                        <InputStyle>
                            <Input className={"FormInput Select"}  
                            
                            onChange={(e)=>{props.functions.filterRegion(e.target.value)}} type="select" id="filter" name="filter">
                                <option disabled selected hidden>Filter by Region</option>
                            <option>Africa</option>
                            <option>Americas</option>
                            <option>Asia</option>
                            <option>Europe</option>
                            <option>Oceania</option>
                            </Input>
                        </InputStyle>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}