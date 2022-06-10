// import Avatar from '../components/avatar'
import DateFormatter from './DateFormatter'
// import CoverImage from '../components/cover-image'
import PostTitle from './PostTitle'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-full">
        <div className=' w-full flex flex-col content-center font-thin text-xs md:text-sm'>
          <div className="">
            Published: <DateFormatter dateString={date} />
          </div>

          {/* <div className="">
            Updated: <DateFormatter dateString={date} />
          </div> */}
        </div>
      </div>
    </>
  )
}