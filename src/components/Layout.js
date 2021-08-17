import React from 'react';
import Header from './header'
export default function Layout(props){
    return(
        <React.Fragment>
            <Header {...props} />
            {props.children}
        </React.Fragment>
    )
}