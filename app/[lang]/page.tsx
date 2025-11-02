import { getDictionary } from '@/dictionaries'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'pt' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <Header dict={dict} lang={lang} />
      <main className="font-sans">
        <Hero dict={dict.hero} />
        <About dict={dict.about} />
        <Projects dict={dict.projects} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}