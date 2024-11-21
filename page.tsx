import Link from "next/link";
export default function Home() {
  return (
    
       <div className="flex gap-5 bg-orange-600 pl-96 ml-12 mt-32 font-extrabold ronded hover:bg-white">
 <h1> <Link href="/Contant">Contant</Link> </h1>
 <h1> <Link href="/About">About</Link> </h1>
 <h1> <Link href="/Home">Home</Link></h1>
  </div>
    
  );
}
