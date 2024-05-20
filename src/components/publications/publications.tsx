import './publications.scss'
import ButtonDefault from '../button/button';

import * as React from 'react';

interface publicationProps {
    name: string;
    style: string;
    posts: Posts[];
}

export type Posts = {
  title: string;
  text: string;
  description: string;
  shortSummary: string;
  image: string;
  side: string;
}

function Publications({posts, name, style}: publicationProps) {
    console.log(posts, name, style);

    return (
        <div className="postContentGroup">
              {posts.map((content, index) => (
                <div 
                  key={name}
                  className={index > 0 ? style : '' || posts.length <= 1 ? style : ''}
                  >
                  <div className={index > 0 ? 'headerPost' : style +' headerPost'}>
                    <h3 className={index > 0 ? 'titlePost' : style +' titlePost'}>{content.title}</h3>
                    <p>{content.shortSummary}</p>
                  </div>
  
                  <div className='desktopVersion'>
                    <img 
                      className={content.side === 'right' ?'imagePost imageRigth' :'imagePost'} 
                      src={content.image}
                      alt=""
                    />
                    <div className={content.side === 'left' ? 'contentText textRight' : 'contentText paddingLeft'}>
                      <p className='textPost'>{content.text}</p>
                      <p className='descriptionPost'>{content.description}</p>
    
                      <ButtonDefault />
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
    )
}

export default Publications;