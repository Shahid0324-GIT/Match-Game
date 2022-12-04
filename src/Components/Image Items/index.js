import './index.css'

const ImageItems = props => {
  const {imageDetails} = props
  const {thumbnailUrl} = imageDetails
  const onClickThumbnail = () => {
    console.log('Triggered')
  }

  return (
    <>
      <li className="project-item-container">
        <button type="button" className="button" onClick={onClickThumbnail}>
          <img
            className="project-item-image"
            src={thumbnailUrl}
            alt="thumbnail"
          />
        </button>
      </li>
    </>
  )
}

export default ImageItems
