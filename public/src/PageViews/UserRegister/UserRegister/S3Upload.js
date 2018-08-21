import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import DefaultImg from '../../../assets/200x200fav.png'

function sendToback(photo) {
  return axios.post('/api/uploadPhoto', photo)
}

export default class S3Upload extends Component {
  constructor() {
    super()
    this.state = {
      file: DefaultImg,
      filename: '',
      filetype: ''
    }
    this.handlePhoto = this.handlePhoto.bind(this)
    this.sendPhoto = this.sendPhoto.bind(this)
  }
  //S3 Top
  handlePhoto(event) {
    const reader = new FileReader()
    const file = event.target.files[0]

    reader.onload = photo => {
      this.setState({
        file: photo.target.result,
        filename: file.name,
        filetype: file.type
      })
    }
    reader.readAsDataURL(file)
  }

  sendPhoto(event) {
    event.preventDefault()

    sendToback(this.state).then(response => {
      console.log(response.data)
    })
    this.props.toggleChannelMenu(this.props.channelMenuOpen)
  }
  // S3 bottom

  render() {
    return (
      <UploadContainer>
        <UploadBox>
          <Upload type="file" onChange={this.handlePhoto} />
          {this.state.file && (
            <ImageUpload
              src={this.state.file}
              alt=""
              className="file-preview"
            />
          )}
        </UploadBox>
      </UploadContainer>
    )
  }
}

const UploadBox = styled.div`
  height: 200px;
  width: 237px;
  background: lightgray;
  position: relative;
`

const Upload = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
`

const UploadContainer = styled.section`
  background: white;
  padding: 6px;
  width: 250px;
  margin-bottom: 7px;
`
const ImageUpload = styled.img`
  position: absolute;
  top: 0;
  height: 200px;
  width: 237px;
  left: 0;
`
