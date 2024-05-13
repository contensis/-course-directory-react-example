import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
