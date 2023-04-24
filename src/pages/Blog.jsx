import Header from "../components/Header"
import Main from "../components/blog/Main"
import Sidebar from "../components/blog/Sidebar"

const Blog = () => {
  return (
    <div>
        <Header />
        <div className=" bg-black h-56 flex flex-col justify-end pb-8 bg-[url('https://gymate-iota.vercel.app/static/media/banner.6fee27339c0374683aa5.jpg')] bg-contain bg-right bg-no-repeat mb-32 ">
            <h3 className="text-center text-white text-4xl font-bold">
                Blog
            </h3>
        </div>
        <div className="w-[90%] mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 ">
            <Main />
            <Sidebar />
        </div>
    </div>
  )
}

export default Blog