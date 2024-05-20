import './button.scss';
import ArrowRight from '@/assets/icons/arrow-right.png';

function ButtonDefault () {
    return (
        <div className='buttonComponent'>
            <button
                className='button'
            >
                View details
                <img src={ArrowRight} alt="" />
            </button>
        </div>
    )
}

export default ButtonDefault