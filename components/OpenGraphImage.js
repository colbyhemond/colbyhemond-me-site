import { CldOgImage } from 'next-cloudinary'

const OpenGraphImage = ({ title }) => {

    const convertToUrl = (text) => {
        return text.replace(' ', '%20')

    }

    let text = convertToUrl(title).toUpperCase()

    return (`https://res.cloudinary.com/dhhijcjym/image/upload/c_fill,w_2400,h_1200,g_center/w_2000,c_fit,l_text:Montserrat_100_bold:${text},/fl_layer_apply,fl_no_overflow/f_auto/q_auto/v1/images/white`)
}

export default OpenGraphImage