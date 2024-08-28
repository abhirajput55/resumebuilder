import './Resume.css';

function Experience({expList}) {

    return (

        <>
            <p className="head">Experience</p>
            <ul>
                {
                    expList.map(exp => 
                        <li>{exp}</li>
                    )
                }
            </ul>
        </>
    )
}

export default Experience;