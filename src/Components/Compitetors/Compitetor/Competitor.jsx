import { TbBackground } from 'react-icons/tb'
import styles from './competitor.module.scss'
import { MdOutlineHowToVote } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { handelModel } from '../../../Features/modal/modalSlice';
import { setcurrentCompetitor } from '../../../Features/Competitor/CompetitorSlice'

const Competitor = ({competitor}) => {

  const dispatch=useDispatch();

  const Votenow=()=>{
    dispatch(setcurrentCompetitor( competitor))
    dispatch(handelModel());
    
  };

  const backgroundStyle = {
    width: '100%',
    background: `linear-gradient(0deg, #128b4871, rgba(0, 0, 0, 0) 60%), url(${competitor.Photo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };


  return (
    <div className={styles.competitor}  style={backgroundStyle}>
        <div className={styles.info}>
            <span  className={styles.name}>{competitor.FirstName}</span>
            <span  className={styles.state}>{competitor.RepresentingState}</span>
            <span   className={styles.vote_counter}>{competitor.NumberofVotes}</span>
          
          
        </div>
        <div className={styles.vote} onClick={Votenow}>
        <MdOutlineHowToVote className='vote_icon' />

        </div>
    </div>
  )
}

export default Competitor;