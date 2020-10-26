import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import  NavbarComponent  from '../components/common/Navbar.js';
import  Footer  from '../components/common/Footer.js';
    
export class FirstComponents extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 13,
            currentPage: 0
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        console.log(offset, selectedPage);

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        
        console.log(this.state.offset, this.state.offset + this.state.perPage);
        this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		});
    }

    componentDidMount(){
        this.getData();
    }

    getData() {
        axios
        .get(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => {
            var data = res.data;
            var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                orgtableData :res.data,
                tableData:slice
            })
        });
    }

    render() {
        return (
            <div>
                <NavbarComponent />
                <div className="container pt-5 mt-5">
                    <table border="1">
                        <thead>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>

                        </thead>
                        <tbody>
                            {
                            this.state.tableData.map((tdata, i) => (
                                    <tr>
                                        <td>{tdata.id}</td>
                                        <td>{tdata.name}</td>
                                        <td>{tdata.email}</td>
                                        <td>{tdata.body}</td>
                                    </tr>
                                
                            ))
                            }

                        </tbody>
                    </table>  

                    <ReactPaginate
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default FirstComponents




