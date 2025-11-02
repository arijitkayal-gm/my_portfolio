import { useEffect, useState } from 'react'
import './App.css'
import Logo from './components/Logo'
import Footer from './components/Footer'
import { useRef } from 'react';
import Nav from './components/Nav'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis } from 'lenis/react';
import AnimatedIcon from './components/AnimatedIcon';
import Button from './components/Button';

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const topRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    const parallaxWrapper = document.querySelector("#parallax-wrapper");
    const parallaxBG = document.querySelectorAll('div[id*="parallax-bg-"]')
    const baseY = window.innerHeight / 24;

    const t0 = gsap.timeline({
      scrollTrigger: {
        trigger: parallaxWrapper,
        start: 'top top',
        scrub: true
      }
    })

    parallaxBG.forEach(bg => {
      const parallaxBgSpeed = bg.getAttribute('data-speed');
      t0.to(bg, {
        y: baseY * parallaxBgSpeed,
        duration: 2
      }, 0)
    })

    const topics = gsap.utils.toArray('.topic');
    topics.forEach((topic) => {
      let topicHeading = topic.querySelector('.topic-heading');
      let topicMedia = topic.querySelector('.topic-media');

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: topic,
          start: 'top bottom',
          end: 'bottom bottom ',
          scrub: true,
          markers: false,
        },
      });

      tl.fromTo(topicHeading, { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1 })
      tl.fromTo(topicMedia, { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 }, '<')
    });

    return () => {
      gsap.ticker.remove(update)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }
    , [])


  // Scroll function (pass this to Navbar)
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Feed A Cat",
      url: "https://feed-a-cat.vercel.app/",
      description: "A fun and interactive Next.js app where anyone can create a profile for a cat in need, share their story, and let others contribute with love (and money!).",
      imgSrc: "Feed-a-cat.png",
      imgAlt: "Frontend Development"
    },
    {
      title: "Halo Themes",
      url: "https://arijitkayal-gm.github.io/Myhalothemeapp/",
      description: "Halo Themes is a web-based music player dedicated to playing iconic Halo soundtracks. Built using HTML, CSS, and JavaScript, this application offers a nostalgic experience for Halo fans by featuring a curated list of themes accompanied by dynamic visuals.",
      imgSrc: "Halo-music.png",
      imgAlt: "Backend Integration"
    },
    {
      title: "World News",
      url: "https://newsapp-nu-henna.vercel.app/",
      description: "A modern Next.js-powered news app delivering the latest headlines with a sleek, responsive design.",
      imgSrc: "topnews.png",
      imgAlt: "UI/UX Design"
    },
    {
      title: "Text Editor",
      url: "https://arijitkayal-gm.github.io/Text-Editor/",
      description: "Designing intuitive user interfaces with attention to detail and accessibility.",
      imgSrc: "texteditor.png",
      imgAlt: "UI/UX Design"
    },
    {
      title: "SNAKE GAME",
      url: "https://arijitkayal-gm.github.io/Snakegame/",
      description: "Snake Game: Dive into the classic Snake game with a modern twist! Guide your snake across the board, eat food to grow longer, and avoid colliding with the walls or yourself.",
      imgSrc: "Snake-Game.png",
      imgAlt: "UI/UX Design"
    },
    {
      title: "TIC TAC TOE",
      url: "https://arijitkayal-gm.github.io/Tic-tac-toe-/",
      description: "A tic-tac-toe game created using HTML CSS and JAVASCRIPT.",
      imgSrc: "Tictactoe.png",
      imgAlt: "UI/UX Design"
    },
    {
      title: "To-Do List",
      url: "https://arijitkayal-gm.github.io/To-Do-List/",
      description: "A clean and minimal Todo App built with React and Tailwind CSS, featuring task management with local persistence and intelligent filtering.",
      imgSrc: "Todo.png",
      imgAlt: "UI/UX Design"
    }
  ];



  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />

      <div className='profile' ref={topRef}>

        <div id="parallax-wrapper">
          <div id="parallax-bg-1" data-speed="0.2" ></div>
          <div id="parallax-bg-2" data-speed="2" ></div>
          <div id="parallax-bg-3" data-speed="4" ></div>
          <div id="parallax-bg-4" data-speed="6" ></div>
          <div id="parallax-bg-5" data-speed="8" ></div>
          <div id="parallax-bg-6" data-speed="10" ></div>
        </div>

        <div>
          <div className='profile-text'>
            <Nav scrollToSection={scrollToSection} ref={{ topRef, workRef, aboutRef, contactRef }} isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className='profile-text-content'>
            <Logo logo={"Arijit Kayal"} />
          </div>
        </div>
      </div>


      <div className='containerDemo'>

        <div className="mouse-container">
          <AnimatedIcon />
        </div>

        <section className='section-text'>
          <h1 className='section-title'>Welcome to My Portfolio</h1>
          <p className='section-subtitle'>I am a passionate web developer with a focus on creating beautiful and functional web applications.</p>
          <p className='section-subtitle'>Explore my work and feel free to reach out!</p>
        </section>

        <section ref={aboutRef} className='section-text'>
          <h1 className='section-title'>About Me</h1>

          <div className="about">
            <div className="about-image">
              <img src="pr4.jpg" alt="personal picture" />
            </div>
            <div className="about-text">
              <p className='section-subtitle'>I am a web developer with a passion for creating dynamic and responsive web applications. I have experience in both frontend and backend development, and I love to learn new technologies.</p>
              <p className='section-subtitle'>I am proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB. I enjoy working on projects that challenge me and allow me to grow as a developer.</p>
              <p className='section-subtitle'>In my free time, I like to explore new technologies. Outside of coding, I'm a dedicated animal lover and an avid gamer who enjoys exploring virtual worlds as much as creating digital ones.</p>
              <p className='section-subtitle'>Feel free to check out my projects and get in touch!</p>
            </div>

          </div>
        </section>

        <section className='section-text' ref={workRef}>
          <h1 className='section-title'>My Projects</h1>
        </section>

        {projects.map((project, index) => (
          <section className="topic" key={index}>
            <div className="topic-heading">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.url}><Button btnName="Discover" className="project-button" textClassName='project-button-text' /></a>
            </div>
            <div className="topic-media">
              <div className="imagebox">
                <img src={project.imgSrc} alt={project.imgAlt} className='project-image' />
              </div>
            </div>
          </section>
        ))}


        <section className="section-text contact-section" ref={contactRef}>
          <h2 className="section-title">Contact Me</h2>
          <ul className="section-subtitle">
            <li className="contact-item">
              <span className="contact-label">Address:</span> Village Balarampur, Post Office Bonhooghly, South 24 Parganas, West Bengal, India
            </li>
            <li className="contact-item">
              <span className="contact-label">Email:</span> <a href="mailto:arijitkayal686@gmail.com" className="contact-link">arijitkayal686@gmail.com</a>
            </li>
            <li className="contact-item">
              <span className="contact-label">Phone:</span> +91 62906 86431
            </li>
          </ul>
        </section>



      </div>
      <Footer />
    </>
  )
}

export default App
