import React, {Component} from 'react';

/**
 * 带大图预览的图片组件, 鼠标进入时显示预览大图, 移出时去掉预览大图
 */
class ImgWithPreview extends Component {
  constructor () {
    super();
    this.state = {
      showPreview: false
    }
  }

  handleShowPreview() {
    console.log('show');this.setState({showPreview: true})
  }

  handleHidePreview() {
    console.log('hide');this.setState({showPreview: false})
  }

  render () {
    return (<div>
      <img {...this.props} onMouseEnter={this.handleShowPreview} onMouseLeave={this.handleHidePreview}/>
      <div style={{
        border: "1px solid #ebedf0",
        position: "fixed",
        right: "2%",
        top: "2%",
        borderRadius: "5px",
        zIndex: "999",
        display: this.state.showPreview ? "inline-block" : "none"
      }}>
        <img src={this.props.src} style={{
          maxWidth: "800px",
          maxHeight: "800px",
          borderRadius: "5px"
        }}/>
      </div>
    </div>)
  }
}

export default ImgWithPreview;