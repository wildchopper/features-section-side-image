import './App.css'
import featuresImage from './assets/unsplash_rAtzDB6hWrU.jpg'
export default function App() {
  return (
    <>
      <div className='wrapper'>
        <section className='features'>
          <div className='features__header'>
            <div className='features__titles'>
              <h2 className='features__eyebrow'>High quality images</h2>
              <h1 className='features__title'>For designers, by designers</h1>
            </div>
            <p className='features__description'>Unleash boundless creativity with a large repository of images optimized for designers</p>
          </div>

          <div className='features__content'>
            <ul className='features__list'>
              <li className='features__item'>
                <h3 className='features__item-title'>5K resolution support</h3>
                <p className='features__item-text'>All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.</p>
              </li>
              <li className='features__item'>
                <h3 className='features__item-title'>From water to glass</h3>
                <p className='features__item-text'>We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.</p>
              </li>
              <li className='features__item'>
                <h3 className='features__item-title'>Portrait or landscape</h3>
                <p className='features__item-text'>Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories.</p>
              </li>
            </ul>
          </div>
          <div className='features__image-frame'>
            <img className='features__image' src={featuresImage} alt='' />
          </div>
         
        </section>
      </div>




      <div className="credits">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          >GreatFrontEnd Projects</a>. Built by
        <a href="https://www.greatfrontend.com/u/your_username" target="_blank"
          >Your Name</a>.
      </div>
    </>
  )
}
