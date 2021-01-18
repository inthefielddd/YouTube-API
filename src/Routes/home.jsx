import React, { Component } from 'react';


class Home extends Component {
    state ={
        isLoading:true,
        videos:[]
    };
 
    render() {
        const {isLoading, videos} = this.state;
        return (
            <div>
             {isLoading ? "Loading..." : videos}   
            </div>
        );
    }
}

export default Home;