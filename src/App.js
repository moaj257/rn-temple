import React from "react";
import Navigation from "./components/Navigation";

import BannerImg from "./assets/images/bg.jpg";
import TempleImg from "./assets/images/temple.png";
import HeartImg from "./assets/images/heart.png";
import SupportImg from "./assets/images/support.png";

class Banner extends React.Component {
  render() {
    return (
      <div className="bg-vodoo w-screen h-80">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative h-96">
            <div className="h-full w-full bg-cover bg-bottom relative rounded-lg" style={{backgroundImage: `linear-gradient(to bottom, transparent, #44233B), url(${BannerImg})`}}>
              <div className="absolute bottom-0 w-full pb-5 text-center">
                <div className="text-linen font-serif text-2xl font-bold">"இருளைப் பற்றி எனக்கு கவலையில்லை,</div>
                <div className="text-linen font-serif text-2xl font-bold">ஏனென்றால் நீங்கள் வெளிச்சம்"</div>
                <div className="text-monalisa font-sans text-lg font-extrabold tracking-widest mt-3">- மனிதன்.</div>
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
      <a href="#" className="w-4/12 mx-8 py-20 px-8 bg-white text-center text-vodoo hover:text-cinnabar transition-all duration-300 ease-in-out hover:scale-125 rounded-lg">
        <div className="flex items-center justify-center">
          <img src={logo} className="h-32 w-32" />
        </div>
        <div className="mt-10 font-sans text-3xl font-black tracking-widest">{title}</div>
        <div className="mt-5 text-vodoo font-serif text-xl font-normal">{desc}</div>
      </a>
    );
  }
}

class WelcomeCards extends React.Component {
  render() {
    return (
      <div className="w-full mt-24 flex flex-row">
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
      <div className="w-screen h-auto mt-16">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-20">
          <div className="w-10/12 flex flex-col mx-auto">
            <div className="w-full">
              <div className="text-monalisa font-serif text-base font-bold tracking-widest">வரவேற்பு</div>
            </div>
            <div className="w-full flex flex-row">
              <div className="w-1/2">
                <div className="text-vodoo font-sans text-4xl font-bold tracking-widest">எங்கள் விஹாரா ஆசிரம ஸ்டுடியோவில் யோகாவை அனுபவிக்கவும்</div>
              </div>
              <div className="w-1/2">
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
    const {title, image, date, time} = this.props;
    return (
      <div className="">

      </div>
    )
  }
}

class EventSection extends React.Component {
  render() {
    return (
      <div className="w-screen h-auto mt-16">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-20">
          <div className="text-center">நிகழ்வுகள்</div>
          <div className="text-center">வரவிருக்கும் நிகழ்வுகள் மற்றும் நிகழ்ச்சிகள்</div>
          <div className="flex flex-row">
            <EventCard title="முதல் நாள் திருவிழா கொடியேற்றம் (மஹா சிவராத்திரி)" image="" date="18 பிப்" time="09:00 முதல் 16:30 வரை" />
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
    </div>
  );
}

export default App;
