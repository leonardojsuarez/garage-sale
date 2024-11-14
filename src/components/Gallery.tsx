import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

type GalleryProps = {
    images: string[]
}

export const Gallery = ({ images }: GalleryProps) => {
  const gallery = images.map((image) => {
    return {
      'original': image,
      'thumbnail': image,
      'lazyload': true,
    }
  })

  return (
    <>
      <ImageGallery items={gallery} showPlayButton={false} showNav={true} />
    </>
  )
}
