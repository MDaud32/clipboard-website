import logo from './assets/images/logo.svg';
import computer from './assets/images/image-computer.png';
import clipboard from './assets/images/image-devices.png';
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
    </div>
  );
}

export default App;
