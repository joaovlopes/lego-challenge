import './home.scss';
import Publications from '../publications/publications.tsx';

import { MainPublications } from '@/constants/main-publications.ts'

function Home() {

  // const videoId = 'jEomUzj6cRY'

  // const opts = {
  //   height: '315',
  //   width: '560',
  //   playerVars: {
  //     autoplay: 1,
  //     controls: 0,
  //     modestbranding: 1,
  //     fs: 0,
  //     rel: 0,
  //     showinfo: 0,
  //     disablekb: 1,
  //   },
  // };

  // const onReady = (event: { target: any }) => {
  //   // Oculta o título do vídeo
  //   event.target.hideVideoInfo();
  // };

  return (
    <div className='homeContainer'>
      <div className='videoTeste'>
      {/* <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/jEomUzj6cRY?autoplay=1&controls=0"
        allow="autoplay; encrypted-media" 
      >
      </iframe> */}

      {/* <YouTube videoId={videoId} opts={opts} onReady={onReady} /> */}
      </div>

      <div>
        <h1 className='titleMain'>Welcome to the Play Matters Interactive Lookbook</h1>

        <div className='contentMain'>
          {MainPublications.map((publication) => (
            <Publications key={publication.name} posts={publication.posts} name={publication.name} style={publication.style}/>
          ))}
        </div>
      </div>

      <footer>
        <p>LEGO, the LEGO logo and the Brick and Knob configurations are trademarks of the LEGO Group. ©2022 The LEGO Group.</p>
      </footer>
    </div>
  )
}

export default Home