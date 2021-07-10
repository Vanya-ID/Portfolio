import p from './Project.module.scss'

function Project(props) {
    return (
        <div className={p.projectContainer}>
            <div className={p.project}>
                <div className={p.imgParent}>
                    <img className={p.img} src={props.img} alt=""/>
                    <div className={p.overlay}>
                        <a href={''}>
                        </a>
                        <div className={p.name}>
                            <h5>
                                {props.title}
                            </h5>
                            <span>
                            {props.desc}
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;