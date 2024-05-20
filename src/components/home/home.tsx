import './home.scss';
import Publications from '../publications/publications.tsx';
import TheDreamWorld from '@/assets/the-dream-world.mp4'

import { MainPublications } from '@/constants/main-publications.ts'

function Home() {

  return (
    <main className='homeContainer'>
      <div className='video'>
        <video 
          autoPlay 
          muted 
          loop 
          id='videoShort'
        >
          <source src={TheDreamWorld} type='video/mp4'/>
        </video>

        <div className='testeControlsVideo'>
          <h2 className='titleMain'>
            Welcome to the Play Matters Interactive Lookbook
          </h2>
        </div>
      </div>

      <div>
        <div className='contentMain'>

          {MainPublications.map((publication) => (
            <Publications 
              key={publication.name} 
              posts={publication.posts} 
              name={publication.name} 
              style={publication.style}
            />
          ))}
          
        </div>
      </div>
    </main>
  )
}

export default Home