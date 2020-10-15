
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import  NavbarComponent  from '../components/common/Navbar.js';
import  Footer  from '../components/common/Footer.js';

const Admin = () => {
    return(
        <div>
            <NavbarComponent active="admin" />
            <div className="row pathRow" >
                <div className="col-12">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/contact">Contact</Breadcrumb.Item>
                        <Breadcrumb.Item active>Data</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            {/* body */}
            <div className="container w-50">
                <form>
                    <div className="form-group">
                        <label htmlFor="title1">カテゴリー</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>食品</option>
                            <option>水品</option>
                            <option>ペーパー</option>
                            <option>服</option>
                            <option>その他</option>
                        </select>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title2">
                            <ruby>倉庫<rt>そうこ</rt></ruby>
                            <ruby>名<rt>めい</rt></ruby>
                        </label>
                        <input type="text" className="form-control" id="goodName" placeholder="倉庫名" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title3">Count</label>
                        <input type="text" className="form-control" id="goodCnt" placeholder="Good count" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title4">Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}
export default Admin;





