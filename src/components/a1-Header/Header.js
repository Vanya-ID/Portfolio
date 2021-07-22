import h from './Header.module.scss'
import Nav from "../a2-Nav/Nav";
import {useEffect, useState} from "react";

function Header() {
    const [offset, setOffset] = useState(0);

    let style = {};
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, []);
    if (offset >= 90 && offset <= 120) {
        style = {
            position: 'fixed',
            backgroundColor: '#111',
            transform: 'translateY(-100%)'
        }
    }
    if (offset >= 115) {
        style = {
            position: 'fixed',
            backgroundColor: '#111',
            transform: 'translateY(0%)',
            transition: '0.5s',
        }
    }
    return (
        <div style={style} className={h.headerBlock}>
            <Nav/>
        </div>
    );
}

export default Header;