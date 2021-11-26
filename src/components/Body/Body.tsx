import React, {useState} from 'react';
import circles from '../../assets/img/circles.png'
import './Body.scss'
import CheckBox from "../../UI/Checkbox/CheckBox";
import axios from 'axios';
import {useHistory} from "react-router-dom";

interface BodyInterface {
    isMobile: boolean
}
//компонент тела страницы
const Body = (props: BodyInterface) => {

    const [isChecked, setIsChecked] = useState(false)
    const router = useHistory()

    const handleClick = () => {
        if (isChecked) {
            axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
                .then((res) => {
                    console.log(res);
                    router.push('/error')
                });
        }
    }

    return (
        <div className={'bodyWrapper'}>
            <img className={'circles'} src={circles} alt="circles"/>
            <div className="bodyWrapper_description">
                <div className="title">Lorem ipsum<br/>
                    Lorem ipsum lorem<br/>
                    Lorem ipsum lorem ipsum
                </div>
                <div className="mailTitle">Email</div>
                <div className="mail">example@viewgin.com</div>
                <div className="line"/>
                <div className="agreement">
                    <CheckBox isChecked={isChecked} setIsChecked={setIsChecked}/>
                    <div className="agreement_title">I agree with <span>Privacy Policy</span></div>
                </div>
                <button
                    className={`${!isChecked && 'disabled'}`}
                    onClick={handleClick}
                >
                    ENTER
                </button>
                {
                    props.isMobile &&
                    <div className="bodyWrapper_footer">
                        <div className="toolbar"></div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Body;