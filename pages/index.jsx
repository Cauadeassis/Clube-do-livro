import Head from "next/head";

export default function InitialPage() {
  return (
    <>
      <Head>
        <title>Clube do Livro</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <main>
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
          <section>
            <div>
              <img src="/vectors/star.svg" alt="small Star" />
              <h2>Conheça o kit mensal</h2>
              <img src="/vectors/star.svg" alt="small Star" />
              <p>Recebe uma caixa surpresa todos os meses</p>
            </div>
            <div>
              <img src="/images/book.png" alt="Livro" />
              <img src="/bookmarks/purple.png" alt="Marcador roxo" />
              <img src="/bookmarks/yellow.png" alt="Marcador amarelo" />
              <img src="/images/pin.png" alt="Broches do livro" />
              <div>
                <p>Marca páginas temático</p>
                <img src="/arrows/01.svg" alt="" />
              </div>
              <div>
                <p>Broche exclusivo</p>
                <img src="/arrows/02.svg" alt="" />
              </div>
              <div>
                <p>Livro em capa dura</p>
                <img src="/arrows/03.svg" alt="" />
              </div>
            </div>
          </section>
          <section>
            <div>
              <h2>
                Assinatura <br /> Encantos Literários
              </h2>
            </div>
            <div>
              <div>
                <h3>Mensal</h3>
                <div>
                  <h3>R$ 59,90/mês</h3>
                  <p>R$ 718,80 por ano</p>
                </div>
                <ul>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Kit mensal com livro temático</p>
                  </li>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Broche e marca páginas exclusivo</p>
                  </li>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Acesso à comunidade literária</p>
                  </li>
                </ul>
                <button type="button">Assinar mensal</button>
              </div>
              <div>
                <div>
                  <h3>Semestral</h3>
                  <span>Popular</span>
                </div>
                <div>
                  <h3>R$ 52,90/mês</h3>
                  <p>R$ 634,80 por ano</p>
                </div>
                <ul>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Kit mensal com livro temático</p>
                  </li>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Broche e marca páginas exclusivo</p>
                  </li>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Acesso à comunidade literária</p>
                  </li>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Membro premium do clube</p>
                  </li>
                </ul>
                <button type="button">Assinar semestral</button>
              </div>
              <div>
                <h3>Anual</h3>
                <div>
                  <h3>R$48,90/mês</h3>
                  <p>R$ 586,80 por ano</p>
                </div>
                <ul>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Kit mensal com livro temático</p>
                  </li>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Broche e marca páginas exclusivo</p>
                  </li>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Acesso à comunidade literária</p>
                  </li>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Membro premium do clube</p>
                  </li>
                  <li>
                    <img src="/vectors/star.svg" alt="" />
                    <p>Planner anual de leituras</p>
                  </li>
                </ul>
                <button type="button">Assinar anual</button>
              </div>
            </div>
          </section>
        </main>
        <footer>
          {/*background Image = /images/footer-background.png*/}
          <div>
            <img src="/vectors/logo-horizontal.svg" alt="Logo do Clube do Livro" />
            <div>
              <img src="/vectors/instagram.svg" alt="Logo do Instagram" />
              <img src="/vectors/facebook.svg" alt="Logo do Facebook" />
              <img src="/vectors/discord.svg" alt="Logo do Discord" />
              <img src="/vectors/mail.svg" alt="Logo do Email" />
              <img src="/vectors/twitter.svg" alt="Logo do Twitter" />
              <img src="/vectors/whatsapp.svg" alt="Logo do Whatsapp" />
            </div>
          </div>
          <div>
            <div>
              <h3>Conteúdos</h3>
              <ul>
                <li>Kits passados</li>
                <li>Clube de membros</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3>Ajuda</h3>
              <ul>
                <li>Central de ajuda</li>
                <li>Regulamentos</li>
                <li>Suporte</li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}
