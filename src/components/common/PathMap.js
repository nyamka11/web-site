
import  React, { useState  } from 'react';
import { Breadcrumb } from 'react-bootstrap';

export const PathMap = (props) => {

    // props.items.map((item, index)=>  {

    // });

    return (
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
    );
} 

export default PathMap;


