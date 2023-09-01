



// import React, { useState } from 'react';

// const AdminPage = () => {
//   const [productName, setProductName] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productPrice, setProductPrice] = useState('');

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://happy-blue-lab-coat.cyclic.app/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: productName,
//           description: productDescription,
//           price: productPrice,
//         }),
//       });

//       if (response.ok) {
//         // Product added successfully
//         console.log('Product added successfully');
//       } else {
//         // error 
//         console.error('Error adding product');
//       }
//     } catch (error) {
//       console.error('Error adding product', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Product</h2>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Product Description"
//           value={productDescription}
//           onChange={(e) => setProductDescription(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Product Price"
//           value={productPrice}
//           onChange={(e) => setProductPrice(e.target.value)}
//         />
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AdminPage;





// import React, { useState } from 'react';

// const AdminPage: React.FC = () => {
//   const [productName, setProductName] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productPrice, setProductPrice] = useState('');

//   const handleFormSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://happy-blue-lab-coat.cyclic.app/products', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: productName,
//           description: productDescription,
//           price: productPrice,
//         }),
//       });

//       if (response.ok) {
//         // Product added successfully, show success message or redirect
//         console.log('Product added successfully');
//       } else {
//         // Handle error cases
//         console.error('Error adding product');
//       }
//     } catch (error) {
//       console.error('Error adding product', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Add Product</h2>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={productName}
//           onChange={(e) => setProductName(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Product Description"
//           value={productDescription}
//           onChange={(e) => setProductDescription(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Product Price"
//           value={productPrice}
//           onChange={(e) => setProductPrice(e.target.value)}
//         />
//         <button type="submit">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AdminPage;



import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import styled from "@emotion/styled";

const AdminPage: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [category,setCategory]=useState("")
  const [image,setImage]=useState("")
  const [productPrice, setProductPrice] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://techbazaar.onrender.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image:image,
          title: productName,
          description: productDescription,
          price: productPrice,
          category:category
        }),
      });

      if (response.ok) {
        // Product added successfully, show success message or redirect
        console.log('Product added successfully');
      } else {
        // Handle error cases
        console.error('Error adding product');
      }
      alert("Product Added Successfully")
      setImage("")
      setProductDescription("")
      setProductName("")
      setProductPrice("")
      setCategory("")
    } catch (error) {
      console.error('Error adding product', error);
    }
  };

  return (
    <DIV>
      <Box margin={'80px 80px 0px 80px'}>
      <Heading as="h2" mb={4}>Add Product</Heading>
      <form className='card' onSubmit={handleFormSubmit}>
        <FormControl>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Image</FormLabel>
          <Input
            type="text"
            placeholder="Product Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Description</FormLabel>
          <Input
            type="text"
            placeholder="Product Description"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Price</FormLabel>
          <Input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Product Category</FormLabel>
          <Input
            type="text"
            placeholder="Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4}>Add Product</Button>
      </form>
    </Box>
    </DIV>
    
  );
};
const DIV=styled.div`
 width :90% ;
 margin: auto;
.card{
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   padding: 20px;
   border-radius: 20px;
  }
text-align:center;
`

export default AdminPage;