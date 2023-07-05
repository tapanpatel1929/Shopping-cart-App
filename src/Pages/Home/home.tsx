import { useCallback, useContext, useEffect, useState } from "react";
// import axiosInstance from "../../axiosInstance.js";
// import { AuthContext } from "../../context/authContext";
import axios from "axios";
import axiosInstance from "../../axiosinstance";
type Props = {};

const Home = (props: Props) => {
  // const { user } = useContext(AuthContext);
  const [product, setproduct] = useState([]);

  const loadProducts = useCallback(async () => {
    try {
      const res = await axiosInstance.get("products");
      setproduct(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs pt- 96text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr >
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3 text-lg">
                Product
              </th>
              <th scope="col" className="px-6 py-3 text-lg">
                Category
              </th>

              <th scope="col" className="px-6 py-3 text-lg">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-lg">
                Action
              </th>
            </tr>
          </thead>
          {product.map((x) => (
            <tbody key={x.id}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-32 p-4">
                  <img src={x.image} alt="Apple Watch" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {x.title}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {x.category}
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${x.price}
                </td>
                <td className="px-6 py-4">
                  <button className='bg-blue-600 text-white font-semibold rounded-md p-3 hover:opacity-75 '>Add to Cart </button>
                </td>
              </tr>

            </tbody>
          ))}

        </table>
      </div>
    </>
  );
};

export default Home;