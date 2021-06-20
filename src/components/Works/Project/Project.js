import p from './Project.module.css'

function Project(props) {
    return (
        <div className={p.project}>
            <img className={p.img} src="https://goo.su/66UH" alt=""/>
            <button>Смотреть</button>
            <h3>
                {props.title}
            </h3>
            <span>
                {props.desc}
            </span>
        </div>
    );
}

export default Project;