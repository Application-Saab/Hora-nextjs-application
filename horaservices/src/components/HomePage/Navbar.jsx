// import './Navbar.css';

// import Image from 'next/image';
// import Logo from '../../assets/new_logo.png';
// import React, { useState } from 'react';

// const Navbar = () => {

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//       <Image
//       src={Logo}
//       alt="Logo"
//       width={60} 
//       height={70} 
//     />
//       </div>
//       {/* <div className="navbar-location">
//         <i className="location-icon"></i>
//         <span>Set Location</span>
//       </div> */}
//       <div className="navbar-search">
//         <input type="text" placeholder="Search for Services" />
//         <button className="search-button">
//           <i className="search-icon"></i>
//         </button>
//       </div>
//       <div className="navbar-categories">
//         <button onClick={toggleDropdown} className="categories-button">
//           <i className="categories-icon"></i>
//           Categories
//           <i className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}></i>
//         </button>
//         <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
//           <li>Category 1</li>
//           <li>Category 2</li>
//           <li>Category 3</li>
//         </ul>
//       </div>
//       <div className="navbar-icons">
//         <i className="cart-icon"></i>
//         <i className="profile-icon"></i>
//         <i className="language-icon"></i>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import './Navbar.css';
import Image from 'next/image';
import Logo from '../../assets/new_logo.png';
import React, { useState, useEffect } from 'react';

const SearchBar = () => (
    <div className="navbar-search">
        <input type="text" placeholder="Search for Services" />
        <button className="search-button">
            <i className="search-icon"></i>
        </button>
    </div>
);

const NavbarIcons = () => (
    <div className="navbar-icons">
        <i className="cart-icon"></i>
        <i className="profile-icon"></i>
        <i className="language-icon"></i>
    </div>
);

const Categories = ({ isDropdownOpen, toggleDropdown }) => (
    <div className="navbar-categories">
        <button onClick={toggleDropdown} className="categories-button">
            <i className="categories-icon"></i>
            Categories
            <i className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}></i>
        </button>
        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li>Decoration</li>
            <li>Chef for Party</li>
            <li>Food Delivery</li>
            <li>Live Catering</li>
            <li>Entertainment</li>
        </ul>
    </div>
);

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className="navbar">
            {isMobile ? (
                <>
                <div className="navbar-logo">
                        <Image src={Logo} alt="Logo" width={60} height={70} />
                    </div>
                    <button className="hamburger-menu" onClick={toggleDrawer}>
                        ☰
                    </button>
                    <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                        <button className="close-drawer" onClick={toggleDrawer}>×</button>
                        <div className="drawer-content">
                            <SearchBar />
                            <NavbarIcons />
                            <Categories isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="navbar-logo">
                        <Image src={Logo} alt="Logo" width={60} height={70} />
                    </div>
                    <SearchBar />
                    <Categories isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
                    <NavbarIcons />
                </>
            )}
        </nav>
    );
};

export default Navbar;



// import './Navbar.css';
// import Image from 'next/image';
// import Logo from '../../assets/new_logo.png';
// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };
        
//         handleResize();
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     const toggleDrawer = () => {
//         setIsDrawerOpen(!isDrawerOpen);
//     };

//     return (
//         <nav className="navbar">
//             {isMobile && (
//                 <button className="hamburger-menu" onClick={toggleDrawer}>
//                     ☰
//                 </button>
//             )}
//             <div className="navbar-logo">
//                 <Image src={Logo} alt="Logo" width={60} height={70} />
//             </div>
//             {!isMobile && (
//                 <>
//                     <div className="navbar-search">
//                         <input type="text" placeholder="Search for Services" />
//                         <button className="search-button">
//                             <i className="search-icon"></i>
//                         </button>
//                     </div>
//                     <div className="navbar-categories">
//                         <button onClick={toggleDropdown} className="categories-button">
//                             <i className="categories-icon"></i>
//                             Categories
//                             <i className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}></i>
//                         </button>
//                         <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
//                             <li>Decoration</li>
//                             <li>Chef for Party</li>
//                             <li>Food Delivery</li>
//                             <li>Live Catering</li>
//                             <li>Entertainment</li>
//                         </ul>
//                     </div>
//                     <div className="navbar-icons">
//                         <i className="cart-icon"></i>
//                         <i className="profile-icon"></i>
//                         <i className="language-icon"></i>
//                     </div>
//                 </>
//             )}
//             {isMobile && (
//                 <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
//                     <button className="close-drawer" onClick={toggleDrawer}>×</button>
//                     <div className="drawer-content">
//                         <div className="navbar-search">
//                             <input type="text" placeholder="Search for Services" />
//                             <button className="search-button">
//                                 <i className="search-icon"></i>
//                             </button>
//                         </div>
//                         <div className="navbar-icons">
//                             <i className="cart-icon"></i>
//                             <i className="profile-icon"></i>
//                             <i className="language-icon"></i>
//                         </div>
//                         <div className="navbar-categories">
//                             <button onClick={toggleDropdown} className="categories-button">
//                                 <i className="categories-icon"></i>
//                                 Categories
//                                 <i className={`arrow-icon ${isDropdownOpen ? 'open' : ''}`}></i>
//                             </button>
//                             <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
//                             <li>Decoration</li>
//                             <li>Chef for Party</li>
//                             <li>Food Delivery</li>
//                             <li>Live Catering</li>
//                             <li>Entertainment</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;