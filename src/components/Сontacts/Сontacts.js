import c from './Сontacts.module.scss'
import s from "../Skills/Skills.module.scss";

function Contacts() {
    return (
        <div className={c.contactBlock}>
            <div className={c.container}>

                <form className={c.form} action="">
                    <h2 className={c.title}>
                       Get in Touch
                    </h2>
                    <div className={c.contacts}>
                        <input type="text" placeholder={'Телефон'}/>
                        <input type="text" placeholder={'Почта'}/>
                        <textarea name="" id="" cols="30" rows="10" placeholder={'text'}/>
                    </div>
                    <button>Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;