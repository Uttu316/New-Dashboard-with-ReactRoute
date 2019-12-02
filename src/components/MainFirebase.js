import React,{Fragment} from 'react'
import Tiles from './Tiles';
import Search from './Search';
import Footer from './Footer';
import {Row, Heading } from 'rebass'; 

const Home = props => {
    return (
        <Fragment>
            <div className="page">                
             		<Heading>This is home</Heading> 
			<Footer/>
            </div>
        </Fragment>
    )
}


export default Home