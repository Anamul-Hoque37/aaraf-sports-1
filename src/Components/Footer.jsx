import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-xl font-bold">Aaraf Sports</h1>
                        <p className="text-sm">© {new Date().getFullYear()} Aaraf Sports. All rights reserved.</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-sm font-semibold">Contact Us</h2>
                        <p className="text-sm">Email: anamul.eee73@gmail.com</p>
                        <p className="text-sm">Phone: +8801737712037</p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <i className="fab fa-linkedin-in"></i> LinkedIn
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;