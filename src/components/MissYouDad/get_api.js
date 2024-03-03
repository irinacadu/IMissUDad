const [musicData, setMusicData] = useState([]);
useEffect(() => {
  fetchData();
});
export function getApi(){
    async function fetchData() {
        // Replace with your actual API endpoint and credentials
        const response = await fetch('https://api.example.com/music');
        const data = await response.json();
        setMusicData(data);
    }

}