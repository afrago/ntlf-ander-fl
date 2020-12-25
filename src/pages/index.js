import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
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
          <ol>
            <li>
              mailan
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
              mailan
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
          </ol>
          <h3>Sistema Informatikoen eta Sareen Administrazioa</h3>
          <ol>
            <li>
              mailan
              <ul>
                <li>
                  <a href="https://sites.google.com/cuatrovientos.org/implantacion-sistem-operativos">
                    Sistema eragileen ezartzea
                  </a>
                </li>
              </ul>
            </li>
            <li>
              mailan
              <ul>
                <li>Sareen eta interneten sistemak</li>
              </ul>
            </li>
          </ol>

        </section>

        <section id="two">
          <h2>Proiektuak</h2>

          <Gallery />

        </section>

        <section id="three">
          <h2>Idatzidazu helbide honetara!</h2>
          <p>
            Iradokizunak ongi etorriak dira.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Izena"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Emaila"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Mezua"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Bidali" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Helbidea</span>
                  </h3>
                  Av. de San Jorge Etorbidea 2,
                  <br />
                  31012 Pamplona/Iruña
                  <br />
                  Navarra/Nafarroa
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Tlf.:</span>
                  </h3>
                  948 12 41 29
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">nau_frago@cuatrovientos.org</a>
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
