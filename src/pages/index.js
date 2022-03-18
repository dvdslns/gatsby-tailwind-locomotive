import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
    <main id="wrapper" className="text-black snap-y snap-mandatory overflow-auto">
      <section className="min-h-screen snap-center snap-always flex flex-col items-center justify-center bg-pink-200">
        <h2 className="text-4xl font-bold">Una sección</h2>
      </section>
      <section className="min-h-screen snap-center snap-always flex flex-col items-center justify-center bg-blue-200">
        <h2 className="text-4xl font-bold">Una sección</h2>
      </section>
      <section className="h-[50vh] snap-center snap-always flex flex-col items-center justify-center bg-green-200">
        <h2 className="text-4xl font-bold">Una sección</h2>
      </section>
      <section className="h-[50vh] snap-center snap-always flex flex-col items-center justify-center bg-orange-200">
        <h2 className="text-4xl font-bold">Una sección</h2>
      </section>
      <section className="min-h-screen snap-center snap-always flex flex-col items-center justify-center bg-violet-200">
        <h2 className="text-4xl font-bold">Una sección</h2>
      </section>
    </main>
    </Layout>
  )
}

export default IndexPage
