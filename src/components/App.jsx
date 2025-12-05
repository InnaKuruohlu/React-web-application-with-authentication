import Header from './Header';
import FeaturedPost from './FeaturedPost';
import data from '../data.json'
import SmallPosts from './SmallPosts';




function App() {

  const featured = data[0];
  const smallPosts = data.slice(1);
  
  return(
    <>
   
      <Header />

      <FeaturedPost post={featured}/>

    <section className="second-section">
      <div className="container-posts">

        {smallPosts.map((post) => (
          <SmallPosts key={post.id} post={post} />
        ))}

      </div>
    </section>
         
    </>
  )
   
};

export default App;
