import './home.scss';
import Publications from '../publications/publications.tsx';

function Home() {

  const mainPublications = [
    {
      name: 'gifting',
      type: 'dual',
      style: {
        borderColor: 'blue-brand',
      },
      content: {
        title: 'GIFTING',
        text: 'Toys perfect for birthday gift-giving season in Spring',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
        shortSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      secondPost: {
        content: {
          title: 'Gifts for Mom',
          text: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
          shortSummary: '',
        },
      }
    },
    {
      name: 'travel',
      type: 'dual',
      style: {
        borderColor: 'blue-brand',
      },
      content: {
        title: 'GIFTING',
        text: 'Toys perfect for birthday gift-giving season in Spring',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
        shortSummary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      secondPost: {
        content: {
          title: 'Gifts for Mom',
          text: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.',
          shortSummary: '',
        },
      }
    },
  ]

  return (
    <div className='homeContainer'>
      <div className='videoTeste'>
        <h1>Video autoplay</h1>
      </div>

      <div>
        {mainPublications.map((publication) => (
          <Publications key={publication.name} props={publication}/>
        ))}
      </div>
    </div>
  )
}

export default Home