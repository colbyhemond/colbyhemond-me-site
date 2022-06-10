import Link from 'next/link'

const Card = ({href, children}) => {
    return (<>
        <Link href={href}>
          <div className='m-5 p-[1rem] max-w-[15rem] max-h-[15rem] h-[15rem] w-[100%] border rounded-xl overflow-hidden text-ellipses 
                            hover:cursor-pointer hover:border-orange-300'>
            {children}
          </div>
        </Link>
    </>)
}

export default Card