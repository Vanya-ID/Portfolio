import w from './Works.module.css'
import Project from "./Project/Project";

function Works() {
    return (
        <div className={w.worksBlock}>
            <div className={w.container}>
                Мои Работы
                <div className={w.works}>
           <Project title ={'TODO'} desc={'bla bla bla'}/>
           <Project title ={'SOCIAL NETWORK'} desc={' some text'}/>
           <Project title ={'CODEWARS'} desc={'Откуда-то взялись русские'}/>
                </div>
            </div>
        </div>
    );
}

export default Works;