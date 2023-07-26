import { useState,useEffect } from "react";
import {useParams} from 'react-router-dom';
import { doc,getDoc } from "firebase/firestore";
import { db } from "../firebase";


function PostDetail() {
     const [post,setPost] = useState({});
     const {postId} = useParams();
    //  const postscollectionref = collection(db,"posts");
 //one single error in code
  // useEffect(async () => {
  //    try{ 
  //   const db = getFirestore();
  //     const docRef = doc(db,"posts",postId);
  //     const docSnap =  getDoc(docRef);
  //     console.log(docSnap);
  //    }
  //    catch(error){
  //     console.log(error);
  //    }
  
  // },[]); 
  useEffect(() => {
    // Function to fetch the specific post detail based on postId
    const fetchPostDetail = async () => {
      try {
        const docRef = doc(db, "posts", postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPostDetail();
    // console.log(post);
  }, [postId]);


  return <div className="post-detail">
    <h1>{post.title}</h1>
    <p>{post.Content}</p>
  </div>;
}

export default PostDetail;
