import React,{useContext} from 'react'
import styles from './Carts.module.css'
import { DataContext } from '../context/AppContext'

const Carts = () => {
    const{Challenge}=useContext(DataContext)
    
    return (
        <div className={styles.mainContainer}>
            <section className='py-4 container'>
            <div className='row justify-content-center'>
                
                <p className={styles.containerP}>Welcome to my website of the 50 days of challenges. Here you will find 25 fun mini-projects that work with HTML, CSS and Javascript. Every project does something different and unique.  I invite you to explore each of them. To see a deployed project click on the button that says "link".</p>

                {Challenge.map((info)=>{
                    return(
                        <div  className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                            <div className='card p-0 overflow-hidden h-100 shadow'>
                                <img src={info.img} className='card-img-top' alt="img" />
                                <div className='card-body'>
                                    <h5 className={styles.titleProject}>{info.title}</h5>
                                    <div className={styles.containerButton}>
                                        <button className={styles.deployLink}><a href={info.link} target="_blank">Link</a></button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        )} ) } 
                    </div>

        </section>
        </div> 
    )
}

export default Carts



