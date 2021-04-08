import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Admin = () => {

    return (
        <div>
            <ul className="side-bar">
                <Link to="/manage"><li><FontAwesomeIcon icon={faEdit} /> Manage Products</li></Link>
                <Link to="/add"><li><FontAwesomeIcon icon={faPlus} /> Add Product</li></Link>
            </ul>
        </div>
    );
};

export default Admin;