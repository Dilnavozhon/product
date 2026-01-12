import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useApi from "../../hooks/useApi";
import ProductCard from "../../components/ProductCard";
import Loading from "../../components/Loading/Loading";

function Home() {
  const { data,loading } = useApi();
 
   
  if(loading)return <Loading/>

  return (
    <>
      <Navbar />
      <main className="grow py-10">
        {/* Products */}
        <div className="container">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {data && data.map((product) => {
                return <ProductCard product={product}/>;
              })}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
