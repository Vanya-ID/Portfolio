import s from './Skill.module.scss'

function Skill(props) {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src={props.img} alt=""/>
            </div>
            <div className={s.title}>
                <h4>
                    {props.title}
                </h4>
                <span>
                    {props.progress}
                </span>
            </div>
            <div className={s.progressDark}>
                <div style={{
                    width: props.progress
                }} className={s.progress}>
                </div>
            </div>
            <p className={s.description}>
                {props.description}
            </p>
        </div>
    );
}

export default Skill;