import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <>
    <Navbar/>
    <section id="home" className="h-screen bg-cover bg-center">
    <div className=" flex items-center justify-center h-screen bg-cover bg-center bg-[url('https://img.freepik.com/premium-vector/design-technology-networking-science_29865-84.jpg?semt=ais_hybrid')] bg-no-repeat ">
      <h1 className=" h-1/4 text-5xl  font-sans text-blue-900 font-extrabold text-center">Welcome to My Website </h1>

     <p className="font-serif text-purple-800 text-center font-bold text-xl"> I Am Ambreen Jahan</p>
    </div>
  </section>


  

</>

  )}