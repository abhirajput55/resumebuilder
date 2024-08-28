import "./Resume.css";
import PageChange from "./PageChange";
import { useState } from "react";
import EditResume from "./EditResume";

function Resume() {
  let status = false;
  const [page, setPage] = useState(1);
  const [intrestList, setIntrestList] = useState([
    "Drawing",
    "Photography",
    "Design",
    "Programming",
    "Computer Science",
  ]);
  const [skillsList, setSkillList] = useState([
    "Web Design with HTML &amp; CSS",
  ]);
  const [eduList, setEduList] = useState([
    "Wilton High School",
    "Silvermine School of Arts",
    "Codeacademy",
  ]);
  const [expList, setExpList] = useState([
    "Student Technology Intern for Wilton School District",
    "Babysitter",
  ]);
  const [extraList, setExtraList] = useState([
    "Recycling Club",
    "Gardening Club",
    "Book Club",
  ]);

  function toggleLightToDark() {
    let resumePage = document.getElementById("resumePage");
    if (status) {
      resumePage.classList.remove("dark-mode");
    } else {
      resumePage.classList.add("dark-mode");
    }
    status = !status;
  }

  function handleClick() {
    page === 0 ? setPage(1) : setPage(0);
  }

  return (
    <>
      <div id="header" />
      <div className="left" />
      <div id="resumePage" className="stuff">
        <br />
        <br />
        <div>
          <button onClick={handleClick}>View Resume</button>
          <button id="dark" onClick={toggleLightToDark}>
            Dark
          </button>
        </div>
        {page === 1 ? (
          <PageChange
            intrestList={intrestList}
            skillsList={skillsList}
            eduList={eduList}
            expList={expList}
            extraList={extraList}
            page={setPage}
          ></PageChange>
        ) : (
          <EditResume
            intrestList={intrestList}
            setIntrestList={setIntrestList}
            skillsList={skillsList}
            setSkillList={setSkillList}
            eduList={eduList}
            setEduList={setEduList}
            expList={expList}
            setExpList={setExpList}
            extraList={extraList}
            setExtraList={setExtraList}
          ></EditResume>
        )}
      </div>
      <div className="right" />
      <div id="footer">
        <h2 id="name"></h2>
      </div>
    </>
  );
}

export default Resume;
