import React from "react";

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="container mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center h-28">
            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:mr-6">
                <div className="flex space-x-4">
                  <a href="#" className="bg-red-900 text-linen font-sans px-3 py-2 rounded-md text-base font-medium">முகப்பு பக்கம்</a>
                  <a href="#" className="text-monalisa font-sans hover:text-linen px-3 py-2 rounded-md text-base font-medium">எங்களை பற்றி</a>
                  <a href="#" className="text-monalisa font-sans hover:text-linen px-3 py-2 rounded-md text-base font-medium">நிகழ்ச்சிகள்</a>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center relative">
                <div className="relative text-linen font-montserrat z-20 tracking-normal md:tracking-wide text-xl md:text-3xl font-bold">அங்காள பரமேஸ்வரி</div>
                <div className="absolute text-monalisa text-7xl z-10 font-serif  left-20 md:left-36 font-extrabold">ॐ</div>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a href="#" className="text-monalisa font-sans hover:text-linen px-3 py-2 rounded-md text-base font-medium">நிகழ்வுகள்</a>
                  <a href="#" className="text-monalisa font-sans hover:text-linen px-3 py-2 rounded-md text-base font-medium">நன்கொடைகள்</a>
                  <a href="#" className="text-monalisa font-sans hover:text-linen px-3 py-2 rounded-md text-base font-medium">தொடர்பு கொள்ள</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}