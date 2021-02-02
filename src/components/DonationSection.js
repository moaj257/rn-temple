import React from "react";
import { DInput } from "./DInput";

class DonationBtn extends React.Component {
  render() {
    const {text, handleDonation, ind, isClicked} = this.props;
    return (
      <button className={`mr-2 mb-2 md:mb-0 ${isClicked ? 'bg-vodoo text-white' : 'bg-champagnepink text-vodoo'} px-3 py-3 rounded-full font-bold text-xl w-24 hover:text-white focus:text-white hover:bg-vodoo focus:bg-vodoo`} onClick={e => handleDonation(e, ind)}>{text}</button>
    );
  }
}

export default class DonationSection extends React.Component {
  state = {donationAmount: '25.00', isClicked: [true, false, false, false], fname: '', lname: '', email: '', iagree: false};

  handleChange = e => this.setState({[e.target.name]: e.target.value});
  
  handleBlur = e => {
    let isClicked = [true, false, false, false];
    let text = parseFloat(this.state[e.target.name]).toFixed(2);
    if(isNaN(text)) {
      this.setState({isClicked});
      text = '25.00';
    }
    this.setState({[e.target.name]: text});
  }

  handleDonation = (e, ind) => {
    let isClicked = [false, false, false, false];
    isClicked[ind] = true;
    const {donationField} =this.refs;
    const text = e.target.innerText.replace(/₹/g, '');
    if(text === "Custom") {
      this.setState({donationAmount: '', isClicked});
      donationField.focus();
    } else
      this.setState({donationAmount: text, isClicked});
  }

  render() {
    const {donationAmount, isClicked, fname, lname, email, iagree} = this.state;

    return (
        <div className="w-screen h-auto mt-6 mb-6">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8 pt-4 pb-4">
          <div className="w-10/12 flex flex-col mx-auto">
            <div className="w-full">
              <div className="text-monalisa font-serif text-base font-bold tracking-normal md:tracking-widest">நன்கொடைகள்</div>
            </div>
            <div className="w-full flex flex-col md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="text-vodoo font-sans text-4xl font-bold tracking-normal md:tracking-widest">தட்சிணா: யோகாவின் பயிற்சி “திருப்பித் தருவது”</div>
                <div className="mt-10 text-finn font-serif text-xl font-normal">தட்சிணா என்பது யோகா பயிற்சி பெறுபவர்களின் ஒரு பழங்கால பாரம்பரியம், இது தாராள மனப்பான்மையின் காட்சி - ஆசிரியரின் நிதி உதவி மற்றும் அவர்களின் போதனைகளுக்கு ஒரு தனிப்பட்ட பங்களிப்பு.</div>
                <div className="mt-5 text-finn font-serif text-xl font-normal">மற்றவர்களுக்கு உதவுவதற்கும், நிபந்தனையற்ற நன்றியுணர்வை வெளிப்படுத்துவதற்கும் ஒரு உயர்ந்த நோக்கத்தினால் ஏற்படும் தூய உள் தூண்டுதலை நாம் அனுபவிக்கும் போது, ​​அது தட்சிணா என்று அழைக்கப்படுகிறது. நம்முடைய உணர்வுகளால் நாம் வழிநடத்தப்படுகிறோம், இந்த விஷயத்தில், நம்முடைய உண்மையான சுயத்தை நாம் பெறும் வரை நாம் கொடுக்கும் தொகை பொருத்தமற்றது.</div>
              </div>
              <div className="w-full md:w-1/2 mt-10 md:mt-0 pl-0 md:pl-14">
                <div className="flex flex-row flex-wrap justify-start items-end">
                  <div className="text-cinnabar font-sans text-7xl md:text-8xl font-bold">₹16,000</div>
                  <div className="text-vodoo font-sans text-xl font-bold tracking-normal md:tracking-widest mb-2"> எழுப்பப்பட்டது</div>
                </div>
                <div className="flex flex-row flex-wrap justify-start items-end mt-2">
                  <div className="bg-champagnepink rounded-full">
                    <div className="flex flex-row py-1 pr-1">
                      <div className="pr-2 pl-4 py-2 text-cinnabar text-2xl">₹</div>
                      <div className="bg-white rounded-full py-2 px-3 text-mountbattenpink text-2xl overflow-hidden">
                        <input type="text" name="donationAmount" ref="donationField" className="border-0 w-20 focus:outline-none hover:outline-none" onChange={this.handleChange} onBlur={this.handleBlur} value={donationAmount} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap justify-start items-end mt-6">
                  <DonationBtn text='₹ 25.00' handleDonation={this.handleDonation} isClicked={isClicked[0]} ind={0} />
                  <DonationBtn text='₹ 50.00' handleDonation={this.handleDonation} isClicked={isClicked[1]} ind={1} />
                  <DonationBtn text='₹ 100.00' handleDonation={this.handleDonation} isClicked={isClicked[2]} ind={2} />
                  <DonationBtn text='Custom' handleDonation={this.handleDonation} isClicked={isClicked[3]} ind={3} />
                </div>
                <div className="flex flex-col mt-10">
                  <div className="text-vodoo font-sans text-4xl font-bold">தனிப்பட்ட தகவல்</div>
                  <div className="flex flex-col md:flex-row mt-5">
                    <div className="w-full md:w-1/2">
                      <DInput type="text" name="fname" placeholder="பெயர்" onChange={this.handleChange} value={fname} clasname="mr-0 md:mr-2" />
                    </div>
                    <div className="w-full md:w-1/2">
                      <DInput type="text" name="lname" placeholder="தந்தையின் பெயர்" onChange={this.handleChange} value={lname} clasname="ml-0 md:ml-2 mt-2 md:mt-0" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row mt-2">
                    <DInput type="email" name="email" placeholder="மின்னஞ்சல்" onChange={this.handleChange} value={email} clasname="w-full" />
                  </div>
                  <div className="flex flex-row mt-2">
                    <input className="mr-2 mt-2" type="checkbox" name="iagree" value={iagree} onChange={() => this.setState({iagree: !iagree})} />
                    <div className="text-finn font-serif text-lg font-normal">நான் சமர்ப்பித்த தரவு சேகரிக்கப்பட்டு சேமிக்கப்படுகிறது என்பதை ஒப்புக்கொள்கிறேன்.</div>
                  </div>
                  <div className="flex justify-center items-center flex-row mt-5">
                    <button className="py-2 px-8 bg-cinnabar hover:bg-vodoo text-white rounded-full text-xl font-bold text-center">இப்போது நன்கொடை செய்யுங்கள்</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}