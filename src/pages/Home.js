import  React, { useState  } from 'react';
import { Admin } from 'react-admin';
import { Breadcrumb } from 'react-bootstrap';
import  NavbarComponent  from '../components/common/Navbar.js';
import  Footer  from '../components/common/Footer.js';
import { BrowserRouter as Redirect } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <NavbarComponent />
            {/* body */}
            <div className="container pt-5">
                <div class="mt-5">
                    <h2>Member list</h2>
                    <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>            
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr>
                        <tr>
                            <td>Mary</td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                        </tr>
                        <tr>
                            <td>July</td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;