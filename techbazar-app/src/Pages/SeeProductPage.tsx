


// import React, { useEffect, useState } from 'react';

// const SeeProductPage = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://happy-blue-lab-coat.cyclic.app/products');
//         const data = await response.json();

//         if (response.ok) {
//           setProducts(data);
//         } else {
//           // Handle error cases
//           console.error('Error fetching products');
//         }
//       } catch (error) {
//         console.error('Error fetching products', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleDeleteProduct = async (productId) => {
//     try {
//       const response = await fetch(`https://happy-blue-lab-coat.cyclic.app/products/${productId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         // Product deleted successfully, 
//         setProducts(products.filter((product) => product.id !== productId));
//       } else {
//         //  error 
//         console.error('Error deleting product');
//       }
//     } catch (error) {
//       console.error('Error deleting product', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.price}</td>
//               <td>
//                 <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SeeProductPage;





// import React, { useEffect, useState } from 'react';

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
// }

// const SeeProductPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://happy-blue-lab-coat.cyclic.app/products');
//         const data = await response.json();

//         if (response.ok) {
//           setProducts(data);
//         } else {
//           // Handle error cases
//           console.error('Error fetching products');
//         }
//       } catch (error) {
//         console.error('Error fetching products', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleDeleteProduct = async (productId: number) => {
//     try {
//       const response = await fetch(`https://happy-blue-lab-coat.cyclic.app/products/${productId}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         // Product deleted successfully, update the products state
//         setProducts(products.filter((product) => product.id !== productId));
//       } else {
//         // Handle error cases
//         console.error('Error deleting product');
//       }
//     } catch (error) {
//       console.error('Error deleting product', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.name}</td>
//               <td>{product.description}</td>
//               <td>{product.price}</td>
//               <td>
//                 <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SeeProductPage;





import React, { useEffect, useState } from 'react';
import { Button, Heading } from '@chakra-ui/react';
import styled from "@emotion/styled";

interface Product {
  id: number;
  title: string;
  src:String;
  image:string
  description: string;
  price: number;
}

const SeeProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://techbazaar.onrender.com/products');
        const data = await response.json();

        if (response.ok) {
          setProducts(data);
        } else {
          // Handle error cases
          console.error('Error fetching products');
        }
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
  }, [products]);

  const handleDeleteProduct = async (productId: number) => {
    try {
      const response = await fetch(`https://techbazaar.onrender.com/products/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Product deleted successfully, update the products state
        setProducts(products.filter((product) => product.id !== productId));
      } else {
        // Handle error cases
        console.error('Error deleting product');
      }
      alert("Product Deleted")
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };

  

  return (
    <DIV>
      <Heading mt={10}>Products</Heading>
      <div className='div'>
      {products.map((ele)=>(
        <div className="card">
        <img src={ele.image} alt="" />
        <h3>{ele.title}</h3>
        <h3>₹{ele.price}</h3>
        <Button colorScheme="red" onClick={() => handleDeleteProduct(ele.id)}>
                 Delete
               </Button>
        </div>
      ))}
      </div>
      
       
    </DIV>
  );
};
const DIV=styled.div`
 width :90% ;
 margin: auto;
 .div{
  display: grid;
 grid-template-columns: repeat(4,1fr);
 gap: 15px;
 margin: auto;
 }
 img{
height: 200px;
margin: auto;
}
.card{
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   padding: 5px;
   border-radius: 20px;
   margin-top: 20px;
}
.card:hover{
   transform: scale(1.03);
   cursor: pointer;
   transition: 0.2s ease-in-out;
}
text-align:center;
@media all and  (min-width:751) {
        .div{
            display: grid;
            grid-template-columns: repeat(4,1fr);
            gap: 6px;
        }
        
    }
    @media screen and (min-width: 451px) and (max-width:750px) {
      .div{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 6px;
        }
    }
    @media screen and (max-width: 450px) {
      .div{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            gap: 6px;
        }
    }
`

export default SeeProductPage;
