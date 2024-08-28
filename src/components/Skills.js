import './Resume.css';

function Skills({skillsList}) {

    return (
        <>
            <p className="head">Skills</p>
            <ul>
                {
                    skillsList.map(skill =>
                        <li>{skill}</li>    
                    )
                }
            </ul>
        </>
    );
}

export default Skills;