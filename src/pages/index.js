import React from 'react'
import Helmet from 'react-helmet'

import Projects from '../components/Projects'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'BLOGari - Ander F.L.'
  const siteDescription = 'Lanbide heziketako ikasgaien dokumentazioa'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Lanbide heziketako ikasgaien dokumentazioa.</h2>
          </header>
          <p>
            Hauek dira zikloak:
            <br />
            Plataforma Anitzeko Aplikazioen Garapena eta Sistema Informatikoen
            eta Sareen Administrazioa.
          </p>
          <h3>Plataforma Anitzeko Aplikazioen Garapena</h3>
          <ul className="course">
            <li>
              1. mailan
              <ul>
                <li>
                  <a href="https://sites.google.com/cuatrovientos.org/entornos-de-desarrollo">
                    Garapen inguruneak
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/drive/folders/1HUj-tu_bUuMlVlhQaLg-opHXobuIPtdp?usp=sharing">
                    Sistema informatikoa
                  </a>
                </li>
              </ul>
            </li>
            <li>
              2. mailan
              <ul>
                <li>
                  <a href="https://sites.google.com/cuatrovientos.org/desarrollo-web">
                    Web garapena
                  </a>
                </li>
                <li>
                  <a href="https://sites.google.com/cuatrovientos.org/desarrollo-interfaces">
                    Interfazeen garapena
                  </a>
                </li>
                <li>
                  <a href="https://sites.google.com/cuatrovientos.org/prog-servicios-procesos">
                    Prozezu eta zerbitzuen garapena
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <h3>Sistema Informatikoen eta Sareen Administrazioa</h3>
          <ul className="course">
            <li>
              1. mailan
              <ul>
                <li>
                  <a href="https://sites.google.com/cuatrovientos.org/implantacion-sistem-operativos">
                    Sistema eragileen ezartzea
                  </a>
                </li>
              </ul>
            </li>
            <li>
              2. mailan
              <ul>
                <li>Sareen eta interneten sistemak</li>
              </ul>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Proiektuak</h2>
          <Projects />
        </section>

        <section id="three">
          <h2>Idatzidazu helbide honetara!</h2>
          <p>Iradokizunak ongi etorriak dira.</p>
          <div className="row">
            <div className="col-12 col-sm-12">
              <ul className="labeled-icons">
                <li>
                  <div className="contact">
                    <h3 className="icon fa fa-home fa-2x">
                      <span className="label">Helbidea</span>
                    </h3>
                    <div className="p-3">
                      <p>Av. de San Jorge Etorbidea 2,</p>
                      <p>31012 Pamplona/Iruña</p>
                      <p>Navarra/Nafarroa</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="contact">
                    <h3 className="icon fa fa-mobile fa-2x">
                      <span className="label">Tlf.:</span>
                    </h3>
                    <p className="p-3">948 12 41 29</p>
                  </div>
                </li>
                <li>
                  <div className="contact">
                    <h3 className="icon fa fa-envelope-o fa-2x">
                      <span className="label">Email</span>
                    </h3>
                    <a className="p-3" href="#">
                      nau_frago@cuatrovientos.org
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
