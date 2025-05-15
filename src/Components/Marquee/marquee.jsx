import Marquee from "react-fast-marquee";
import './marquee.css'

const Information = [
  "Last Date for Paper Submission is 30th July, 2025.",
  // Add more messages here if needed
];

const MarqueeText = () => {
  return (
    <div className="marqueeDiv" role="status" aria-label="Important Information">
      <span className="marqueeIcon" aria-hidden="true">📢</span>
      <Marquee pauseOnHover={true} speed={40} gradient={true} gradientWidth={60}>
        {Information.map((info, index) => (
          <div className="marqueeList" key={index}>
            <p>{info}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeText;