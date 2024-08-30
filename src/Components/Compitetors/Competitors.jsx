// import Compitetors from '../../assets/Compitetors.json'
import { useSelector } from 'react-redux'
import styles from './competitors.module.scss'
import Competitor from './Compitetor/Competitor'

const Competitors = () => {
    const { Competitors}=useSelector((store)=>store.competitor);
    
  return (
    <div className={styles.competitor_container}>
        <div className={styles.competitor_header}>
            <span>Msssomali</span>
            <p1>msssomali waa barnaamij lagu tartar siinayo gabadha ugu qurusda badan somalia
                waana barnaamij mu hiima si loo dhiirigaliye gabdhaha quruxda badan ee soomaaliyeed
            </p1>

        </div>
        <div className={styles.competitors}>
            {Competitors.map((competitor)=>(
                <Competitor key={competitor.Id} competitor={competitor}/>
            ))}
        </div>
    </div>
  )
}

export default Competitors