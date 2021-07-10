import c from './Сontacts.module.scss'

function Contacts() {
    return (
        <div className={c.contactBlock}>
            <div className={c.container}>
                <form className={c.form} action="">
                    <h2 className={c.title}>
                        Get in Touch
                    </h2>
                    <div className={c.contacts}>
                        <div className={c.info}>
                            <input type="text" placeholder={'Name'}/>
                            <input type="email" placeholder={'Email'}/>
                        </div>
                        <div>
                            <textarea name="" id="" cols="30" rows="10"
                                      placeholder={'Tell me more about your needs...'}/>
                        </div>
                        <button className={c.btn}>
                            Send Message
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;