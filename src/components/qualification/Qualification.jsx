import React, { useState } from "react";
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="section qualificaciton section" id="qualifications">
            <h2 className="section__title">Experiencia</h2>
            <span className="section__subtitle">Mi viaje personal</span>
            <div className="qualification_container container">
                <div className="qualification__tabs">

                    <div
                        className={toggleState === 1 ?
                            "qualification__button qualification__active button--flex" :
                            "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>Educación
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experiencia
                    </div>

                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
                        "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development Bootcamp</h3>
                                <span className="qualification__subtitle">Ironhack - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun-2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Master Big Data</h3>
                                <span className="qualification__subtitle">Inesem Business School - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Feb-2020
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master en Supply Chain & Managemenet</h3>
                                <span className="qualification__subtitle">EAE Business School - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun-2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Técnico Superior en Comercio Internacional
                                </h3>
                                <span className="qualification__subtitle">IES Pío Baroja - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun-2015
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Técnico Superior en Transporte y Logística</h3>
                                <span className="qualification__subtitle">IES Luis Braille - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun-2014
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
                        "qualification__content"}>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Coordinador de Aprovisionamientos</h3>
                                <span className="qualification__subtitle">Grupo Delgado - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Oct-22 / Mar-23
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Resp. Organización y Proyectos Logísticos</h3>
                                <span className="qualification__subtitle">Kiwoko SLU - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> May-21 / Oct-22
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Senior Demand Planner</h3>
                                <span className="qualification__subtitle">Kiwoko SLU - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Feb-20 / May-21
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Resp. Operaciones Logísticas</h3>
                                <span className="qualification__subtitle">Diana Casado SL - Madrid</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Jun-15 / Mar-19
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Qualification