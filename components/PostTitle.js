export default function PostTitle({ children }) {
    return (
      <h1 className="mt-20 text-3xl text-center md:text-6xl max-w-[700px]">
        {children}
      </h1>
    )
  }