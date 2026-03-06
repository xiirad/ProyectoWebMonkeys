import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './css/hero.css'
import './css/carta.css'
import './css/burgers-especiales.css'
import './css/sobre-nosotros.css'
import './css/legal.css'

import NavegacionSuperior from './secciones/NavegacionSuperior.jsx'
import SeccionHero from './secciones/SeccionHero.jsx'
import SeccionCarta from './secciones/SeccionCarta.jsx'
import SeccionBurgersEspeciales from './secciones/SeccionBurgersEspeciales.jsx'
import SeccionSobre from './secciones/SeccionSobre.jsx'
import SeccionLegal from './secciones/SeccionLegal.jsx'

gsap.registerPlugin(ScrollTrigger)

function PaginaMonkeys() {
  const paginaRef = useRef(null)

  useEffect(() => {
    if (!paginaRef.current) return

    const ctx = gsap.context(() => {
      gsap.from('.logo_imagen_monkeys', {
        scale: 2.5,
        opacity: 0,
        duration: 1.1,
        ease: 'back.inOutw',
      })

      gsap.utils.toArray('.seccion_bloque').forEach((seccion) => {
        gsap.from(seccion, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: seccion,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      gsap.from('.grupo_carta_simple', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#seccion_carta',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.tarjeta_burger_carta', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: '#seccion_carta',
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.tarjeta_especial', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#seccion_burgers_especiales',
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.bloque_sobre', {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '#seccion_sobre',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from('.pie_monkeys', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#seccion_legal',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    }, paginaRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="pagina_monkeys" ref={paginaRef}>
      <NavegacionSuperior />
      <main className="contenido_monkeys">
        <SeccionHero />
        <SeccionCarta />
        <SeccionBurgersEspeciales />
        <SeccionSobre />
        <SeccionLegal />
      </main>
    </div>
  )
}

export default PaginaMonkeys

