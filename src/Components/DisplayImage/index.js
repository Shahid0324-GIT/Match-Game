import './index.css'

const DisplayImage = props => {
  const generateRandomUrl = () => {
    const {displayImage} = props
    const randomIndex = Math.ceil(Math.random() * (29 - 1) + 1)
    return displayImage[randomIndex]
  }

  const getRandomImageUrl = () => {
    const randomObject = generateRandomUrl()
    const {imageUrl} = randomObject

    return imageUrl
  }

  const imageUrl = getRandomImageUrl()

  return (
    <div>
      <img src={imageUrl} alt="match" />
    </div>
  )
}

export default DisplayImage
