import PaginationUI from "@/app/ui/dashboard/pagination/pagination";
import styles from "@/app/ui/dashboard/products/products.module.css";
import SearchUI from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
// Define the Props interface
export interface IProductsPageProps {
  prop1: string;
  prop2: string;
  prop3: string;
}

const ProductsPage: React.FunctionComponent<IProductsPageProps> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchUI placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src={"/noproduct.jpg"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                IPhone
              </div>
            </td>
            <td>desc</td>
            <td>$999</td>
            <td>13.01.2022</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationUI />
    </div>
  );
};
export default ProductsPage;
