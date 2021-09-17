import React,{useState, useContext} from 'react'
import logo from '../../asset/logo.jpeg'
import styles from './Header.module.css'
import list from '../../database/list'
import { DataContext } from '../context/AppContext'


function Header() {
    const{setChallenge}=useContext(DataContext)

    const [searchText, setSearchText] = useState('')

    if (searchText === ''){
        setChallenge(list)
    }

    const handelInput=(event)=>{
        const text=event.target.value
        setSearchText(text)

    const filterProjects= list.filter((project)=>
        project.title.includes(searchText))
        setChallenge(filterProjects)
        
    }

                
    return (

            <div className={styles.containerHeader}>
                <img className={styles.logoHeader} src={logo} alt="" />
                <h2 className={styles.title}>50 CHALLENGES DAYS</h2>
                <input type='text' className="from-control"  onChange={handelInput} value={searchText} placeholder="Search"/>
            </div>
        
        
    )
}

export default Header
