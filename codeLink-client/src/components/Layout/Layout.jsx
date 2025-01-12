import 'react';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import NavbarComponent from '../Navbar/NavbarComponent';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <header>
                <NavbarComponent />
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
