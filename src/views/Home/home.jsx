import './home.css';
import mitsImg from '../../assets/mits_img_1.jpg';
import homePageImages1 from '../../assets/IEEE.jpg';
import homePageImages2 from "../../assets/mits.png";
import homePageImages3 from "../../assets/iwate.png";
import homePageImages4 from "../../assets/cyut.png";

import iskcon from "../../assets/iskcontemples.jpg";
import bengaluruPalace from "../../assets/bengaluruPalace.jpg";
import vidhana from "../../assets/vidhana.jpg";
import spaceCenter from "../../assets/spaceCenter.jpg";

import { Card, CardContent, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import CountDown from '../../Components/CountDown/CountDown';
import Marquee from '../../Components/Marquee/marquee';

const itemData = [
  {
    img: bengaluruPalace,
    title: "Bengaluru Palace",
  },
  {
    img: vidhana,
    title: "Vidhana Soudha",
  },
  {
    img: spaceCenter,
    title: "HAL Heritage Centre and Aerospace Museum",
  },
  {
    img: iskcon,
    title: "ISKCON Temple",
  },
];

export default function Home() {
  return (
    <div className="homeDiv">
      <div className="HomeBgImgDiv">
        <img src={mitsImg} alt="MITS" className="homeImg" />
        <div className="text-block">
          <div>
            <p className="line_1">ICOTL 2025</p>
            <p className="line_2">
              <span className="mainLetter">I</span>nternational{" "}
              <span className="mainLetter">C</span>onference
            </p>
            <p className="line_3"> on </p>
            <p className="line_4">
              <span className="mainLetter">O</span>ptimization{" "}
              <span className="mainLetter">T</span>echniques for{" "}
              <span className="mainLetter">L</span>earning
            </p>
            <p className="line_5">Date to be announced</p>
          </div>
          <CountDown />
        </div>
      </div>
      <Marquee />
      <div className="homePageLogosDiv">
        <img src={homePageImages2} alt="MITS Logo" className="homePageLogo" />
        <img src={homePageImages1} alt="IEEE Logo" className="homePageLogo" />
        <img src={homePageImages3} alt="Iwate Logo" className="homePageLogo" />
        <img src={homePageImages4} alt="CYUT Logo" className="homePageLogo" />
      </div>
      <div className="HomePageCard">
        <Card
          sx={{
            width: 1300,
            maxWidth: '97%',
            margin: "20px auto",
            padding: "20px 0",
            backgroundColor: " #bce6fa",
          }}
        >
          <CardContent>
            <p className="headingCard">
              IEEE SMC Technical Committee: &nbsp;&nbsp;&nbsp;&bull; Awareness Computing &nbsp;&nbsp;&nbsp;&bull; Soft Computing&nbsp;&nbsp;&nbsp; &bull; Intelligent Internet System
            </p>
            <div className="cardText"></div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 1000,
            margin: "20px auto",
            backgroundColor: " #bce6fa",
          }}
        >
          <CardContent>
            <p className="cardTitle">About Conference</p>
            <div className="cardText">
              The 1st International Conference on Optimization Techniques for
              Learning (ICOTL 2025) is a major international conference to bring
              together researchers, engineers, and scientists from academia and
              industry working in Machine Learning and Data Science and their
              applications in different scientific, technical, and social
              optimization problems. Researchers will meet for discussion,
              exchanging ideas, opinions, and most importantly to present their
              latest works and research results. Special sessions on various
              subjects related to artificial intelligence, soft-computing,
              intelligent systems, perception, cognitive science, psychology,
              data analysis, IoT are welcome.
            </div>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 1000,
            margin: "20px auto",
            backgroundColor: " #bce6fa",
          }}
        >
          <CardContent>
            <p className="cardTitle">About MITS</p>
            <div className="cardText">
              Madanapalle Institute of Technology & Science is established in
              1998 in the picturesque and pleasant environs of Madanapalle and
              is ideally located on a sprawling 26.17 acre campus on Madanapalle
              - Anantapur Highway (NH-205) near Angallu, about 10km away from
              Madanapalle. MITS originated under the auspices of Ratakonda Ranga
              Reddy Educational Academy under the proactive leadership of Late
              Sri. N. Krishna Kumar M.S. (U.S.A), the then President and Dr. N.
              Vijaya Bhaskar Choudary, Ph.D., Secretary & Correspondent of the
              Academy. MITS is governed by a progressive management that never
              rests on laurels and has been striving conscientiously to develop
              it as one of the best centers of Academic Excellence in India. The
              Institution's profile is firmly based on strategies and action
              plans that match changing demands of the nation and the students
              fraternity. MITS enjoys constant support and patronage of NRI's
              with distinguished academic traditions and vast experience in
              Engineering & Technology.
            </div>
          </CardContent>
        </Card>
        <div className="bangaloreImagesDiv">
          <p className="title">About Madanapalle</p>
          <ImageList>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={item.img}
                  srcSet={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="bangaloreImg"
                />
                <ImageListItemBar title={item.title} subtitle={item.subtitle} />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
}