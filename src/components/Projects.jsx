import { dict } from '../data/data.js'
import { SectionHeading } from './Stats.jsx'
import ProjectCard from './ProjectCard.jsx'
import { useLanguage } from './contexts/LanguageContext.jsx'

export default function Projects() {
  const { language } = useLanguage()
  const projectList = dict[language].projects
  const labels = dict[language].projectLabels

  return (
    <section id="proyectos" className="relative py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow={language === 'es' ? "Banner de invocación" : "Summoning Banner"}
          title={language === 'es' ? "Proyectos destacados" : "Featured Projects"}
        />

        <div className="grid md:grid-cols-2 gap-7 mt-12">
          {projectList.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              repoText={labels.repo}
              liveText={labels.live}
            />
          ))}
        </div>
      </div>
    </section>
  )
}