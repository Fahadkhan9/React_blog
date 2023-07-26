import { useState ,useEffect} from "react";
import {Link} from 'react-router-dom';
import { db } from "../firebase";
import { collection,getDocs} from "firebase/firestore";


function Home() {
  const[posts,setPosts] = useState([]);
    const postscollectionref = collection(db,"posts");


   useEffect(()=>{
     
       const getposts = async() => {
         const data = await getDocs(postscollectionref);
         setPosts(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
       }
       getposts();
   },[]);

    return (
         <div className="home">
             <h1>Blog about latest technologies</h1>
            <div id="blog-by">Fahad</div>

             {posts.map((post,index)=>(
               <div className="post" key={`post-${index}`}>
                <Link to = {`/post/${post.id}`} >
                <h3>{post.title}</h3>
                </Link>

                <p>{post.subtitle}</p>
               </div>
             ))}
             
    
         </div>
        
    );
}

export default Home;
