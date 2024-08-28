import { useState } from 'react';
import './EditResume.css';
import Intrest from './Intrest';

function EditResume({intrestList, setIntrestList, skillsList, setSkillList, eduList, setEduList, expList, setExpList, extraList, setExtraList}) {

    function handleClick(e) {
        e.preventDefault();
        console.log(e.target.className)
        if(e.target.className === 'interest'){
          setIntrestList([...intrestList,document.getElementsByName(e.target.className)[0].value])
        }else if(e.target.className === 'skill'){
          setSkillList([...skillsList,document.getElementsByName(e.target.className)[0].value])
        }else if(e.target.className === 'education'){
          setEduList([...eduList,document.getElementsByName(e.target.className)[0].value])
        }else if(e.target.className === 'experience'){
          setExpList([...expList,document.getElementsByName(e.target.className)[0].value])
        }else if(e.target.className === 'extracurriculars'){
          setExtraList([...extraList,document.getElementsByName(e.target.className)[0].value])
        }
        document.getElementsByName(e.target.className)[0].value = '';
    }

    function handleClickDelete(e){
      // intrestList.filter(intrest => )
      e.preventDefault();
      console.log(document.getElementsByClassName(e.target.parentElement.className)[0]);
    }



  return (
    <>
      <div class="main-block">
        <form>
          {/* <fieldset>
            <legend>
              <h3>Account Details</h3>
            </legend>
            <div class="account-details">
              <div> 
                <label>Email*</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label>Password*</label>
                <input type="password" name="name" required />
              </div>
            </div>
          </fieldset> */}
          <fieldset>
            <legend>
              <h3>Interests</h3>
            </legend>
            <div class="personal-details">
              <div>
                {intrestList.map(e =>
                  <div className='container'>
                    <button className='deleteBtn' onClick={handleClickDelete}>X</button>
                    <p className='interestValue' style={{ display: "inline-block" }} name='interest'>{e}</p>
                    <br></br>
                  </div>
                )}
              </div>
              <div>
                <div>
                    <input type="text" name="interest" required />
                </div>
                <div>
                    <button className='interest' onClick={handleClick}>Add</button>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h3>Skills</h3>
            </legend>
            <div class="personal-details">
              <div>
                {skillsList.map(e =>
                    <p>{e}</p>
                )}
              </div>
              <div>
                <div>
                    <input type="text" name="skill" required />
                </div>
                <div>
                    <button className='skill' onClick={handleClick}>Add</button>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h3>Education</h3>
            </legend>
            <div class="personal-details">
              <div>
                {eduList.map(e =>
                    <p>{e}</p>
                )}
              </div>
              <div>
                <div>
                    <input type="text" name="education" required />
                </div>
                <div>
                    <button className='education' onClick={handleClick}>Add</button>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h3>Experience</h3>
            </legend>
            <div class="personal-details">
              <div>
                {expList.map(e =>
                    <p>{e}</p>
                )}
              </div>
              <div>
                <div>
                    <input type="text" name="experience" required />
                </div>
                <div>
                    <button className='experience' onClick={handleClick}>Add</button>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h3>Extracurriculars</h3>
            </legend>
            <div class="personal-details">
              <div>
                {extraList.map(e =>
                    <p>{e}</p>
                )}
              </div>
              <div>
                <div>
                    <input type="text" name="extracurriculars" required />
                </div>
                <div>
                    <button className='extracurriculars' onClick={handleClick}>Add</button>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h3>Terms and Mailing</h3>
            </legend>
            <div className="terms-mailing">
              <div className="checkbox">
                <input type="checkbox" name="checkbox" />
                <span>
                  I accept the{" "}
                  <a href="https://www.w3docs.com/privacy-policy">
                    Privacy Policy.
                  </a>
                </span>
              </div>
              <div class="checkbox">
                <input type="checkbox" name="checkbox" />
                <span>I want to recelve personallzed offers by your site</span>
              </div>
            </div>
          </fieldset>
          <button className='editResumeBtn' type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default EditResume;
