import Link from "next/link";
import Image from 'next/image'
import ButtonStyle from "./ButtonStyle";
import {forwardRef} from 'react'


const ButtonContents = forwardRef(({ onClick, href, children }, ref) => {
  return(
    <a href={href}  onClick={onClick} ref={ref}>
      {children}
    </a>
  )
})


const Button = ({children, href}) => (
  <Link href={href} passHref legacyBehavior>
    <ButtonContents>
      <ButtonStyle>
        {children}
      </ButtonStyle>
    </ButtonContents>
  </Link>
);

export default Button;