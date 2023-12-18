import { CtaBtn, MetaTags } from "../../components";

function PageNotFound() {
  return (
    <>
      <MetaTags title="404 • Page not found" />

      <section className="flex items-center ">
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-gray-500">
          <img
            src="https://images.unsplash.com/photo-1510133768164-a8f7e4d4e3dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="404 Error"
          />
        </div>
        <div className="container space-y-8">
          <div className="space-y-4">
            <p className="uppercase tracking-[0.5rem]">404</p>

            <h1 className=" font-bold">Page Not Found!</h1>

            <p className="text-lg max-w-3xl leading-[2rem] pt-2">
              The page you are trying to access, is not available at this
              moment. Try again later. Navigate to some other pages.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <CtaBtn url="/" className="text-white">
              Back to Home
            </CtaBtn>

            <CtaBtn className="bg-white border-gray-800 text-black" url="/feed">
              Back to Feed
            </CtaBtn>
          </div>
        </div>
        <div className="bg-white w-full h-[70px] absolute bottom-0 border-t border-b border-gray-500 py-4"></div>
      </section>
    </>
  );
}

export default PageNotFound;
