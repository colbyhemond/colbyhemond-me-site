import { CldOgImage } from 'next-cloudinary'

const OpenGraphImage = ({ title }) => {
    return (<>
        <CldOgImage 
            src="images/white"
            text={title}/>
        
    </>)
}

export default OpenGraphImage