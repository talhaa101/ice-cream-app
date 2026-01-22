
import logo from "../../html/images/logo.svg";
import reactlogo from "../../html/images/react.svg";
import classess from "./header.module.css";


const Header = () => {
  return (
    <div>
     <header>
        <div className={"container"}>
          <div>
            <img className={classess.logo} src={logo} alt="Logo" />
          </div>
          <div className="textRight">
            <img src={reactlogo} alt="React" className={classess.reactLogo} /><strong
              >React
              </strong>
          </div>
        </div>
      </header>
    </div>

  );

};

export default Header;