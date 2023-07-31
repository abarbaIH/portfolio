import React from "react";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Álvaro Barba</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">Sobre mí</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Proyectos</a>
                    </li>

                    {/* <li>
                        <a href="#qualifications" className="footer__link">Qualifications</a>
                    </li> */}
                </ul>

                <div className="footer__social">
                    {/* <a href="https://www.codewars.com/users/abarbaIH" className="footer__social-link" target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a> */}

                    <a href="https://www.linkedin.com/in/alvaro-barba/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/abarbaIH" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Álvaro_Barba. Todos los derechos reservados</span>
            </div>
        </footer>
    )
}

export default Footer