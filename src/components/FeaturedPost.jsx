import { useNavigate } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import XIcon from '@mui/icons-material/X';
import CircleIcon from '@mui/icons-material/Circle';


function FeaturedPost({post}) {
  const navigate = useNavigate();
  return(
    <>
    <section className="first-section">
    <div className="first-main-container">

      <div className="starContainer">
        <StarBorderIcon />
        <h2 className="featured"> Featured</h2>
      </div>

      <h1 className="nameOfPost">{post.title}</h1>

      <p className="descripPost">{post.description}</p>

      <div className="containerForDate">
        <p className="dateOfPost">{post.date}</p>
        <div className="authorOfPost">
          <CircleIcon className='author-icon-circle'/> 
          <span className="autorName">John Doe</span></div>
      </div>

        <div 
        className="container-post"
        onClick={() => navigate(`/post/${post.id}`)}
        >
          <button className="container-post-button">Photo by Antara</button>
        </div>

        <div className="container-icons">
          <p className="text-icon">Share to</p>
          
          <div className='icon-wrapper-facebook facebook'>
            <ion-icon src="/logo-facebook.svg"></ion-icon>
          </div>

          <div className='icon-wrapper x-icon'>
            <XIcon className="x-svg"/>
          </div>

          <div className='icon-wrapper youtube'>
            <ion-icon src="/logo-youtube.svg"></ion-icon>
          </div>
       
        </div>
    </div>
  </section>
    </>
  )
}

export default FeaturedPost;