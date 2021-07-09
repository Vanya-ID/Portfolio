import m from './Main.module.css'
import photo from '../../utils/Ava/milye_tyan_na_avatarku_1_06104421.png'

function Main() {
    return (
        <div className={m.mainBlock}>
            <div className={m.container}>
                <div className={m.text}>
                    <h1>
                        I'm <span style={{color:'#20c997'}}>Ivan Filipchyck,</span> a Web Developer
                    </h1>
                    <p>I help you build brand for your business at an affordable price. Thousands of clients have
                        procured exceptional results while working with our dedicated team. when an unknown printer took
                        a galley of type and scrambled it to make a type specimen book.

                        Delivering work within time and budget which meets client’s requirements is our moto. Lorem
                        Ipsum has been the industry's standard dummy text ever when an unknown printer took a
                        galley.</p>
                </div>
                <div className={m.photo}>
                    <img src={photo} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;