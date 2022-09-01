import React from "react" ;
import {Link} from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Header = () =>{
  return (<header>
    <nav>
      <ul>
        <li>
        <a href="https://github.com/HiraPee"><GitHubIcon></GitHubIcon></a>
        </li>
        <li>
        <a href="https://github.com/HiraPee"><TwitterIcon></TwitterIcon></a>
        </li>
      </ul>
    </nav>

    <div className="logo">
      <h3>Horiuchi's Portfolio</h3>
    </div>

    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
        <Link to="/skill">PRODUCTION & SKILLS</Link>
        </li>
        <li>
        <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>

  </header>
  );

};

export default Header;
