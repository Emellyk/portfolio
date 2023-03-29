import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
      reiciendis, id recusandae eveniet harum temporibus! Omnis quia nemo minus
      facilis suscipit tempore corporis sapiente vero velit! Maxime doloremque
      facilis voluptate?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=emellyk&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=emellyk&layout=compact&langs_count=7&theme=tokyonight" />
    </GithubSecao>
  </section>
)

export default Sobre
