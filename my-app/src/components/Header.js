import './Header.css';
import CEG_main_logo from '../images/CEG_main_logo.png';

function Header() {
    return (
        <div className="container">
            <div className="container-left">
                <img src={CEG_main_logo} className="logo"></img>
                <div>
                    <div className="col-name">COLLEGE OF ENGINEERING, GUINDY</div>
                    <div className="univ-name">Anna Univerity, Chennai</div>
                    <div className="univ-code">AISHE Code : C-25072</div>
                </div>
            </div>
            <h2 className='container-right'>
                Hall Booking Management System
            </h2>
        </div>
    );
}

export default Header;
