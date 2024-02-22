import Header from "layouts/Header";
import Content from "layouts/Content";

const App = () => {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-8 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between">
        <Header />
        <Content />
      </div>
    </main>
  );
};

export default App;
