import Head from 'next/head'
import { AiFillFire } from 'react-icons/ai'
import { BsArrowRightShort } from "react-icons/bs"
import { useSpring, animated, config } from 'react-spring';

export default function Home() {
  function getYOffset(element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  }

  //Nav Animation
  const logoAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 0
  })
  const navAnimation1 = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 50
  })
  const navAnimation2 = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 100
  })
  const navAnimation3 = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 150
  })

  //Section Animation
  const homeAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 600
  })
  const projectsAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1000
  })
  const contactAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1200
  })

  return (
    <>
      <Head>
        <title>S T O I C</title>
        <meta name="description" content="Stoic portfolio page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className="flex justify-between items-center p-8 text-sm">
        <animated.a style={logoAnimation} href={'/'}>S T O I C</animated.a>
        <div className='flex gap-5 mask'>
          <animated.button style={navAnimation1} className="font-medium uppercase hover:underline" onClick={() => window.scrollTo({ top: getYOffset(document.getElementById('home')), behavior: 'smooth' })}>Home</animated.button>
          <animated.button style={navAnimation2} className="font-medium uppercase hover:underline text-[#727272]" onClick={() => window.scrollTo({ top: getYOffset(document.getElementById('projects')), behavior: 'smooth' })}>Projects</animated.button>
          <animated.button style={navAnimation3} className="font-medium uppercase hover:underline text-[#727272]" onClick={() => window.scrollTo({ top: getYOffset(document.getElementById('contact')), behavior: 'smooth' })}>Contact</animated.button>
        </div>
      </div>

      {/* Home */}
      <animated.div style={homeAnimation} id="home" className="bg-[#131315] mb-5 mx-7 rounded-3xl flex flex-col justify-center items-center md:p-5">
        <div className="p-16 text-center flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl md:text-6xl font-bold text-start">Brand growth through <br/> Web Development.</h1>
          <p className="text-[#54545D] m-3">Crafting beautiful and responsive websites, tailored to your
            business needs.<br /> Specializing in modern web technologies to help
            bring your ideas to life.</p>
          <button className="text-white bg-[var(--highlight)] w-fit py-3 m-4 rounded-full flex justify-center items-center gap-3 px-5 transition-all hover:scale-110" onClick={() => window.location.href = 'mailto:sphe.g.personal@gmail.com'}>
            Contact Me
            <BsArrowRightShort className="text-[var(--highlight)] bg-white rounded-full" size={25}/>
          </button>
        </div>
      </animated.div>

      {/* Projects */}
      <animated.div style={projectsAnimation} id="projects" className="flex flex-col md:flex-row justify-between w-full gap-5 px-7 pb-5">
        <a className='sphe-editing w-full p-5 rounded-3xl h-[300px] flex justify-start items-end shadow-sm' href="https://sphe.vercel.app" target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between items-center w-full">
              <h1 className="text-white text-2xl font-medium cursor-default">Sphe Editing Website</h1>
              <BsArrowRightShort className="text-[var(--highlight)] bg-white rounded-full transition-all hover:scale-125" size={30} />
            </div>
        </a>
        <a className="sphe-portfolio w-full p-5 rounded-3xl h-[300px] flex justify-start items-end shadow-sm" href="https://sphe-portfolio.vercel.app" target="_blank" rel="noopener noreferrer">
            <div className="flex justify-between items-center w-full">
              <h1 className="text-white text-2xl font-medium cursor-default">Sphe Portfolio Website</h1>
              <BsArrowRightShort className="text-[var(--highlight)] bg-white rounded-full transition-all hover:scale-125" size={30} />
            </div>
        </a>
      </animated.div>

        {/* Contact */}
        <animated.div style={contactAnimation} id="contact" className="bg-[#131315] mb-5 mx-7 rounded-3xl flex flex-col justify-center items-center p-20">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Have a cool project?</h1>
          <p className="text-[#54545D] m-3">Feel free to reach out for collaborations or just a friendly hello</p>
          <button className="text-white bg-[var(--highlight)] w-fit py-3 mt-4 rounded-full flex justify-center items-center gap-3 px-5 transition-all hover:scale-110" onClick={() => window.location.href = 'mailto:sphe.g.personal@gmail.com'}>
            Contact Me
            <BsArrowRightShort className="text-[var(--highlight)] bg-white rounded-full" size={25}/>
          </button>
        </animated.div>
    </>  )
}
