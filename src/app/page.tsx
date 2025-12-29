import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import Installation from '@/components/Installation'
import QuickStart from '@/components/QuickStart'
import Commands from '@/components/Commands'
import FAQ from '@/components/FAQ'
import Documentation from '@/components/Documentation'
import Footer from '@/components/Footer'
import { Main } from '@/components/elements/main'

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <ProblemStatement />
        <HowItWorks />
        <Features />
        <UseCases />
        <Installation />
        <QuickStart />
        <Commands />
        <FAQ />
        <Documentation />
      </Main>
      <Footer />
    </>
  )
}