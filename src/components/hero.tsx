import Container from "./Container";




const Hero = () => {
    return (
        <Container className="container flex flex-wrap">
            <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Free Landing Page Template for startups
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nextly is a free landing page & marketing website
              template for startups and indie projects. Its built with
              Next.js & TailwindCSS. And its completely open-source.
            </p>
            </div>
            </div>
        </Container>
    )
}

export default Hero;