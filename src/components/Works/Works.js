import w from './Works.module.scss'
import Project from "./Project/Project";
import todo from '../../utils/Works/15f9c360a4e19af41dff49564e81f00e.png'
import social
    from '../../utils/Works/Social-networks-are-a-reality-that-every-company-must-know-how-to-manage-in-a-very-personalized-way.jpg'
import counter from '../../utils/Works/315px-Schoty_abacus_nper.svg.png'

function Works() {
    return (
        <div className={w.worksBlock}>
            <div id={'projects'} className={w.container}>
                <h2 className={w.title}>
                    My Works
                </h2>
                <div className={w.works}>
                    <div>
                        <Project
                            href={'https://github.com/Vanya-afk/React-ToDo-List'}
                            title={'ToDo List'}
                            desc={'bla bla bla'}
                            img={todo}
                        />
                    </div>
                    <div style={{
                        paddingTop:'20px'
                    }}>
                        <Project
                            href={'https://github.com/Vanya-afk/SocialNetwork'}
                            title={'Social Network'}
                            desc={' some text'}
                            img={social}
                        />
                    </div>
                    <div style={{
                        paddingTop:'20px',
                        paddingBottom: '20px'
                    }}>
                        <Project
                        href={'https://github.com/Vanya-afk/Counter'}
                        title={'Counter'}
                        desc={'Откуда-то взялись русские'}
                        img={counter}
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works;