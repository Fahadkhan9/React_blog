  
import { Switch, Route } from 'react-router-dom';
// import { Navbar, Home, CreatePost, PostDetail } from './';
import PostDetail  from './PostDetail'
import Home from './Home'
import CreatePost from './CreatePost';
import Navbar from './Navbar'

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:postId" component={PostDetail} />
        <Route exact path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;






// import { Switch, Route } from 'react-router-dom';
// import { Navbar, Home, CreatePost, PostDetail } from './';

// function App() {
//   return (
//     <div className="container">
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/post/:postId" component={PostDetail} />
//         <Route exact path="/create-post" component={CreatePost} />
//       </Switch>
//     </div>
//   );
// }

// export default App;
