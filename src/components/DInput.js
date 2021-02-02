import React from "react";

export class DInput extends React.Component {
  render() {
    const {type, placeholder, value, onChange, name, clasname} = this.props;
    
    return (
      <div className={`${clasname}`}>
        <input {...{type, placeholder, value, name, onChange}} className={`w-full px-6 py-3 rounded-full border-2 border-champagnepink focus:outline-none focus:border-cinnabar text-lg font-medium`} />
      </div>
    )
  }
}