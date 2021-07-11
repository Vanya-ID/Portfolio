import c from './Сontacts.module.scss'
import emailjs from 'emailjs-com';

function Contacts() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_wwmcgib', 'template_4rbhnog', e.target, 'user_ZtKUw8fXBLDokeLxLCKOU')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div id={'contacts'} className={c.contactBlock}>
            <div className={c.container}>
                <form onSubmit={sendEmail} className={c.form}>
                    <h2 className={c.title}>
                        Get in Touch
                    </h2>
                    <div className={c.contacts}>
                        <div className={c.info}>
                            <input name="user_name" type="text" placeholder={'Name'}/>
                            <input name='user_email' type="email" placeholder={'Email'}/>
                        </div>
                        <textarea name="message" id="" cols="30" rows="10"
                                  placeholder={'Tell me more about your needs...'}/>
                        <button type={"submit"} className={c.btn}>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;