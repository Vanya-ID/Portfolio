import p from './Project.module.scss'

function Project(props) {
    return (
        <div className={p.projectContainer}>
            <a href={props.href}>
                <div className={p.project}>
                    <div className={p.imgParent}>
                        <img className={p.img} src={props.img} alt=""/>
                        <div className={p.overlay}>
                            <div className={p.name}>
                                <h3>
                                    {props.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Project;