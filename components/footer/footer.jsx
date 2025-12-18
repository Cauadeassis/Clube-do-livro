export default function Footer() {
  return (
    <>
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
    </>
  )
}
