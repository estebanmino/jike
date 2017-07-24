import React, {Component} from 'react';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addImage(
      this.props.place.trip_id,
      this.props.place.id,
      this.state.imagePreviewUrl,
      'name',
      'description',
    );
    console.log('handle uploading-');
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="preview"/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="form-control"
            type="file"
            onChange={(e)=>this._handleImageChange(e)} />
          <input
            className="btn btn-default"
            type="submit"
            value="Submit" />
        </form>

        <div className="imgPreview" >
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload;
