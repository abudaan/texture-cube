import React from 'react'

let labelStyle = {
  width: '150px',
  height: '1.9em',
  display: 'inline-block'
}

let inputStyle = {
  verticalAlign: 'middle',
  //marginBottom: '5px',
  width: '200px'
}

/* React wrapper for input type Range */

class Slider extends React.Component{

  static displayName = 'Slider'

  render(){

    let value = this.props.value
    let id = this.props.id || this.props.type

    function createLabel(props){
      let label = value
      if(props.label){
        label = props.label + '<em>' + value + '</em>'
      }
      return {__html: label}
    }

    return (
      <div>
        <label htmlFor={id} style={labelStyle} dangerouslySetInnerHTML={createLabel(this.props)} />
        <input
          style={inputStyle}
          onMouseUp={this.props.onMouseUp}
          onMouseDown={this.props.onMouseDown}
          id={id}
          key={this.props.type}
          onChange={this.props.onChange}
          type="range"
          defaultValue={`${value}`}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
        />
      </div>
    )
  }
}

Slider.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  max: React.PropTypes.number.isRequired,
  min: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onMouseDown: React.PropTypes.func.isRequired,
  onMouseUp: React.PropTypes.func.isRequired,
  step: React.PropTypes.number.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired
}

export default Slider
