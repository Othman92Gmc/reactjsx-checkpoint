import './App.css';
import imageInSrc from './imgmatrix.jpg'

function App() {
  return (
  <div>
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className="title red">Othman Stambouli</h1>
      <br />
      <img src={imageInSrc} />
      <br />
      <img src="/imgmatrix.jpg" />
    </div>
    <br />
    <video width={320} height={240} controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
  </div>
  );
}

export default App;