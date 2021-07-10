import c from './Сontacts.module.scss'
function Contacts() {
    return (
        <div className={c.contactBlock}>
            <div className={c.container}>

                <form className={c.form} action="">
                    <h3>Контакты</h3>
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