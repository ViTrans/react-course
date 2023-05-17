import "./App.css";
import HackerNews from "./components/news/HackerNews";

// api = "https://picsum.photos/v2/list?page=2&limit=100"
function App() {
  // const [photos, setPhotos] = useState([]);
  // const [nextPage, setNextPage] = useState(1);
  // async function getPhotos(page) {
  //   try {
  //     const response = await axios.get(
  //       `https://picsum.photos/v2/list?page=${page}&limit=8`
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // const handleLoadmore = async () => {
  //   const images = await getPhotos(nextPage);
  //   const newPhotos = [...photos, ...images];
  //   setPhotos(newPhotos);
  //   setNextPage(nextPage + 1);
  //   console.log(nextPage);
  // };
  // useEffect(() => {
  //   handleLoadmore();
  // }, []);
  return (
    <div>
      <HackerNews></HackerNews>
      {/* <div className="grid grid-cols-4 gap-4">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.download_url} alt={photo.author} />
        ))}
      </div>
      <div className="mt-5 text-center">
        <button
          onClick={handleLoadmore}
          className="inline-block  px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] mx-auto"
        >
          Loadmore
        </button>
      </div> */}
    </div>
  );
}

export default App;
