import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={['container', classes.container].join(' ')}>
                <div>Copyright &copy;2020.</div>
                <div className="textRight">
                    Powered by 
                    <a target="_blank" href="https://www.facebook.com/talhaOabu/"><strong> Abu Talha</strong></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
