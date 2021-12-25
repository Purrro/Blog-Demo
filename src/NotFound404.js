import { Link } from "react-router-dom";

const NotFound404 = () => {
    return (
        <div>
            <h2>Sorry!</h2>
            <p>This page can't be found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    );
}
 
export default NotFound404;