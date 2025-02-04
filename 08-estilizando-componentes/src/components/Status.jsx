export default function Status (){
        const status = true;
        return <h2 style={{color: status ? "#00ff9f" : "#f64348"}} >Status atual: {status ? "ON" : "OFF"}</h2>//Css de forma in-line

}