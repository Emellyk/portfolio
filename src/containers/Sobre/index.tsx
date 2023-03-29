import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Eu estou em constante aprendizado, no momento, se aprofundando no
      conhecimento de tecnologia, fazendo curso de Desenvolvimento Full Stack
      Python. Aproveitando uma carreira na área de informática, ao qual tive o
      prazer de Coordenar um time de Professores em uma Escola de Informática.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=emellyk&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=emellyk&layout=compact&langs_count=7&theme=tokyonight" />
    </GithubSecao>
  </section>
)

export default Sobre
