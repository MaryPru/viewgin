import React, {useEffect, useRef, useState} from 'react';
import './HomePage.scss'
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import Modal from "../../components/Modal/Modal";

const HomePage = () => {
    const [isModal, setIsModal] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    //храним зависимости для размера окна
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        //добавляем слушателя при событии изменения окна браузера и удаляем
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getWindowDimensions() {
        const {innerWidth: width, innerHeight: height} = window;
        return {
            width,
            height
        };
    }

    //при размере окна меньше 700 устанавливаем режим просмотра мобильной версии
    useEffect(() => {
        if (windowDimensions.width < 700) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [windowDimensions.width])

    // переменная, которая хранит значение обновления страницы
    const mounted = useRef<boolean>();

    useEffect(() => {
        if (!mounted.current) {
            setIsModal(true)
            mounted.current = true;
        }
    }, [mounted]);

    return (
        <div className={'home'}>
            <Header isMobile={isMobile}/>
            <Body isMobile={isMobile}/>
            {
                isModal && <Modal setIsModal={setIsModal}/>
            }
        </div>
    );
};

export default HomePage;