import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>This page cannot be found!</p>
            <Link to="/">Go to Home Page</Link>
        </div>
     );
}
 
export default ErrorPage;