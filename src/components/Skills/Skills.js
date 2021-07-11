import s from './Skills.module.scss'
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div  className={s.skillsBlock}>
            <div id={'skills'} className={s.container}>
                <h2 className={s.title}>
                    My Skills
                </h2>
                <div className={s.skills}>
                    <Skill
                        progress={'75%'}
                        title={'React'}
                        img={'https://img.icons8.com/wired/100/26e07f/react.png'}
                        description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}
                    />
                    <Skill
                        progress={'70%'}
                        title={'CSS'}
                        img={'https://img.icons8.com/ios-filled/50/26e07f/css3.png'}
                        description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}
                    />
                    <Skill
                        progress={'85%'}
                        title={'JavaScript'}
                        img={'https://img.icons8.com/ios-filled/50/26e07f/javascript.png'}
                        description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}
                    />
                    <Skill
                        progress={'80%'}
                        title={'TypeScript'}
                        img={'https://img.icons8.com/ios-filled/50/26e07f/typescript.png'}
                        description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}
                    />
                    <Skill
                        progress={'70%'}
                        title={'Redux'}
                        img={'https://img.icons8.com/ios-filled/50/26e07f/redux.png'}
                        description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}
                    />
                    <Skill
                        progress={'60%'}
                        title={'Jest'}
                        img={'https://img.icons8.com/ios-filled/50/26e07f/test-tube.png'}
                        description={'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;