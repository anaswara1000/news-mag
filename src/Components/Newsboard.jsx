
import { useEffect } from "react"
import { useState } from "react"
import Newsitem from "./Newsitem"

const Newsboard = ({category}) => {
console.log(category);
const [articles,setArticles] = useState([])

useEffect(()=>{
    async function fetchData(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1b6c8d206c234feea0ae5a3ccd225434`;
    let data=await fetch(url);
    let parsedData=await data.json();
    setArticles(parsedData.articles);
    }
    fetchData();
},[category])

    return (
        <div>
              <h2 className="text-centre">Latest <span className="badge bg-danger">News</span></h2>
            {
            articles.map((news,index)=>{
                return<Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url ={news.url}/>
            })}
        </div>
    
    )
    }

export default Newsboard
