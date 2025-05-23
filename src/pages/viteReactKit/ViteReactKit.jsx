import React from 'react';
import "./viteReactKit.scss";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../../atoms/themeAtom";


const LIBRARIES = {
  scss: "yarn add sass -D",
  tailwind: "yarn add @tailwindcss/vite -D",
  mui: "yarn add @mui/icons-material @mui/material @emotion/styled @emotion/react",
  "react-router-dom": "yarn add react-router-dom",
};

const ViteReactKit = () => {
  const [projectName, setProjectName] = useState("");
  const [selectedLibs, setSelectedLibs] = useState([]);
  const [command, setCommand] = useState("");
  const [copied, setCopied] = useState(false);
  const isDark = useRecoilValue(darkModeState); // ✅ 다크모드 상태 불러오기

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedLibs((prev) =>
      checked ? [...prev, value] : prev.filter((lib) => lib !== value)
    );
  };

  const generateCommand = () => {
    const name = projectName.trim() || "my-app";
    const commands = [`makevite ${name}`];

    selectedLibs.forEach((lib) => {
      if (LIBRARIES[lib]) commands.push(LIBRARIES[lib]);
    });

    setCommand(commands.join(" && "));
    setCopied(false);
  };

  const copyCommand = () => {
    if (!command) return;

    navigator.clipboard
      .writeText(command)
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
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="my-app"
          className={isDark ? "inputDark" : ""}
        />
      </div>

      <div className="checkbox">
        <label>
          <input type="checkbox" value="scss" onChange={handleCheckboxChange} />
          SCSS
        </label>
        <label>
          <input
            type="checkbox"
            value="tailwind"
            onChange={handleCheckboxChange}
          />
          Tailwind
        </label>
        <label>
          <input type="checkbox" value="mui" onChange={handleCheckboxChange} />
          MUI
        </label>
        <label>
          <input
            type="checkbox"
            value="react-router-dom"
            onChange={handleCheckboxChange}
          />
          React Router DOM
        </label>
      </div>

      <div className="button-group">
        <button onClick={generateCommand}>명령어 생성</button>
        <button onClick={copyCommand}>복사</button>
        <span className="copied" id="copiedMsg">
          {copied && "☑️"}
        </span>
      </div>

      {command && (
        <div className={isDark ? "output outputDark" : "output"} id="output">
          {command}
        </div>
      )}
    </div>
  );
};

export default ViteReactKit;
