import './publications.scss'
import ButtonDefault from '../button/button';

interface publicationProps {
    name: string;
    style: string;
    posts: Posts[]
}

export type Posts = {
  title: string;
  text: string;
  description: string;
  shortSummary: string;
  image: string;
}

function Publications({posts, name, style}: publicationProps) {
    console.log(posts, name, style);
    

    return (
        <div className="postContentGroup">
              {posts.map((content, index) => (
                <div 
                  key={name}
                  className={index > 0 ? 'borderBottom' : '' || posts.length <= 1 ? 'borderBottom' : ''
                }>
                  <div className="headerPost">
                    <h3 className={index > 0 ? 'titlePost' : 'borderBottom titlePost'}>{content.title}</h3>
                    <p>{content.shortSummary}</p>
                  </div>
  
                  <img className="imagePost" src={content.image} alt="" />
                  <div className='contentText'>
                    <p className='textPost'>{content.text}</p>
                    <p className='descriptionPost'>{content.description}</p>
  
                    <ButtonDefault />
                  </div>
                </div>
              ))
            }
        </div>
    )
}

export default Publications;