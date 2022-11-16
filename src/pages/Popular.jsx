import { Api } from "../components/Api";

export const Popular = () => {
  return (
    <div style={{backgroundColor: "#131516"}}>
      <h1 style={{ color:"#0dcaf0", textAlign: "center", margin: "3rem 0"}}>Popular Movies</h1>
      <div style={{ height: "54rem", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        <Api category="popular" />
      </div>
    </div>
  )
}
