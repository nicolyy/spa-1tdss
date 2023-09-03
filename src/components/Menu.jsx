import {} from 'react-router-dom';
import './Menu.css';

export default function Menu() {

    return (
        <div className="menu">
            <link to='/'>Home</link>
            <span></span>
            <link to='/produtos'>Produtos</link>

        </div>
    );
}