import w from './Works.module.scss'
import Project from "./Project/Project";
import todo from '../../utils/Works/15f9c360a4e19af41dff49564e81f00e.png'
import social from '../../utils/Works/Social-networks-are-a-reality-that-every-company-must-know-how-to-manage-in-a-very-personalized-way.jpg'
import counter from '../../utils/Works/315px-Schoty_abacus_nper.svg.png'

function Works() {
    return (
        <div className={w.worksBlock}>
            <div className={w.container}>
                <h2 className={w.title}>
                    My Works
                </h2>
                <div className={w.works}>
                    <Project
                        title={'TODO'}
                        desc={'bla bla bla'}
                        img={todo}
                    />
                    <Project
                        title={'SOCIAL NETWORK'}
                        desc={' some text'}
                        img={social}
                    />
                    <Project
                        title={'CODEWARS'}
                        desc={'Откуда-то взялись русские'}
                        img={counter}
                    />
                </div>
            </div>
        </div>
    );
}

export default Works;