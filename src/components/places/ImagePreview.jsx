import React, {Component} from 'react';

class ImagePreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      name: this.props.photo.name,
      description: this.props.photo.description,
    }
  }

  handleDeletePhoto() {
    console.log('handleDeletePhoto', this.props.photo.id);
  }

  handleEditPhoto() {
    console.log('handleEditPhoto', this.props.photo.id);
    this.setState({
      edit: true,

    })
  }

  handleSubmit(name, description) {
    console.log('handleSubmitImage');
    this.props.editPhoto(
      this.props.place.trip_id,
      this.props.place.id,
      this.props.photo.id,
      name,
      description);
      this.setState({
        edit: false,
        name: name,
        description: description,

      })
  }

  render() {
    return (
      <div className="photo">
        <div className="image-preview">
            { this.state.edit ?
              <PhotoEditForm
                handleSubmit={(name, description) => this.handleSubmit(name, description)}
                photo={this.props.photo}
                />
              :
              <Image src={this.props.photo.image_url} />
            }
            <button type="button" className="btn btn-danger"
              onClick={this.handleDeletePhoto.bind(this)}>
              <span className="glyphicon glyphicon-remove"></span>
            </button>
            <button type="button" className="btn btn-primary"
              onClick={this.handleEditPhoto.bind(this)}>
              <span className="glyphicon glyphicon-edit"></span>
            </button>
        </div>
        <div className="image-info">
          <h3>{this.state.name}</h3>
          <h3>{this.state.description}</h3>
        </div>
      </div>
    )
  }
}

class Image extends Component {
  render() {
    return (
      <div className="image-preview">
          <img src={this.props.src} alt="preview"/>
      </div>
    )
  }
}

class PhotoEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.photo.name,
      description: this.props.photo.description,
    }
  }

  handleChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(event) {
    this.props.handleSubmit(this.state.name, this.state.description);
    event.preventDefault();
  }

  render() {
    return (
      <div className="image-preview">
        <h3>Edit</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="photo-edit-form">
            <input ref={(input) => this.name = input}
              name="name"
              onChange={this.handleChange.bind(this)}
              className="form-control" type="text" placeholder='Photo name'
              value={this.state.name}/>
            <input ref={(input) => this.description = input}
              name="description"
              onChange={this.handleChange.bind(this)}
              className="form-control" type="text" placeholder='Photo description'
              value={this.state.description}/>
            <input
              className="btn btn-default"
              type="submit"
              value="Submit"/>
          </div>
        </form>

      </div>
    )
  }
}

export default ImagePreview;
