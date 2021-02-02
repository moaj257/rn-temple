import React from "react";
import { DInput } from "./DInput";

export class SubscribeSection extends React.Component {
  state = {name: '', mobile: '', email: '', iagree: false};

  handleChange = e => this.setState({[e.target.name]: e.target.value});

  render() {
    const {name, mobile, email, iagree} = this.state;

    return (
      <div className="w-screen h-auto mt-20" style={{backgroundImage: 'linear-gradient(180deg, #49263d 10%, rgba(73,38,61,0.80) 100%)'}}>
        <div className="py-40 container mx-auto px-2 sm:px-6 lg:px-8">
          <div className="w-10/12 flex justify-center items-center flex-col mx-auto">
            <div className="text-monalisa font-serif text-base font-bold tracking-normal md:tracking-widest">குழுசேரவும்</div>
            <div className="text-linen font-sans text-3xl md:text-4xl font-bold text-center">நிலையான மகிழ்ச்சியாக இருக்க கற்றுக்கொள்ளுங்கள்!</div>
            <div className="text-coldturkey text-2xl text-center my-10 mx-4 md:mx-8 font-serif font-normal">மகிழ்ச்சி திட்டத்தில் சேரவும். அமைதியான மனதை அனுபவிக்கவும், பதட்டத்தை குறைக்கவும், ஆற்றல் அளவுகள் மற்றும் நிலையான மகிழ்ச்சியை தினமும் அனுபவிக்கவும்!</div>
            <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <DInput isTrans={true} type="text" name="name" placeholder="பெயர்" onChange={this.handleChange} value={name} clasname="mr-0 md:mr-5 mt-2 md:mt-0 w-full" />
              <DInput isTrans={true} type="text" name="mobile" placeholder="கைபேசி எண்" onChange={this.handleChange} value={mobile} clasname="mr-0 md:mr-5 mt-2 md:mt-0 w-full" />
              <DInput isTrans={true} type="text" name="email" placeholder="மின்னஞ்சல் முகவரி" onChange={this.handleChange} value={email} clasname="mr-0 mt-2 md:mt-0 w-full" />
            </div>
            <div className="flex flex-row mt-5">
              <input className="mr-2 mt-2" type="checkbox" name="iagree" value={iagree} onChange={() => this.setState({iagree: !iagree})} />
              <div className="text-coldturkey font-serif text-xl font-normal">நான் சமர்ப்பித்த தரவு சேகரிக்கப்பட்டு சேமிக்கப்படுகிறது என்பதை ஒப்புக்கொள்கிறேன்.</div>
            </div>
            <div className="flex justify-center items-center flex-row mt-5">
              <button className="py-4 px-8 bg-linen hover:bg-cinnabar text-vodoo hover:text-white rounded-full text-xl font-bold text-center">இப்போது குழுசேரவும்</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}