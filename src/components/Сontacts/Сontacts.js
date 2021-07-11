import c from './Сontacts.module.scss'
import emailjs from 'emailjs-com';
import preloader from '../../utils/Preloader/preloader-images.gif'
import {useState} from "react";

function Contacts() {
    const [isLoading, setLoading] = useState(false)

    function sendEmail(e) {
        e.preventDefault();
        setLoading(true)
        emailjs.sendForm('service_wwmcgib', 'template_4rbhnog', e.target, 'user_ZtKUw8fXBLDokeLxLCKOU')
            .then((result) => {
                console.log(result.text);
                setLoading(false)
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
                            <input name="to_name" type="text" placeholder={'Name'}/>
                            <input name='from_name' type="email" placeholder={'Email'}/>
                        </div>
                        <textarea name="message" id="" cols="30" rows="10"
                                  placeholder={'Tell me more about your needs...'}/>
                        <button disabled={isLoading} type={"submit"} className={c.btn}>
                            {
                                isLoading ?
                                    <img
                                        style={{
                                            height: '80px',
                                            position: 'relative',
                                            top: '-28px'
                                        }}
                                        src={preloader} alt=""/>
                                    :
                                    'Send Message'
                            }

                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;