
 import Image from 'next/image'

export const metadata = {
  title: 'About — Jan',
  description: "Why I chose IT / Computer Science and what I'm building next."
}

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4" style={{ backgroundColor: "#84c1e4ff" }}>


      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <aside className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-6">
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl border-4 border-blue-600 transform translate-x-4 translate-y-5">
            <Image
              src="/jan.jpg"
              alt="Jan"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="text-center md:text-left mt-4">
            <h2 className="text-2xl font-semibold">Jan</h2>
            <p className="text-sm text-bblack-500 ">2nd-year IT student • Aspiring Full stack developer</p>
          </div>

          <ul className="mt-2 text-sm text-gray-700 space-y-2">
            <li><strong>Location:</strong> Philippines</li>
            <li><strong>Focus:</strong> Web Personal Projects</li>
            <li><strong>Current project:</strong> Personal Web Page </li>
          </ul>
        </aside>

     
        <div className="w-full md:w-2/3 prose prose-neutral max-w-none">
          <h1 className="text-3xl font-bold transform translate-y-40 ">Why I chose IT / Computer Science</h1>

          <p className="mt-43">
            I chose IT because I enjoy turning ideas into real, working solutions.
             I like taking complex problems, breaking them down,
             and building tools that make tasks easier and more efficient.
             For me, IT is the perfect mix of creativity, logic, and real-world impact.
      
        </p>
       
          <div className="mt-4">
            <a
              href="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition transform translate-x-100 translate-y-3"
            >
              Back to Home
            </a>
          </div>

          
        </div>
      </div>
    </section>
  )
}
