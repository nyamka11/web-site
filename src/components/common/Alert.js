import  React, { useState  } from 'react';
import { Alert, Button } from 'react-bootstrap';

export const AlertComponent = (props) => {
    const [show, setShow] = useState(true);

    // variants
    //     'primary',
    //     'secondary',
    //     'success',
    //     'danger',
    //     'warning',
    //     'info',
    //     'light',
    //     'dark',

    // if(show)  {
        return (
          <Alert variant={props.variant || 'dark'} onClose={() => setShow(false)} dismissible>
            <Alert.Heading>{props.title || 'no title'}</Alert.Heading>
            <p>{props.msg || 'no message'}</p>
          </Alert>
        );
    // }
} 

export default AlertComponent;


