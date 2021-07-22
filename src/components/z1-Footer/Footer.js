import f from './Footer.module.scss'

function Footer() {
    return (
        <div className={f.footerBlock}>
            <div className={f.container}>
                <h2 className={f.title}>Ivan</h2>
                <div className={f.logos}>
                    <a href='https://vk.com/king_of_dumplings'>
                        <img src="https://img.icons8.com/color/48/000000/vk-circled.png" alt=""/>
                    </a>
                    <a href='https://www.instagram.com/66_noname/?hl=ru'>
                        <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" alt=""/>
                    </a>
                    <a href='https://www.linkedin.com/in/vanya-id-a13784205/'>
                        <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt=""/>
                    </a>
                    <a href='https://github.com/Vanya-afk?tab=repositories'>
                        <img src="https://img.icons8.com/ios-glyphs/30/4a90e2/github.png" alt=""/>
                    </a>
                </div>
                <span>©2021 Все права защищены </span>
            </div>
        </div>
    );
}

export default Footer;