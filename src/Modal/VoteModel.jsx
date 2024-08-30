
import { useState } from 'react';
import styles from './vote.Module.scss'
import { AiOutlineMinus } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { handelModel } from '../Features/modal/modalSlice';
import { increaseVote,DecreaseVote, AddVoteToCompetitor, resetState } from '../Features/Competitor/CompetitorSlice';
import Modal from 'react-modal';

 
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



  Modal.setAppElement('#root');

 export const VoteModal=()=>{
  const dispatch=useDispatch();
    let subtitle;
  
    const {isOpen}=useSelector((store)=>store.modal);
    const { currentcompetitor,voteCount}=useSelector((store)=>store.competitor);

    
  

    function closeModal() {
      dispatch(handelModel());
    };

    // sawirka ciladiisaa lagu xaliyaa

    if(!currentcompetitor) return;


    const backgroundStyle = {
      width: '100%',
      height:'500px',
      background: `linear-gradient(0deg, #128b4871, rgba(0, 0, 0, 0) 60%), url(${currentcompetitor.Photo})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderBottomRightRadius:'10px',
    };

    const HandelingSubmit=(event)=>{
      event.preventDefault();
      dispatch(AddVoteToCompetitor(currentcompetitor.Id));
      dispatch(resetState());

      closeModal();

    };
    return(
        <>
          {/* <button onClick={()=>dispatch(handelModel())}>Open Modal</button> */}
        <Modal
        isOpen={isOpen}
    
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modal_container}>
          <div className={styles.competitor_info}>
            <div style={backgroundStyle}></div>
            <div className={styles.bio}>
              <div className={styles.divider}>
                <label>Name</label>
                <span>{currentcompetitor.FirstName + ' ' + currentcompetitor.LastName}</span>
              </div>
              <div className={styles.divider}>
                <label>{currentcompetitor.RepresentingState}</label>
              </div>
              <div className={styles.divider}>
                <label>Background study</label>
                <span>{currentcompetitor.PersonalBackground}</span>
              </div>
         

        

          <div className={styles.vote_container}>
            <div className={styles.vote_count}>
            <span>Puschase</span>
            <div className={styles.vote_control}>
              <button  onClick={()=>dispatch(DecreaseVote())}>
              <AiOutlineMinus className={styles.icon} />

              </button>
              <span>{voteCount}</span>
              <button  onClick={()=>dispatch(increaseVote())}>
              <FaPlus className={styles.icon}/>

              </button>
            </div>
            </div>
            <form onSubmit={HandelingSubmit}>
            <span> pay with saad,sahal,Evc-plus</span>
            <input type='number' 
            placeholder='Enter you number'
            className={styles.form_control}/>
            <button type='submit' className={styles.button}>Vote now</button>
          </form>

          </div>
          </div>
          </div>
         

        </div>
       
      </Modal>

        </>

    )
}