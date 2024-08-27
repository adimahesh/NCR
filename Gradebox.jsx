// import "./Grade.css"
export default function Gradebox(){
  const subject1=
    {name:"maths",
      sem1 :100,
      sem2 :200,
    };
  return(
    <>
      <div className="body2">
    <div className="fullslide2"> 
      <div className="join">
     <div className="booksection">
     <div className="navbar">
     <div className="ham">
     <i class="fa-solid fa-bars"></i>
     </div>
     <div className="notify">
     <i class="fa-solid fa-bell"></i>
     <img src="https://cdn.glitch.global/39c23c41-f2b1-4a3e-a30c-49d98298abe0/thumbnails%2Fprofile.jpg?1720155902468"></img>
     </div>
     </div> 
      <div className="grade">
      <h1>Grade Book</h1>
      <table className="table1">
      <tr >
        <td className="fix">Name of the student :</td>
        <td>mahesh</td>
        <td className="fix">Grading period:</td>
        <td>semester 2</td>
      </tr>
      <tr>
        <td className="fix">Name of the student :</td>
        <td>mahesh</td>
        <td  className="fix">Grading period:</td>
        <td>semester 2</td>
      </tr>
      </table>

      <table className="table2">
        <tr className="twohead">
          <td>{subject1.name}</td>
          <td>{subject1.sem1}</td>
          <td>SEMESTER2</td>
        </tr>
        <tr>
          <td>SUBJECT</td>
          <td>SEMESTER1</td>
          <td>SEMESTER2</td>
        </tr>
        <tr>
          <td>SUBJECT</td>
          <td>SEMESTER1</td>
          <td>SEMESTER2</td>
        </tr>
        <tr>
          <td>SUBJECT</td>
          <td>SEMESTER1</td>
          <td>SEMESTER2</td>
        </tr>
        <tr>
          <td>SUBJECT</td>
          <td>SEMESTER1</td>
          <td>SEMESTER2</td>
        </tr>
        <tr>
          <td>SUBJECT</td>
          <td>SEMESTER1</td>
          <td>SEMESTER2</td>
        </tr>
        <tr>
          <td>SUBJECT</td>
          <td>SEMESTER1</td>
          <td>SEMESTER2</td>
        </tr>
        <tr>
          <td>SUBJECT</td>
          <td>SEMESTER1</td>
          <td>SEMESTER2</td>
        </tr>

      </table >
      <div className="middle">
      <table className="lasttable">
      <tr className="attendence">
          <td>SUBJECT</td>
          <td>SEMESTER1</td>
          <td>SEMESTER2</td>
        </tr>
        <tr className="remain">
          <td>SUBJECT</td>
          <td>SEMESTER1</td>
          <td>SEMESTER2</td>
        </tr>
        <tr className="remain">
          <td>SUBJECT</td>
          <td>SEMESTER1</td>
          <td>SEMESTER2</td>
        </tr>
      </table>
      <div className="grade2">
        <h4>OVERALL GRADE</h4>
        <h3>85.5</h3>
        <p>previous year's grade:x</p>
      </div>
      </div>
      <div className="atmostbottom">
      <div className="notes">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, veritatis laudantium! Asperiores officia pariatur nesciunt explicabo doloribus iusto, officiis, itaque, laborum alias assumenda aliquam maiores.</p>

      </div>
      <div className="gradesystem">
          geades
      </div>
      </div>
     </div> 
      </div> 
      </div>
     </div> 
     </div>
    
     
      
     
    </>
  );
}