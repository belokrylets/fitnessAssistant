import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container fluid='xxl'>
                <div className='footeClass'>
                    <div className='rights' >
                        <h4>
                            Сергей Белокрылец
                        </h4>
                        <p>
                            (с) 2022. Все права защищены.
                        </p>
                    </div>
                    <div className='socialMedia'>
                        <a href='https://instagram.com/belokrylets'>
                            <img src='https://раллишоп.рф/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/social/img/instagram.svg' alt='instagram' />
                        </a>
                        <a href='https://t.me/belokrylets'>
                            <img src='https://papik.pro/uploads/posts/2021-11/1636144616_57-papik-pro-p-logotip-telegramma-foto-58.png' alt="telegramm" />
                        </a>
                        <a href='https://vk.com/belokrylec' >
                            <img src='https://gaschemistry.ru/graphics/vk.png' alt="vk" />
                        </a>
                    </div>
                </div>
            </Container>

        </footer>
    );
}

export default Footer;

