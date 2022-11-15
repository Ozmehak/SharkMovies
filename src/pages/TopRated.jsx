import { Api } from "../components/Api";

export const TopRated = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "3rem 0"}}>Top Rated Movies</h1>
      <div style={{ height: "54rem", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        <Api category="top_rated" />
      </div>
    </div>
  )
}