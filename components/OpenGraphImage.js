import { CldOgImage } from 'next-cloudinary'

const OpenGraphImage = ({ title }) => {
    return (<>
        <CldOgImage 
            src="images/white"
            overlays={[{
                text: {
                    text: title,
                    fontSize: 200
                }
            }]}/>
        
    </>)
}

export default OpenGraphImage