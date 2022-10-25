import logo from './assets/images/logo.svg';
import computer from './assets/images/image-computer.png';
import clipboard from './assets/images/image-devices.png';
import {
  CgCopy,
  CgEye,
  CgGoogle,
  CgFacebook,
  CgInstagram,
} from 'react-icons/cg';
import { MdOutlineTextSnippet } from 'react-icons/md';
import google from './assets/images/logo-google.png';
import hp from './assets/images/logo-hp.png';
import ibm from './assets/images/logo-ibm.png';
import microsoft from './assets/images/logo-microsoft.png';
import vector from './assets/images/logo-vector-graphics.png';
function App() {
  return (
    <div className="">
      <div id="hero">
        <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
          <img src={logo} alt="logo image" className="mx-auto my-16" />
          <h3 className="text-5xl font-semibold text-gray-700">
            A History of everything you copy
          </h3>
          <p className="text-gray-500 text-2xl mt-7 max-w-3xl mx-auto">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="w-full flex flex-col sm:flex-row justify-center mt-8 gap-10 ">
            <button className="rounded-full border-2 px-4 p-4 bg-green-500 hover:opacity-80 shadow-lg transition hover:-translate-y-1 duration-200  ">
              Download for IOS
            </button>
            <button className="rounded-full border-2 px-4 p-4 bg-blue-500 hover:opacity-80 shadow-lg transition hover:-translate-y-1 duration-200">
              Download for Mac
            </button>
          </div>
        </div>
      </div>
      {/* snippets section */}
      <div
        id="snippets"
        className="flex flex-col mx-auto max-w-6xl text-center my-20 px-10">
        <h3 className="text-4xl font-semibold text-gray-700 ">
          Keep Track of your snippets
        </h3>
        <p className="text-gray-500 max-w-3xl text-2xl mt-7 mx-auto">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
        <div className="w-full flex flex-col sm:flex-row mt-20 items-center">
          <img
            src={computer}
            alt="computer image"
            className="sm:w-1/2 w-full"
          />
          <div className="flex flex-col sm:w-1/2 sm:mt-0 mt-20 gap-8 justify-start">
            <div className="w-full space-y-3">
              <h2 className="text-3xl font-semibold text-center">
                Quick Search
              </h2>
              <p className="sm:px-10 w-full sm:w-4/5 text-center mx-auto text-lg text-gray-500">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="w-full space-y-3">
              <h2 className="text-3xl font-semibold text-center">
                iCloud Sync
              </h2>
              <p className="sm:px-10 w-full sm:w-4/5 text-center mx-auto text-lg text-gray-500">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div className="w-full space-y-3">
              <h2 className="text-3xl font-semibold text-center">
                Completely History
              </h2>
              <p className="sm:px-10 w-full sm:w-4/5 text-center mx-auto text-lg text-gray-500">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* clipboard */}
      <div className="flex flex-col justify-center max-w-6xl mx-auto mt-44">
        <div className="mx-auto space-y-4 mb-16">
          <h2 className="text-5xl text-gray-700 text-center font-semibold">
            Access Clipboard Anywhere
          </h2>
          <p className="text-2xl text-gray-500 max-w-3xl text-center">
            Whether you are on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
        </div>
        <img
          src={clipboard}
          alt="device image"
          className="w-full sm:w-3/4 items-center mx-auto"
        />
      </div>
      {/* workflow */}
      <div className="flex flex-col justify-center max-w-6xl mx-auto mt-44">
        <div className="mx-auto space-y-4 mb-16">
          <h2 className="text-5xl text-gray-700 text-center font-semibold">
            Supercharge your workflow
          </h2>
          <p className="text-2xl text-gray-500 max-w-3xl text-center">
            We've got the tools to boost your productivity.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-around mb-10 gap-7 w-3/4 sm:w-full mx-auto">
          <div className="flex flex-col text-center items-center gap-4">
            <CgCopy className="text-[3rem] text-gray-400" />
            <h2 className="text-2xl">Create Blacklist</h2>
            <p className="text-xl text-gray-500 max-w-md">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="flex flex-col text-center items-center gap-4">
            <MdOutlineTextSnippet className="text-[3rem] text-gray-400" />
            <h2 className="text-2xl">Plain Text Snippets</h2>
            <p className="text-xl text-gray-500 max-w-md">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div className="flex flex-col text-center items-center gap-4">
            <CgEye className="text-[3rem] text-gray-400" />
            <h2 className="text-2xl">Sneak Preview</h2>
            <p className="text-xl text-gray-500 max-w-md">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-24 justify-center mt-24 mb-24 w-72 mx-auto">
        <img src={google} alt="" className="" />
        <img src={hp} alt="" className="" />
        <img src={ibm} alt="" className="" />
        <img src={microsoft} alt="" className="" />
        <img src={vector} alt="" className="" />
      </div>
      <div>
        <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
          <h3 className="text-5xl font-semibold text-gray-700">
            Clipboard for iOS and MacOS
          </h3>
          <p className="text-gray-500 text-2xl mt-7 max-w-3xl mx-auto">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
          <div className="w-full flex flex-col sm:flex-row justify-center mt-8 gap-10 ">
            <button className="rounded-full border-2 px-4 p-4 bg-green-500 hover:opacity-80 shadow-lg transition hover:-translate-y-1 duration-200  ">
              Download for IOS
            </button>
            <button className="rounded-full border-2 px-4 p-4 bg-blue-500 hover:opacity-80 shadow-lg transition hover:-translate-y-1 duration-200">
              Download for Mac
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row bg-gray-100 justify-center sm:space-x-44 space-y-12 py-16">
        <img
          src={logo}
          alt=""
          className="w-[6rem] h-[6rem] self-end sm:mx-0 mx-auto"
        />
        <div className=" text-2xl gap-8 text-gray-400 items-center text-center sm:text-start sm:grid-cols-3 grid">
          <a href="#" className="">
            FAQs
          </a>
          <a href="#" className="">
            Privacy Policy
          </a>
          <a href="#" className="">
            Install Guide
          </a>
          <a href="#" className="">
            Contact Us
          </a>
          <a href="#" className="">
            Press Kit
          </a>
        </div>
        <div className="flex flex-row items-center text-4xl gap-2 mx-auto">
          <a href="#" className="">
            <CgGoogle />
          </a>
          <a href="#" className="">
            <CgFacebook />
          </a>
          <a href="#" className="">
            <CgInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
