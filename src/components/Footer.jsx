import React from 'react';

const Footer = () => {
    const logos = ["github-mark.png", "LI-Black.png", "Instagram_Glyph_Black.jpg"]
    return (
        <footer>
            <div id="socials-container">
                {logos.map(logo=>
                    <img
                        key={logo}
                        className="logo"
                        src={`images/logos/${logo}`}
                        alt={logo}
                    >
                    </img>
                )}
            </div>
            <span id="end-note">Jacqueline Trapp</span>
        </footer>
    );
}

export default Footer;
