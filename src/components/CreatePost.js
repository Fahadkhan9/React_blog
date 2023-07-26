// function CreatePost() {

import { useState } from "react";
import {db} from "../firebase";
import { Firestore, addDoc,collection } from "firebase/firestore";
import { useFormInput } from "../hooks";

//   return ( <div className="">CreatePost</div>);
// }

// export default CreatePost;

function CreatePost() {
    // const [title,setTitle] = useState("");
    // const [subtitle,setSubTitle] = useState("");
    // const [content,setContent] = useState("");
     
    //! using custom hooks
    const title = useFormInput('');
    const subtitle = useFormInput('');
    const content = useFormInput('');


    const usersCollectionref = collection(db,"posts");
    
   async function handleSubmit(e){
       e.preventDefault();
       console.log('title',title);
       console.log('subtitle',subtitle);
       console.log('content',content);
       
      //! i have problem here unable to add item inside the database
      //  try {
      //   const docRef = await addDoc(collection(db, "todos"), {
      //*     todo: todo,    
      //   });
      //   console.log("Document written with ID: ", docRef.id);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
   
      // await addDoc(usersCollectionref,{title : title, subtitle : subtitle,Content : content,CreatedAt : new Date()});
      
      //!using Custom hooks
      await addDoc(usersCollectionref,{title : title.value, subtitle : subtitle.value,Content : content.value,CreatedAt : new Date()});
      
    }

  return (
  <div className="create-post"><h1>Create Post</h1>

    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label>Title</label>
        {/* <input  value = {title} onChange={(e) => setTitle(e.target.value)}/> */}
         {/* using custom hooks */}
        <input  {...title}/>
      </div>

      <div className="form-field">
        <label>SubTitle</label>
        {/* <input value = {subtitle} onChange={(e) => setSubTitle(e.target.value)}/> */}
        {/* using custom hooks */}
        <input  {...subtitle}/>
      </div>

      <div className="form-field">
        <label>Content</label>
        {/* <textarea value = {content} onChange={(e) => setContent(e.target.value)}></textarea> */}
                 {/* using custom hooks */}
        <textarea {...content}></textarea>
      
      </div>

      <button className="create-post-btn">CreatePost</button>

    </form>

  </div>
  )
}

export default CreatePost;

