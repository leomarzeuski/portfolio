import { getDictionary } from '@/dictionaries'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
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
      </main>
      <Footer dict={dict} lang={lang} />
    </>
  )
}