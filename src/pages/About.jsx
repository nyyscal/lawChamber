import { useNavigate } from "react-router-dom";
import Gap from "../components/Gap.jsx";
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src="./about1.png" alt="" className="w-screen h-[800px]" />
      <Gap />
      <div className="bg-amber-200 flex flex-col md:flex-row w-[800] h-[800] items-center gap-6 p-6">
        {/* Left Side: Image */}
        <div className="flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-full">
          <img
            className="object-contain"
            width={700}
            height={700}
            src="/consultation.jpg"
            alt="Consultation"
          />
        </div>

        {/* Right Side: Text */}
        <div className="flex flex-col text-xl justify-normal w-full md:w-1/2 p-4 text-left font-mono max-w-[900px]">
          <h1 className="text-3xl font-bold mb-6 font-serif">About Us</h1>
          <p>
            At Law Nepal, we are committed to delivering expert legal services
            tailored to the unique needs of our clients. With years of
            experience in various areas of law, our team provides reliable,
            transparent, and results-driven solutions. We prioritize integrity,
            professionalism, and client satisfaction, ensuring that each case is
            handled with the utmost care and attention. Our lawyers are
            passionate about advocating for justice and protecting the rights of
            individuals and businesses alike.
            <br /> We offer personalized legal guidance in a range of practice
            areas, from corporate law to family matters. Whether you're facing a
            legal challenge or seeking expert advice, Law Nepal is here to
            provide you with trusted counsel every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
