import { type } from '@testing-library/user-event/dist/type';
import './Resume.css';

function Extracurriculars({extraList, layout}) {

    let type = layout==='alpha' ? 'a' : layout==='numbered' ? '1' : '';

    return (
        <>
            <p className="head">Extracurriculars</p>
            <ol type={type}>
                {
                    extraList.map(extra => 
                        <li>{extra}</li>
                    )
                }
            </ol>
        </>
    )
}

export default Extracurriculars;