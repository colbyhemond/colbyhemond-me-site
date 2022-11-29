import { CldOgImage } from 'next-cloudinary'

const OpenGraphImage = ({ title }) => {
    return (<>
        <CldOgImage text={title}/>
        
    </>)
}

export default OpenGraphImage