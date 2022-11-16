import Image from 'next/image'
import Button from "./Button";


const HomeButton = props => (
  <Button href='/'>
    <Image src="/icons/house.svg" alt='house' width='25' height='25'></Image>
  </Button>
);

export default HomeButton;
