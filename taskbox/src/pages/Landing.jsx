import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './landing.module.scss'
import { Button, Input } from '../ui'

function Landing () {
  const cards = [
    {
      image: '',
      date: '28 Noviembre 2023 / 18:00 a 21:00 Chile',
      title: 'Accesibilidad web',
      content: 'Carolina Aguilera - Especialista Accesibilidad Web',
      button: true
    },
    {
      image: '',
      date: '21 Noviembre 2023 / 18:00 a 21:00 Chile',
      title: 'Sistemas de diseño',
      content: 'Constanza Echeverría y Gustavo Astorga - Technical Lead y Diseñador UI',
      button: true
    },
    {
      image: '',
      date: '14 Noviembre 2023 / 18:00 a 21:00 Chile',
      title: 'Arquitectura de información',
      content: 'Matías Silva - Diseñador UX',
      button: true
    },
  ]
  return <main>
    <Header />
    <div className="container">
      <section className={styles.hero}>
        <div className={styles.card}>
          <h2>Sistemas de Diseño</h2>
          <p>Un sistema de diseño es una colección de componentes reutilizables y estándares claros que se pueden ensamblar para crear cualquier cantidad de aplicaciones.</p>
          <Button primary={true} size="large" label={'Comprar'} />
        </div>
        <div className={styles.imagen}></div>
      </section>
      <section className={styles.courses}>
        <h2>Nuestros cursos</h2>
        <div className={styles.cards}>
          {cards.map(item => (<div className='column'>{item.title}</div>))}
        </div>
      </section>
      <section className={styles.contact}>
        <div className={`column ${styles.imagen}`}></div>
        <div className="column">
          <form className={styles.form}>
            <h2>Contáctanos</h2>
            <Input label="Nombre" placeholder="Escribe tu nombre" />
            <Input label="Correo electrónico" placeholder="Escribe tu correo" />
            <Input label="Número de teléfono" placeholder="Escribe tu número" />
            <Button primary={true} label={'Enviar'} />
          </form>
        </div>
      </section>
    </div>
    <Footer />
  </main>
}

export default Landing
