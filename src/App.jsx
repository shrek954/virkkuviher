import "./App.css";

import heroImage from "./assets/hero.jpg";
import sammalImage from "./assets/sammal.jpg";
import aaltoImage from "./assets/aalto.jpg";
import lehtiImage from "./assets/lehti.jpg";
import lahjaImage from "./assets/lahja-pieni.jpg";
import bannerImage from "./assets/banner.jpg";

function App() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          🌿 Virkkuviher
        </div>

        <nav className="nav-links">
          <a href="#tuotteet">Kauppa</a>
          <a href="#meista">Meistä</a>
          <a href="#yhteystiedot">Yhteystiedot</a>
        </nav>

        <div className="cart">
          🛒
        </div>
      </header>

      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>
            Käsintehtyä lämpöä
            <br />
            kasveillesi
          </h1>

          <p>
            Virkatut ruukunsuojat ja kasvikoristeet
            tuovat persoonallisuutta kotiisi.
          </p>

          <div className="buttons">
            <button className="primary">
              Tutustu tuotteisiin
            </button>

            <button className="secondary">
              Meidän tarinamme
            </button>
          </div>
        </div>
      </section>

      <section className="products" id="tuotteet">
        <h2>Suosituimmat tuotteet</h2>

        <div className="product-grid">

          <div className="product-card">
            <img
              src={sammalImage}
              alt="Sammal-ruukunsuoja"
            />

            <h3>Sammal-ruukunsuoja</h3>

            <p className="price">
              19,90 €
            </p>

            <button>
              Lisää ostoskoriin
            </button>
          </div>

          <div className="product-card">
            <img
              src={aaltoImage}
              alt="Aalto-ruukunsuoja"
            />

            <h3>Aalto-ruukunsuoja</h3>

            <p className="price">
              22,90 €
            </p>

            <button>
              Lisää ostoskoriin
            </button>
          </div>

          <div className="product-card">
            <img
              src={lehtiImage}
              alt="Lehti-koriste"
            />

            <h3>Lehti-koriste</h3>

            <p className="price">
              12,90 €
            </p>

            <button>
              Lisää ostoskoriin
            </button>
          </div>

          <div className="product-card">
            <img
              src={lahjaImage}
              alt="Lahjapaketti Pieni"
            />

            <h3>Lahjapaketti Pieni</h3>

            <p className="price">
              29,90 €
            </p>

            <button>
              Lisää ostoskoriin
            </button>
          </div>

        </div>
      </section>
      <section className="why" id="meista">
  <h2>Miksi Virkkuviher?</h2>

  <div className="why-grid">
    <div className="why-card">
      <h3>🌿 Käsintehty Suomessa</h3>
      <p>
        Jokainen tuote valmistetaan huolellisesti käsin, yksityiskohtia arvostaen.
      </p>
    </div>

    <div className="why-card">
      <h3>♻️ Kestävät materiaalit</h3>
      <p>
        Käytämme laadukkaita ja pitkäikäisiä materiaaleja, jotka kestävät aikaa.
      </p>
    </div>

    <div className="why-card">
      <h3>🎁 Täydellinen lahjaksi</h3>
      <p>
        Virkkuviher-tuotteet sopivat kauniiksi lahjoiksi kasvien ystäville.
      </p>
    </div>
  </div>
</section>
<section
  className="banner"
  style={{
    backgroundImage: `url(${bannerImage})`,
  }}
>
  <div className="banner-overlay"></div>

  <h2>
    Kasvit tekevät kodin
  </h2>
</section>


<footer className="footer" id="yhteystiedot">
  <div className="footer-content">

    <div className="footer-brand">
  <span className="footer-logo">🌿</span>
  <h2>Virkkuviher</h2>
</div>

    <div className="footer-links">
      <a href="#">Toimitustiedot</a>
      <a href="#">Tietosuojaseloste</a>
    </div>

    <div className="footer-social">
      <p>🪴 Kasvi-ideat</p>
      <p>🧶 Virkkausvinkit</p>
      <p>🎁 Lahjaideat</p>
    </div>

  </div>
</footer>

</>
  );
}

export default App;