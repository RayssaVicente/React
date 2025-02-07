import Card from "./components/Cards"
import postImgPanico1 from "./assets/panico-post.jpg"
import postImgPanico2 from "./assets/panico-post2.jpg"
import postImgPanico3 from "./assets/panico-post3.jpg"
import postImgPanico4 from "./assets/panico-post4.jpg"
import postImgPanico5 from "./assets/poster-panico5.jpg"
import postImgPanico6 from "./assets/poster-panico6.jpg"


export default function App() {
  return (
    <div>
      <Card titulo="Pôster: Pânico (1996)" postImg={postImgPanico1}/>
      <Card titulo="Pôster: Pânico 2 (1997)" postImg={postImgPanico2}/>
      <Card titulo="Pôster: Pânico 3 (2000)" postImg={postImgPanico3}/>
      <Card titulo="Pôster: Pânico 4 (2011)" postImg={postImgPanico4}/>
      <Card titulo="Pôster: Pânico 5 (2022)" postImg={postImgPanico5}/>
      <Card titulo="Pôster: Pânico 6 (2023)" postImg={postImgPanico6}/>
    </div>
  )
}