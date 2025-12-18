export default function Hero() {
  return (
    <>
      <hero>
        {/*background Image = /images/hero-background.png*/}
        <nav>
          <img
            src="/vectors/logo-horizontal.svg"
            alt="Logo do Clube do Livro"
          />
          <a>
            <span>Assinar</span>
          </a>
        </nav>
        <div>
          <h1>Desperte a sua imaginação e explore novos mundos</h1>
          <p>
            Junte-se ao clube de assinatura Encantos Literários e descubra
            maravilhas e aventuras a cada página{" "}
          </p>
        </div>
        <section>
          <img src="/icons/crystal-ball.png" alt="Crystal ball" />
          <img src="/icons/ouija.png" alt="Ouija board" />
          <img src="/icons/spellbook.png" alt="Spellbook" />
          <p>
            Receba todo mês um <span>livro surpresa</span> do seu tema
            favorito, acompanhado de <span>brindes exclusivos</span> que
            tornarão a sua experiência literária <span>encantadora</span>
          </p>
        </section>
      </hero>
    </>
  )
}
