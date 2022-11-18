import Image from 'next/image'
import Button from './Button';



const GitButton = props => (
  <div>
    <Button href='https://github.com/colbyhemond'>
      <Image src="/icons/github.svg" alt='githublogo' width='25' height='25'></Image>
    </Button>
  </div>
    
);

export default GitButton;