import React from "react";
import Navigation from "./components/Navigation";

import BannerImg from "./assets/images/bg.jpg";
import TempleImg from "./assets/images/temple.png";
import HeartImg from "./assets/images/heart.png";
import SupportImg from "./assets/images/support.png";

import OneImg from "./assets/images/one.jpg";
import TwoImg from "./assets/images/two.jpg";
import ThreeImg from "./assets/images/three.jpg";
import FourImg from "./assets/images/four.jpg";
import DonationSection from "./components/DonationSection";
import { SubscribeSection } from "./components/SubscribeSection";
import { FooterSection } from "./components/FooterSection";

class Banner extends React.Component {
  render() {
    return (
      <div className="bg-vodoo w-screen h-80">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative h-96">
            <div className="h-full w-full bg-cover bg-bottom relative rounded-lg" style={{backgroundImage: `linear-gradient(to bottom, transparent, #44233B), url(${BannerImg})`}}>
              <div className="absolute bottom-0 w-full pb-5 text-center">
                <div className="text-linen font-serif text-2xl md:text-5xl font-bold">"இருளைப் பற்றி எனக்கு கவலையில்லை,</div>
                <div className="text-linen font-serif text-2xl md:text-5xl font-bold">ஏனென்றால் நீங்கள் வெளிச்சம்"</div>
                <div className="text-monalisa font-sans text-lg font-extrabold tracking-normal md:tracking-widest mt-3">- மனிதன்.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    const {title, desc, logo} = this.props;
    return (
      <a href="#" className="w-full md:w-4/12 mx-0 md:mx-8 mt-5 md:mt-0 py-20 px-8 bg-white text-center text-vodoo hover:text-cinnabar transition-all duration-300 ease-in-out hover:scale-125 rounded-lg">
        <div className="flex items-center justify-center">
          <img src={logo} className="h-32 w-32" />
        </div>
        <div className="mt-10 font-sans text-3xl font-black tracking-normal md:tracking-widest">{title}</div>
        <div className="mt-5 text-vodoo font-serif text-xl font-normal">{desc}</div>
      </a>
    );
  }
}

class WelcomeCards extends React.Component {
  render() {
    return (
      <div className="w-full mt-24 flex flex-col md:flex-row">
        <Card title="ஆசிரமம்" logo={TempleImg} desc="மலைகளின் பச்சை பள்ளத்தாக்குகளில் ஒரு ஆன்மீக பரம்பரை, அங்கு நீங்கள் இரவில் மில்லியன் கணக்கான நட்சத்திரங்களைக் காணலாம்." />
        <Card title="ஈடுபடுங்கள்" logo={SupportImg} desc="எங்கள் சமூகம் ஒரு உள்ளூர் அடிப்படையில் மனிதாபிமான ஆதரவு தேவைப்படும் உள்ளூர் மக்களின் வாழ்க்கையில் தீவிரமாக ஈடுபட்டுள்ளது." />
        <Card title="நன்கொடை" logo={HeartImg} desc="நன்கொடை திட்டங்களுக்கு உங்கள் பங்களிப்பை நாங்கள் பாராட்டுகிறோம், நாங்கள் பெறக்கூடிய எந்த உதவியையும் மகிழ்ச்சியுடன் ஏற்றுக்கொள்வோம்." />
      </div>
    );
  }
}

class WelcomeSection extends React.Component {
  render() {
    return (
      <div className="w-screen h-auto mt-16 mb-6">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8 pt-20 pb-4">
          <div className="w-10/12 flex flex-col mx-auto">
            <div className="w-full">
              <div className="text-monalisa font-serif text-base font-bold tracking-normal md:tracking-widest">வரவேற்பு</div>
            </div>
            <div className="w-full flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="text-vodoo font-sans text-4xl font-bold tracking-normal md:tracking-widest">எங்கள் விஹாரா ஆசிரம ஸ்டுடியோவில் யோகாவை அனுபவிக்கவும்</div>
              </div>
              <div className="w-full md:w-1/2 mt-10 md:mt-0">
                <div className="text-finn font-serif text-xl font-normal">எங்கள் யோகா மற்றும் தியான வகுப்புகளில் ஏதேனும் புதியவர்களைப் பார்ப்பதில் நாங்கள் மகிழ்ச்சியடைகிறோம். 
                மையத்தின் வாழ்க்கை மற்றும் கலந்துரையாடல் கிளப்பில் பங்கேற்க சமூகத்தில் சேரவும்.</div>
                <div className="mt-5 text-finn font-serif text-xl font-normal">ஆசிரமத்தில் தங்கி, எங்கள் அருமையான யோக வாழ்க்கை முறை திட்டத்தில் மூழ்கிவிடுங்கள்.</div>
              </div>
            </div>
            <WelcomeCards />
          </div>
        </div>
      </div>
    )
  }
}

class EventCard extends React.Component {
  render() {
    const {title, image, date, month, time} = this.props;
    return (
      <div className="w-full flex flex-col md:flex-row rounded-lg overflow-hidden my-4 bg-white">
        <div className="w-full md:w-1/6 h-48 md:h-32 relative bg-cover bg-center" style={{backgroundImage: `linear-gradient(transparent, rgb(68, 35, 59, 0.25)), url(${image})`}}>
          <div className="h-48 md:h-32 w-full flex items-center justify-center">
            <div className="bg-linen rounded-full text-center h-20 w-20 right-20 md:-right-10 top-36 md:top-6 text-cinnabar font-extrabold text-lg">
              <div className="text-4xl mt-1">{date}</div>
              <div className="text-monalisa">{month}</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-4/6 flex flex-col justify-center items-center md:items-start pb-4 pt-4">
          <div className="ml-0 px-4 md:px-0 md:ml-16 text-center md:text-left text-vodoo text-2xl font-bold">{title}</div>
          <div className="ml-0 px-4 md:px-0 md:ml-16 text-monalisa text-xl font-semibold mt-2">{time}</div>
        </div>
        <div className="flex w-full md:w-1/6 justify-center md:justify-end items-center mb-5 md:mb-0">
          <a href="#" className="mx-4 py-2 px-4 bg-cinnabar hover:bg-vodoo text-white h-12 w-64 rounded-full text-xl font-bold text-center">தகவல்</a>
        </div>
      </div>
    )
  }
}

class EventSection extends React.Component {
  render() {
    return (
      <div className="w-screen h-auto">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-20">
          <div className="w-10/12 flex flex-col mx-auto">
            <div className="text-center text-monalisa font-serif text-base font-bold tracking-normal md:tracking-widest">நிகழ்வுகள்</div>
            <div className="text-center text-vodoo font-sans text-5xl font-bold tracking-normal md:tracking-widest">வரவிருக்கும் நிகழ்வுகள் மற்றும் நிகழ்ச்சிகள்</div>
            <div className="flex flex-col mt-14">
              <EventCard title="முதல் நாள் திருவிழா கொடியேற்றம் (மஹா சிவராத்திரி)" image={OneImg} date="18" month="பிப்" time="09:00 முதல் 16:30 வரை" />
              <EventCard title="இரண்டாம் நாள் திருவிழா (மயான கொள்ளை)" image={TwoImg} date="19" month="பிப்" time="09:00 முதல் 16:30 வரை" />
              <EventCard title="மூன்றாம் நாள் திருவிழா  (நலவிளக்கு)" image={ThreeImg} date="20" month="பிப்" time="09:00 முதல் 16:30 வரை" />
              <EventCard title="நான்காம் நாள் (அக்கினி சட்டி)" image={FourImg} date="21" month="பிப்" time="09:00 முதல் 16:30 வரை" />
            </div>
            <div className="flex flex-col justify-center items-center mt-4">
              <a href="#" className="mx-4 py-3 px-4 bg-vodoo hover:bg-cinnabar text-white h-14 w-64 rounded-full text-xl font-bold text-center">மேலும் நிகழ்வுகள்</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="bg-linen w-screen h-auto overflow-hidden">
      <div className="bg-vodoo w-screen h-full">
        <Navigation />
        <Banner />
      </div>
      <WelcomeSection />
      <EventSection />
      <DonationSection />
      <SubscribeSection />
      <FooterSection />
    </div>
  );
}

export default App;
