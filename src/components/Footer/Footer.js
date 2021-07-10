import f from './Footer.module.scss'

function Footer() {
    return (
        <div className={f.footerBlock}>
           <div className={f.container}>
                <h2>Ivan</h2>
               <div className={f.logos}>
                   <img src="https://goo.su/66UX" alt=""/>
                   <img src="https://goo.su/66uy" alt=""/>
                   <img src="https://goo.su/66uY" alt=""/>
               </div>
               <span>©2021 Все права защищены </span>
           </div>
        </div>
    );
}

export default Footer;