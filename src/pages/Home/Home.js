import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Title from '../../components/Title/Title';
import BgDinamic from '../../components/BgDinamic/Bgdinamic';

class Home extends Component {
    render() {
        return (
            <div className="eyes__main">
                <Header />
                
                <main>
                    
                    <Title />
                    <BgDinamic />

                </main>

                <Footer />
            </div>
        );
    }
}

export default Home