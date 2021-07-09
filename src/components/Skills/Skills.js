import s from './Skills.module.css'
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Мои Скиллы</h2>
                <div className={s.skills}>
                    <Skill title={'JS'}
                           description={'Hello JS'}
                    />
                    <Skill title={'CSS'}
                           description={'Hello CSS'}
                    />
                    <Skill title={'REACT'}
                           description={'Hello REACT'}
                    />
                    <Skill title={'Jest'}
                           description={'Hello REACT'}
                    />
                    <Skill title={'REACT'}
                           description={'Hello REACT'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;