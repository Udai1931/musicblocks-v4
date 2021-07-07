// -- types ----------------------------------------------------------------------------------------

import { IMenuProps } from '../../@types/menu';

// -- stylesheet -----------------------------------------------------------------------------------

import './Menu.scss';

// -- view component definition --------------------------------------------------------------------

/**
 * View of the Menu component.
 *
 * @param props - React props (title)
 * @returns root JSX element
 */
export default function (props: IMenuProps): JSX.Element {
  return (
    <div>
      <div
        className="auto-hide-overlay"
        onMouseEnter={() => props.toggleAutoHide()}
        onMouseLeave={() => {
          props.toggleAutoHide();
        }}
      ></div>
      <div
        id="menu-wrapper"
        onMouseEnter={() => props.toggleAutoHideTemp()}
        onMouseLeave={() => props.toggleAutoHideTemp()}
      >
        <div
          className={
            props.autoHide && props.autoHideTemp
              ? 'menu-dock menu-dock-inactive'
              : 'menu-dock menu-dock-active'
          }
        >
          <nav>
            <ul>
              <li className="main-menu-btn">
                <div>
                  Music Blocks
                  <span className={props.settingsMenuVisible ? 'inactive-menu' : ''}>
                    Music Blocks
                  </span>
                </div>
              </li>
              <hr></hr>
              <li className="main-menu-btn">
                <div onClick={() => props.togglePlayMenu()}>
                  Play
                  <span className={props.settingsMenuVisible ? 'inactive-menu' : ''}>Play</span>
                </div>
                <div className={props.playMenuVisible ? 'dropdown-active' : 'inactive-menu'}>
                  <button onClick={() => props.togglePlayMenu()} className="dropdown-btn">
                    Play
                  </button>
                  <button onClick={() => props.togglePlayMenu()} className="dropdown-btn">
                    Play Slowly
                  </button>
                  <button onClick={() => props.togglePlayMenu()} className="dropdown-btn">
                    Play Step by Step
                  </button>
                </div>
              </li>
              <hr></hr>
              <li className="main-menu-btn">
                <div>
                  Search
                  <span className={props.settingsMenuVisible ? 'inactive-menu' : ''}>Search</span>
                </div>
              </li>
              <li className="main-menu-btn">
                <div>
                  Undo
                  <span className={props.settingsMenuVisible ? 'inactive-menu' : ''}>Undo</span>
                </div>
              </li>
              <li className="main-menu-btn">
                <div>
                  Redo
                  <span className={props.settingsMenuVisible ? 'inactive-menu' : ''}>Redo</span>
                </div>
              </li>
              <hr></hr>
              <li className="main-menu-btn">
                <div>
                  Hide Blocks
                  <span className={props.settingsMenuVisible ? 'inactive-menu' : ''}>
                    Hide Blocks
                  </span>
                </div>
              </li>
              <li className="main-menu-btn">
                <div>
                  Clean
                  <span className={props.settingsMenuVisible ? 'inactive-menu' : ''}>Clean</span>
                </div>
              </li>
              <li className="main-menu-btn">
                <div>
                  Collapse Blocks
                  <span className={props.settingsMenuVisible ? 'inactive-menu' : ''}>
                    Collapse Blocks
                  </span>
                </div>
              </li>
              <hr></hr>
              <li className="main-menu-btn">
                <div onClick={() => props.toggleProjectMenu()}>
                  Project
                  <span className={props.settingsMenuVisible ? 'inactive-menu' : ''}>
                    Project Settings
                  </span>
                </div>
                <div className={props.projectMenuVisible ? 'dropdown-active' : 'inactive-menu'}>
                  <button
                    onClick={() => {
                      props.toggleProjectMenu();
                    }}
                    className="dropdown-btn"
                  >
                    Save Project
                  </button>
                  <button onClick={() => props.toggleProjectMenu()} className="dropdown-btn">
                    Load Project
                  </button>
                  <button onClick={() => props.toggleProjectMenu()} className="dropdown-btn">
                    New Project
                  </button>
                  <button onClick={() => props.toggleProjectMenu()} className="dropdown-btn">
                    Merge Project
                  </button>
                </div>
              </li>
              <li className="main-menu-btn">
                <div onClick={() => props.toggleLanguageMenu()}>
                  Language
                  <span className={props.settingsMenuVisible ? 'inactive-menu' : ''}>Language</span>
                </div>
                <div
                  className={
                    props.languageMenuVisible ? 'dropdown-active language-menu' : 'inactive-menu'
                  }
                >
                  {props.languages.map((lang) => (
                    <button
                      onClick={() => props.changeLanguage(lang)}
                      className="dropdown-btn"
                      value={lang}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </li>
              <li className="main-menu-btn">
                <div onClick={() => props.toggleSettingsMenu()}>
                  Settings
                  <span className={props.settingsMenuVisible ? 'inactive-menu' : ''}>Settings</span>
                </div>
                <div
                  className={props.settingsMenuVisible ? 'settings-menu-active' : 'inactive-menu'}
                >
                  <button>
                    Horizontal Scroll
                    <label className="switch">
                      <input type="checkbox" />
                    </label>
                  </button>
                  <button>
                    Turtle Wrap
                    <label className="switch">
                      <input type="checkbox" />
                    </label>
                  </button>
                  <button onClick={() => props.toggleSettingsMenu()}>Increase Block Size</button>
                  <button onClick={() => props.toggleSettingsMenu()}>Decrease Block Size</button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
