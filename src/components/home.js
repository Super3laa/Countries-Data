import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row ,Col } from 'reactstrap'
import CountryCard from './CountryCard'
import Layout from './Layout'
import Search from './search'

export default function Home(props){
    const [data,setData] = useState({vurrent:null,prev:null})
    const [search,setSearch] = useState(null);
    const [region,setRegion] = useState(null);
    useEffect(()=>{
        async function fetch(){
            const promise = new Promise(async (resolve, reject) => {
                let arr = [];
                let countries = ['egypt','brazil','germany','algeria','croatia','spain','belgium','iceland'];
                for (let i = 0; i < countries.length; i++) {
                    let res = await axios.get(`https://restcountries.eu/rest/v2/name/${countries[i]}?fields=name;capital;population;region;flag;alpha3Code`)
                    arr.push(res.data[0])
                }
                resolve(arr);
              });              
              promise.then((value)=>{
                  setData({current:value,prev:value})
                })
       }
        fetch();
    },[])
    function serachUpdate(value){
        setSearch(value);
    }
    function filterRegion(value) {
            setRegion(value);
    }
    useEffect(()=>{
        async function fetch() {
            let searchRes = await axios.get(`https://restcountries.eu/rest/v2/name/${search}?fields=name;capital;population;region;flag;alpha3Code`)
            let filteredSearch ;
            if(region !== null){
                 filteredSearch = searchRes.data.filter(country=>country.region === region);
            }else{
                filteredSearch = searchRes.data
            }
            setData({current:filteredSearch,prev:data.current});
        }
        if (search === null){
            setData({current:data.prev,prev:data.prev});
        }else if(search.length === 0){
            setData({current:data.prev,prev:data.prev});
        }else if (search.length > 0){
            fetch();
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[search,region])
    return(
        <Layout {...props}>
            <Container>
                <Row>
                    <Search functions={{serachUpdate:serachUpdate,filterRegion:filterRegion}}/>
                </Row>
                <Row>
                    <Container>
                        <Row style={{justifyContent: "center"}}>
                        {
                        data.current ? data.current.map((country,i)=>{
                            return <Col className="CardCol  " xs={9} md={3}><CountryCard key={i} data={country} /></Col>
                        }):null
                    }
                        </Row>
                    </Container>
                </Row>
            </Container>
        </Layout>
    )
}