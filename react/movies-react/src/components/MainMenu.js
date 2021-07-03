import { Link } from "react-router-dom";

export const MainMenu = () => (

    <ul className="nav">
        <li className="nav-item">
            <Link className="bg-blue-900 p-3 rounded-sm text-white mr-2" to="/">Home</Link>
        </li>
       
        <li className="nav-item">
            <Link className="bg-blue-900 p-3 rounded-sm text-white"  to="/favorites">Favorites</Link>
        </li>
    </ul>
)