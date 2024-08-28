import './Resume.css';

function Intrest({intrestList, layout}) {

    return (
        <>
            <p className="head">Interests</p>
            <ul style={{listStyleType:'circle'}}>
            {
                intrestList.map(int =>
                    <li>{int}</li>
                )
            }
            {/* <ul>
                <li>Drawing</li>
                <li>Photography</li>
                <li>Design</li>
                <li>Programming</li>
                <li>Computer Science</li> */}
            </ul>
        </>
    );
}

export default Intrest;