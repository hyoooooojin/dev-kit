import React, { useRef, useState } from 'react';
import './githubPagesKit.scss';

const GithubPagesKit = ({ isDark }) => {
  const repoInputRef = useRef();
  const username = 'hyoooooojin';
  const [commands, setCommands] = useState([]);
  const [copyStatus, setCopyStatus] = useState({});

  const generate = () => {
    const repo = repoInputRef.current.value.trim();
    if (!repo) {
      alert('레포지토리 이름을 입력하세요!');
      return;
    }

    const gitRemote = `git remote add origin https://github.com/${username}/${repo}.git`;
    const homepage = `"homepage": "https://${username}.github.io/${repo}/"`;
    const base = `base: '/${repo}/',`;

    setCommands([
      {
        id: 'cmd1',
        title: '📦 Repository URL',
        content: `https://github.com/${username}/${repo}.git`,
      },
      {
        id: 'cmd2',
        title: '🏡 Github-pages URL',
        content: `https://${username}.github.io/${repo}/`,
      },
      {
        id: 'cmd3',
        title: '→ terminal',
        content: `git init && git add . && git commit -m "🧸"`,
      },
      {
        id: 'cmd4',
        title: '→ terminal',
        content: `${gitRemote} && git push -u origin main`,
      },
      {
        id: 'cmd5',
        title: '→ package.json (add homepage)',
        content: `${homepage},`,
      },
      {
        id: 'cmd6',
        title: '→ package.json (add scripts)',
        content: `"preview": "vite preview",\n"predeploy": "yarn build",\n"deploy": "gh-pages -d dist"`,
      },
      {
        id: 'cmd7',
        title: '→ vite.config.js',
        content: `${base}`,
      },
      {
        id: 'cmd8',
        title: '→ terminal',
        content: `yarn add --dev gh-pages && yarn build && yarn deploy`,
      },
      {
        id: 'cmd9',
        title: '→ terminal',
        content: `echo "🏡 ${homepage}" >> README.md && git add README.md && git commit -m "🏡" && git push`,
      },
    ]);
  };

  const handleCopy = (id) => {
    const textEl = document.getElementById(id);
    if (textEl) {
      navigator.clipboard.writeText(textEl.innerText).then(() => {
        setCopyStatus((prevState) => ({
          ...prevState,
          [id]: '☑️',
        }));
        setTimeout(() => {
          setCopyStatus((prevState) => ({
            ...prevState,
            [id]: 'copy',
          }));
        }, 2000);
      }).catch((err) => alert('복사 실패: ' + err));
    }
  };

  return (
    <div className="githubPagesKitContainer">
      <h3>Github Pages</h3>
      <p>📄 Repository</p>
      <input
        className={isDark ? 'inputBox inputBoxDark' : 'inputBox'}
        ref={repoInputRef}
        type="text"
        placeholder="레포지토리 이름을 입력하세요"
      />
      <button className="createBtn" onClick={generate}>
        생성
      </button>
      <div style={{ marginTop: '2rem' }}>
        {commands.map((command) => (
          <div>
          <div className='title'>
            <span className="url-name">{command.title}</span>
            <button
              className={`copy-btn ${copyStatus[command.id] === '☑️' ? 'copied' : ''}`}
              onClick={() => handleCopy(command.id)}
              data-copy={command.id}
            >
              {copyStatus[command.id] || 'copy'}
            </button>
          </div>
          <div key={command.id} className={isDark ? 'pre-block preDark' : 'pre-block'}>
            <pre id={command.id}>{command.content}</pre>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubPagesKit;
