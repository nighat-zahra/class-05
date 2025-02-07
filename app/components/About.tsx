import Image from "next/image"
export default function About () {
    return(
        <main className="w-full h-full md:h-[500px] bg-green-200 flex flex-col md:flex-row justify-between items-start mt-9 ">
        <div className=" w-full md:w-[500px]  mt-3 md:mt-10 md:ml-10 pl-3 ">
        
          
           <h1 className='font-extrabold text-5xl cursor-pointer hover:animate-pulse '>About Me</h1>
           <p className='font-extrabold text-1xl cursor-pointer hover:animate-pulse pt-5'>I am Nighat Zahra student of IT initiative for Artificial Intelligence, Web 3.0 and Metaverse by Governor of Sindh.I am learning about Next.JS in my second quarter.I have learned about Typescript in my first quarter.The journey of my development course is going on I am learning about the techonologies with experienced persons.I am so excited to learn more about the techonology.My Teachers are very hard workers, their behaviour is friendly with all the students.I like their way of explanation, they define everything in very simple words that everyone can understand it easily.</p>

        </div>  
        <div className='relative'>
        <Image src={"/profile4.jpg.webp"} className="w-[400px] mr-4 mt-10 rounded-[400px]" width={200} height={200} 
              alt="profile"></Image>
        </div>
       </main>
    )
}