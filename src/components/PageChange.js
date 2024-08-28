import Education from "./Education";
import Experience from "./Experience";
import Extracurriculars from "./Extracurriculars";
import Intrest from "./Intrest";
import Skills from "./Skills";

function PageChange({intrestList, skillsList, eduList, expList, extraList, page}) {

    let personalDetails = {
        name : 'Abhishek Ingle',
        mobNo : 8766822941,
        emailId : 'a.ingle@rnt.ai',
        address : 'Chandan Nagar, Kharadi, Pune-411014'
    }

      function handleClick(){
        page(0)
      }

  return (
    <>
      <h1 className="alignCenter">Resume</h1>
      <h2 className="alignCenter">{personalDetails.name}</h2>
      <p className="alignCenter">
        Mob.: {personalDetails.mobNo} <span>|</span> Email: {personalDetails.emailId}
      </p>
      <p className="alignCenter">Address: {personalDetails.address}</p>
      <hr />
      <br />
      <Intrest intrestList={intrestList} layout="bullet"></Intrest>
      {skillsList.length !== 0 && <Skills skillsList={skillsList}></Skills>}
      <Education eduList={eduList} layout="numbered"></Education>
      <Experience expList={expList}></Experience>
      <Extracurriculars extraList={extraList} layout="alpha"></Extracurriculars>
      <button
        className="btn alignRight"
        style={{ marginTop: "400px" }}
        onClick={window.print}
      >Print</button>
      {/* <div>
                    <input type='text' onFocus={()=>console.log('focused on textbox')} onBlur={()=>console.log('out of textbox')}></input>
                    <p onCopy={()=>alert('Something copied')} onCut={()=>alert('Something cut')} onPaste={()=>alert('Something pasted')}
                    >onCopy, onCut, onPaste are 3 events which you can use on any text value etc. try to use it on a paragraph and just alert the user that something is copied, cut or pasted.</p>
                </div> */}
    </>
  );
}

export default PageChange;
