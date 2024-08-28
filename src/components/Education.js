import './Resume.css';

function Education({eduList, layout}) {

    let type = layout==='alpha' ? 'a' : layout==='numbered' ? '1' : '';
    
    return (
        <>
            <p className="head">Education</p>
            <ol type={type}>
                {
                    eduList.map(edu => 
                        <li>{edu}</li>
                    )
                }
            </ol>
        </>
    )
}

export default Education;