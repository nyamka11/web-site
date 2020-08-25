
import { withRouter } from 'react-router-dom'
const Path = withRouter(props => <MyComponent {...props}/>);

class MyComponent extends React.Component { 
    SomeMethod () {
        const {pathname} = this.props.location;
    }
}

export default Path;