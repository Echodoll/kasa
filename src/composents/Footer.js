import Logo from '../picture/LOGO.png'
import '../assets/index.css'
import '../assets/home.css'

function Footer() {
    return (
        <footer>
            <img src={Logo} alt='Logo Kaza'></img>
            <p>©2020 KAsa. All rights reserved</p>
        </footer>
    );
};
export default Footer;