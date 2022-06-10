import { useRouter } from 'next/router'
import Image from 'next/image'
import ButtonStyle from './ButtonStyle';


export default function BackButton() {
  const router = useRouter()
  
  return(
    <a onClick={() => router.back()} className='flex place-content-center'>
    <ButtonStyle>
        <Image src="/icons/left_arrow.svg" alt='backbutton' width='20' height='20'></Image>
    </ButtonStyle>
    </a>
    
  )
};