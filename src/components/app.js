import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '../assets/in1.png',
    thumbnail: '../assets/in1.png',
  },
  {
    original: '../assets/in2.png',
    thumbnail: '../assets/in2.png',
  },
  {
    original: '../assets/in3.png',
    thumbnail: '../assets/in3.png',
  },
  {
    original: '../assets/in4.png',
    thumbnail: '../assets/in4.png',
  },
  {
    original: '../assets/in5.png',
    thumbnail: '../assets/in5.png',
  },
  {
    original: '../assets/in6.png',
    thumbnail: '../assets/in6.png',
  },
  {
    original: '../assets/in7.png',
    thumbnail: '../assets/in7.png',
  },
  {
    original: '../assets/in8.png',
    thumbnail: '../assets/in8.png',
  },
  {
    original: '../assets/in9.png',
    thumbnail: '../assets/in9.png',
  },
  {
    original: '../assets/in10.png',
    thumbnail: '../assets/in10.png',
  },
  {
    original: '../assets/in11.png',
    thumbnail: '../assets/in11.png',
  },
  {
    original: '../assets/in12.png',
    thumbnail: '../assets/in12.png',
  },
  {
    original: '../assets/in13.png',
    thumbnail: '../assets/in13.png',
  },
  {
    original: '../assets/in14.png',
    thumbnail: '../assets/in14.png',
  },
  {
    original: '../assets/in15.png',
    thumbnail: '../assets/in15.png',
  },
  {
    original: '../assets/in16.png',
    thumbnail: '../assets/in16.png',
  },
  {
    original: '../assets/in17.png',
    thumbnail: '../assets/in17.png',
  },
  {
    original: '../assets/in18.png',
    thumbnail: '../assets/in18.png',
  },
  {
    original: '../assets/in19.png',
    thumbnail: '../assets/in19.png',
  },
];

const App = () => (
  <div id="app">
    <main class="d-flex flex-column justify-content-center">
      <h1>Intimates</h1>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />

      <div class="card-body mt-2 mb-2 content">
        <h2>Donate</h2>
        <p>
          If you want to help <em>The Intimates</em> secure principal
          photography, you can donate to the film
          <a href="https://fiscal.ifp.org/project.cfm/2222/Intimates/"> here.</a>
        </p>
      </div>
      <div class="card-body mt-2 mb-2 content">
        <h2>Contact Us</h2>
        <p>
          If you have any other questions or inquiries, please contact us
          <a href="mailto:someone@example.com"> here.</a>
        </p>
      </div>
    </main>
  </div>
);

export default App;
