import React,{useState,useEffect} from 'react';
import Axios from 'axios';



function RandomUser() {
    const [data,setData] =useState([])
    const [list,setList] =useState([])
    const [status,setStatus] = useState(true)
    useEffect(() => {
        Axios.get("https://randomuser.me/api/?results=5").then((response) => {
            let a = response.data["results"]
            console.log(a)
            setData(a)
            
        }).catch((err) => {
            console.log(err)
        })
    }, [list])
    

    const clickRandom=()=>{
          setList([...list,...data])
          setStatus(false)
    }

    return (
        <div>
        <div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"colum"}}>
        <button className="button" onClick={()=>{clickRandom()}}>Random</button>
        </div>
        <div className="" style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"row",flexWrap:"wrap"}} >
            
            {list.map((val,key)=>{
                return(
                    <div className="card" style={{textAlign:'center'}} key={key}>
                    <p >{[val.name.first]+" "+[val.name.last]}</p>
                    <img alt={val.id}src={[val.picture.medium]}/>
                    </div>
                )
            })}
        </div>
        </div>
    )
}
export default RandomUser;