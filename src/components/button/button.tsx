import './button.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ButtonDefault () {
    return (
        <div className='buttonComponent'>
            <button
                className='button'
            >
                View details
                <ArrowForwardIcon sx={{ fontSize: 16 }}/>
            </button>
        </div>
    )
}

export default ButtonDefault