import React , {useState} from 'react';
import styles from './anime.module.css'


const Anime = () => {
    const [quote , setQuote] = useState('');
    const [title , setTitle] = useState('');

   const fetchQuote = async () => {
    try{
        const res = await fetch("https://animechan.xyz/api/random/anime?title=naruto");
        const data = await res.json();
        console.log("Data" , data)
        setQuote(data.quote);
        setTitle(data.character)
    }catch(error){
        console.error('Erroe fetching quote' , error);
    }
   };


   return(
    <div className={styles.anime}>
        <textarea
            rows={7}
            cols={60}
            value={quote}
            placeholder='Random Quote will appear here..'
        />
        <br />
        <textarea
            rows={7}
            cols={60}
            value={title}
            placeholder='Anime Title'
        />
        <button onClick={fetchQuote}> Get Random Quote </button>
    </div>

   )

}

export default Anime;