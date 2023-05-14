import React from 'react'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'

const FlowNavbar = () => {
    return (
        // <Navbar
        //     fluid={true}
        //     rounded={false}
        //     className='bg-gray-900 shadow-sm'
        //     color='gray-900'
        // >
        //     <Navbar.Brand href="https://flowbite.com/">
        //         <img
        //             src="/logo_bg_removed.png"
        //             className="mr-3 h-6 sm:h-9"
        //             alt="Flowbite Logo"
        //         />

        //     </Navbar.Brand>
        //     <div className="flex md:order-2">
        //         <Dropdown
        //             arrowIcon={false}
        //             inline={true}
        //             label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
        //         >
        //             <Dropdown.Header>
        //                 <span className="block text-sm">
        //                     Bonnie Green
        //                 </span>
        //                 <span className="block truncate text-sm font-medium">
        //                     name@flowbite.com
        //                 </span>
        //             </Dropdown.Header>
        //             <Dropdown.Item>
        //                 Dashboard
        //             </Dropdown.Item>
        //             <Dropdown.Item>
        //                 Settings
        //             </Dropdown.Item>
        //             <Dropdown.Item>
        //                 Earnings
        //             </Dropdown.Item>
        //             <Dropdown.Divider />
        //             <Dropdown.Item>
        //                 Sign out
        //             </Dropdown.Item>
        //         </Dropdown>
        //         <Navbar.Toggle />
        //     </div>
        //     <Navbar.Collapse>
        //         <Navbar.Link
        //             href="/navbars"
        //             active={true}
        //         >
        //             Home
        //         </Navbar.Link>
        //         <Navbar.Link href="/navbars">
        //             About
        //         </Navbar.Link>
        //         <Navbar.Link href="/navbars">
        //             Services
        //         </Navbar.Link>
        //         <Navbar.Link href="/navbars">
        //             Pricing
        //         </Navbar.Link>
        //         <Navbar.Link href="/navbars">
        //             Contact
        //         </Navbar.Link>
        //     </Navbar.Collapse>
        // </Navbar>
        <Navbar
            fluid={true}
            rounded={true}
            theme={{ bg: 'gray-900', text: 'white'}}
            
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                    Flowbite
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm text-gray-400">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium text-gray-400">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle className="text-white" />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                    className="text-white"
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars" className="text-gray-400">
                    About
                </Navbar.Link>
                <Navbar.Link href="/navbars" className="text-gray-400">
                    Services
                </Navbar.Link>
                <Navbar.Link href="/navbars" className="text-gray-400">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="/navbars" className="text-gray-400">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default FlowNavbar