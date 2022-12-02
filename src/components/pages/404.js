import {Link} from 'react-router-dom';
import ErrorMessage from '../errorMessage/ErrorMessage';

const Page404 = () => {
    return (
        <div >
            <ErrorMessage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px','color': 'black','marginTop': '20px'}}>Page doesn't exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '15px','color': 'grey'}} to="/Marvel/">Back to main page</Link>
        </div>
    )
}

export default Page404;