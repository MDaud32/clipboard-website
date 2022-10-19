import logo from './assets/images/logo.svg';
function App() {
  return (
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
          <button className="rounded-full border-2 px-4 p-4 bg-green-500 hover:opacity-80 shadow-lg transition hover:-translate-y-1">
            Download for IOS
          </button>
          <button className="rounded-full border-2 px-4 p-4 bg-blue-500 hover:opacity-80 shadow-lg transition hover:-translate-y-1">
            Download for Mac
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
