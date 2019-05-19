import React, { Component } from 'react';

import Select from '../../components/Select/Select';
import Banner from '../../components/Banner/Banner';
import Think from '../../components/Think/Think';
import Carousel from '../../components/Carousel/Carousel';
import Expansion from '../../components/Expansion/Expansion';

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Select />
                <Think />
                <Banner />
                <Carousel />
                <Expansion />
            </React.Fragment>
        );
    }
}

export default HomePage;