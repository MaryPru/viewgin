import React from 'react';
import './Header.scss'
import cellular from '../../assets/img/Cellular.svg'
import wifi from '../../assets/img/Wifi.svg'
import capacity from '../../assets/img/Capacity.svg'

interface HeaderInterface {
    isMobile: boolean
}

const Header = (props: HeaderInterface) => {
    return (
        <div className={'headerWrapper'}>
            {props.isMobile &&
            <div className="mobileHeader">
                <div className="mobileHeader_icons">
                    <div className="time">16:05</div>
                    <div className="icons">
                        <img src={cellular} alt="cellular"/>
                        <img src={wifi} alt="wifi"/>
                        <img src={capacity} alt="capacity"/>
                    </div>
                </div>
            </div>
            }
            <div className={'header'}>
                <div className="header_title">
                    LOGO NAME
                </div>
                <button className="active" data-text="Action"/>
            </div>
        </div>
    );
};

export default Header;