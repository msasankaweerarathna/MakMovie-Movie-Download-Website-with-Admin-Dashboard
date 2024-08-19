import Movie from "@/components/Movie";


export default function Addmovie() {
 


  return <>
  <div className="addblogpage container">
    <div className="blogsadd">
      <div className="titledashboard w-100 flex flex-sb">
        <div>
          <h2>Add movie</h2>
          <h3>ADMIN PANEL</h3>
        </div>
      </div>
      <Movie/>
    </div>
  </div>

  </>

}