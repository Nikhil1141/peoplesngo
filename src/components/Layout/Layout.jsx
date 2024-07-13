import React, { memo } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <main style={{ minHeight: "88vh" }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default memo(Layout);