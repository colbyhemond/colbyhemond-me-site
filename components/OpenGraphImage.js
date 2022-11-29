import { CldOgImage } from 'next-cloudinary'

const OpenGraphImage = ({ title }) => {
    return (<>
        <CldOgImage 
            src="images/white"
            overlays={[{
                text: {
                    text: title.toUpperCase(),
                    fontSize: 100,
                    fontFamily="Montserrat",
                    width: '90%',
                    height: '90%'
                }
            }]}/>
        
    </>)
}

export default OpenGraphImage