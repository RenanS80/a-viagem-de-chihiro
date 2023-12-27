import Logo from 'assets/img/logo2.svg';
import Facebook from 'assets/img/facebook.svg';
import Instagram from 'assets/img/instagram.svg';
import Twitter from 'assets/img/twitter.svg';
import Google from 'assets/img/google.svg';

import './styles.css';

function Navbar() {
    return (
        <header>
            <div className="container">
                <div className="header-logo">
                    <img src={Logo} alt="Studio Ghibli" />
                </div>

                <div className="social-media-icons">
                    <a href="https://pt.wikipedia.org/wiki/A_Viagem_de_Chihiro" target="_blank" rel="noreferrer">
                        <img src={Google} alt="Google" />
                    </a>
                    <a href="https://pt-br.facebook.com/StudioGhibliBrasil/" target="_blank" rel="noreferrer">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/ghibliusa" target="_blank" rel="noreferrer">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                    <a href="https://www.instagram.com/ghiblibrasil/" target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar;