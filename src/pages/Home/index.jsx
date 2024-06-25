import { useEffect, useState } from "react";
import Header from "./Header";
import * as S from "./style";

export default function Home(){
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://api.themoviedb.org/3/search/movie?query&includepage=1`;
      const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDc4ZjNiNTgyMjE4NWY5MDQ4ZjVmZDdiOTNmNGRmNiIsInN1YiI6IjY2M2ViY2QxMjBmMWU0YjNlMGEzNzNlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v9VQRtjOtxRkm4nl6rxVO6jXnr5nsRO_9ydzqFb96Vg";

      try{
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if(!response.ok){
          throw new Error(`Erro: ${response.status}`);
        }

        const result = await response.json();
        setData(result);

      }catch(error){
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if(error){
    return <div>Erro: {error} </div>
  }


  if (data) {
    return (
      <>
        <Header />
        <div className="body" style={{color: 'white'}}>
          <h1>Dados da API</h1>
          {JSON.stringify(data, null, 2)}
        </div>
      </>
    )
  }
}
