import React,{Fragment} from 'react'
import Tiles from './Tiles';
import Search from './Search';
import Footer from './Footer';

const MainPage = props => {
    return (
        <Fragment>
            <div className="page">                
                <Search/>
                <Tiles/>
                <Footer/>
            </div>
        </Fragment>
    )
}


export default MainPage