import m from './Main.module.css'

function Main() {
    return (
        <div className={m.mainBlock}>
            <div className={m.container}>
                <div className={m.text}>
                    <span>Hi There</span>
                    <h1>I am Ivan</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={m.photo}>
                    <img src="https://goo.su/66tV" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;