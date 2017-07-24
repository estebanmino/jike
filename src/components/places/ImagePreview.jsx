import React, {Component} from 'react';

class ImagePreview extends Component {

  render() {
    return (
      <div className="image-preview">
          <img src={this.props.photo.image_url} alt="preview"/>
      </div>
    )
  }
}

export default ImagePreview;
