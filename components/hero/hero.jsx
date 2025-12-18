import styles from "./hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.firstSectionContainer}>
          <nav>
            <img
              src="/vectors/logo-horizontal.svg"
              alt="Logo do Clube do Livro"
            />
            <a>
              <span>Assinar</span>
            </a>
          </nav>
          <div className={styles.title}>
            <h1>Desperte a sua imaginação e explore novos mundos</h1>
            <p>
              Junte-se ao clube de assinatura Encantos Literários e descubra
              maravilhas e aventuras a cada página
            </p>
          </div>
        </div>
        <div className={styles.secondSectionContainer}>
          <img src="/images/crystal-ball.png" alt="Crystal ball" />
          <p>
            <span>
              Receba todo mês um <strong>livro surpresa</strong> {" "}
            </span>
            <span>
              do seu tema favorito, acompanhado de{" "}
              <strong>brindes exclusivos</strong> {" "}
            </span>
            <span>
              que tornarão a sua experiência literária{" "}
              <strong>encantadora</strong>
            </span>
          </p>
          <div>
            <img src="/images/ouija.png" alt="Ouija board" />
            <img src="/images/spellbook.png" alt="Spellbook" />
          </div>
        </div>
      </section>
    </>
  );
}
