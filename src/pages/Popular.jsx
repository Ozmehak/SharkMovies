import { Api } from "../components/Api";

export const Popular = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "3rem 0"}}>Popular Movies</h1>
      <div style={{ height: "54rem", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        <Api category="popular" />
      </div>
    </div>
  )
}