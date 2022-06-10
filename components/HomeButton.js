import Link from "next/link";
import Image from 'next/image'
import ButtonStyle from "./ButtonStyle";


const HomeButton = props => (
  
    <ButtonStyle>
      <Link href="/">
        <Image src="/icons/house.svg" alt='house' width='25' height='25'></Image>
      </Link>
    </ButtonStyle>
);

export default HomeButton;
