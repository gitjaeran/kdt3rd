import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode'));

  return (
    //console.log(['010', '1234', '2345'].join('-'))
    <main className={['MainPage', searchParams.get('mode')].join(' ')}>
      <div>여기는 홈!</div>

      <button onClick={()=>{
        setSearchParams({mode: 'Dark'});
        }}>
        Dark Mode
        </button>
    </main>
  )
}

export default MainPage;