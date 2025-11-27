
export const metadata = {
  title: "Education — Jan",
  description: "Learn more about my academic journey and achievements.",
};

export default function EducationPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4" style={{ backgroundColor: "#84c1e4ff" }}>


      <div className="max-w-4xl mx-auto space-y-8">
        
     
        <h1 className="text-3xl font-bold border-b border-green-300 pb-2">
          Jan Ayale T. Balote - Education
        </h1>

       
        <div>
          <h2 className="text-xl font-semibold border-b border-green-300 pb-1">Current Education</h2>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>
              <strong>Bachelor of Science in Information Technology</strong><br />
              Naga College Foundation, 2nd Year IT Student (2024–Present)
            </li>
          </ul>
        </div>


        <div>
          <h2 className="text-xl font-semibold border-b border-green-300 pb-1">Senior High School</h2>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>
              <strong> (SMAW) NC I</strong><br />
              TVL -Shielded Metal Arc Welding , Cararayan National High School (2022–2024)
            </li>
          </ul>
        </div>

     
        <div>
          <h2 className="text-xl font-semibold border-b border-green-300 pb-1">Junior High School</h2>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>
              Basic Education Curriculum (BEC), Salogon National High School (2018–2022)
            </li>
          </ul>
        </div>

     
        <div>
          <h2 className="text-xl font-semibold border-b border-green-300 pb-1">Elementary</h2>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>
              Salogon Elementary School, San Jose, Camarines Sur (2014–2016)
            </li>
          </ul>
        </div>

  
        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Back to Home
          </a>
        </div>

      </div>
    </section>
  );
}