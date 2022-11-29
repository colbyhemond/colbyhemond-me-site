import { CldOgImage } from 'next-cloudinary'

const OpenGraphImage = ({ title }) => {
    return (<>
        <CldOgImage
  src="images/white"
  overlays={[
    {
      width: 1024,
      crop: 'fit',
      text: {
        color: 'black',
        fontFamily: 'Source Sans Pro',
        fontSize: 150,
        fontWeight: 'bold',
        text: title
      },
      position: {
        x: 100,
        y: -100,
        gravity: 'west',
      },
    }
  ]}
  twitterTitle={title}
  alt={`White background with text ${title}`}
/>
        
    </>)
}

export default OpenGraphImage