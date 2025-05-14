import React, { useState } from "react";
import "./viteReactKit.scss";

const LIBRARIES = {
  scss: "yarn add sass -D",
  tailwind: "yarn add @tailwindcss/vite -D",
  mui: "yarn add @mui/icons-material @mui/material @emotion/styled @emotion/react",
  "react-router-dom": "yarn add react-router-dom",
};

const ViteReactKit = ({ isDark }) => {
  const [projectName, setProjectName] = useState("");  // 프로젝트 이름
  const [selectedLibs, setSelectedLibs] = useState([]); // 선택한 라이브러리
  const [command, setCommand] = useState("");  // 생성된 명령어
  const [copied, setCopied] = useState(false);  // 복사 상태

  // 체크박스 상태 처리
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedLibs(prev =>
      checked ? [...prev, value] : prev.filter(lib => lib !== value)
    );
  };

  // 명령어 생성
  const generateCommand = () => {
    const name = projectName.trim() || "my-app"; // 이름이 비었을 경우 기본값
    const commands = [`makevite ${name}`];

    selectedLibs.forEach(lib => {
      if (LIBRARIES[lib]) commands.push(LIBRARIES[lib]);
    });

    setCommand(commands.join(" && "));
    setCopied(false); // 명령어 생성 후 복사 상태 리셋
  };

  // 명령어 복사
  const copyCommand = () => {
    if (!command) return;

    navigator.clipboard.writeText(command)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        alert("❌ 복사에 실패했습니다. 브라우저 권한을 확인하세요.");
      });
  };

  return (
    <div className="viteReactKitContainer">
      <h3>Vite React</h3>

      <div className="projectName">
        <p>📦 Project Name</p>
        <input
          type="text"
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
          placeholder="my-app"
          className={isDark ? "inputDark" : ""}
        />  
      </div>

      <div className="checkbox">
        <label><input type="checkbox" value="scss" onChange={handleCheckboxChange} />SCSS</label>
        <label><input type="checkbox" value="tailwind" onChange={handleCheckboxChange} />Tailwind</label><label>
          <input type="checkbox" value="mui" onChange={handleCheckboxChange} />
          MUI
        </label>
        <label>
          <input type="checkbox" value="react-router-dom" onChange={handleCheckboxChange} />
          React Router DOM
        </label>
      </div>

      <div className="button-group">
        <button onClick={generateCommand}>명령어 생성</button>
        <button onClick={copyCommand}>복사</button>
        <span className="copied" id="copiedMsg">{copied && "☑️"}</span>
      </div>

      {command && (
        <div  className={isDark ? "output outputDark" : "output"} id="output">{command}</div>
      )}
    </div>
  );
};

export default ViteReactKit;
