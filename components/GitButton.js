import Link from "next/link";
import Image from 'next/image'
import ButtonStyle from "./ButtonStyle";


const GitButton = props => (
  
    <ButtonStyle>
      <Link href="https://github.com/colbyhemond">
        <Image src="/icons/github.svg" alt='githublogo' width='25' height='25'></Image>
      </Link>
    </ButtonStyle>
);

export default GitButton;