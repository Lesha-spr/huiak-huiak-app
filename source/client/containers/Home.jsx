import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import HelloWorld from './../components/HelloWorld';

const Home = ({ children }) => (
    <div>
        <HelloWorld />
        {children}
    </div>
);

const mapStateToProps = state => ({
    example: state.example
});

Home.propTypes = {
    children: PropTypes.element
};

export default connect(mapStateToProps)(Home);
