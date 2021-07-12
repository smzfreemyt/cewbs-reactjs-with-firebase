import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar';
import CategoryButtons from '../../components/Buttons/CategoryButtons';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="row mr-0 ml-0">
                <Sidebar />
                <div className="col p-4">
                    <CategoryButtons limit="5" />
                    <div className="card mt-5">
                        <h5 className="card-header font-weight-light">Posts</h5>
                        <div className="card-body">
                        </div>
                    </div>
                    <div className="card mt-5">
                        <h5 className="card-header font-weight-light">Posts</h5>
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
