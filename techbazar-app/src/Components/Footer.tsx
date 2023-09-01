import React from 'react'
import Logo from "../Images/Logo.png"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartFlatbedSuitcase,faGift,faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons'
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
 Button,Image, Heading
} from '@chakra-ui/react';
function Footer() {
  return <div>
        <Box
      bg={"none"}
      color={"white"}>
      <Container as={Stack} maxW={'6xl'} py={10}  mt={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box textAlign={"justify"}>
              <Image w={200} src={Logo} />
            </Box>
            <Box mr={50}>
            <Text textAlign={"justify"} fontSize={14} fontWeight={600} color={"black"} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas magni ab distinctio assumenda, vel ratione accusamus impedit sapiente illo aliquam.</Text>
            </Box>
            <Text fontSize={20} fontWeight={600} color={"black"}>Account Payments</Text>
            <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", margin:"10px 100px 0px 0px", width:"300px", gap:"10px"}}>
                  <div className='smallImageBox'>
                    <img src="https://media.designrush.com/inspiration_images/135142/conversions/_1511452770_462_stripe-preview.jpg" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://logowik.com/content/uploads/images/857_visa.jpg" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://cdn.vox-cdn.com/thumbor/VKD3KfczL8xi89_n32rmbjTpdlg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.png" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F81950474406%2F1622121594481%2F2Klarna-top-box2-retina-715586.jpg%3Fv%3D0&c_options=" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                  <img src="https://pngimg.com/uploads/paypal/paypal_PNG9.png" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://www.pngkit.com/png/detail/235-2355595_apple-pay-logo.png" alt="img" />
                  </div>
                  <div className='smallImageBox'>
                    <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202011/Screenshot_2020-11-05_at_5.14._1200x768.png?size=690:388" alt="img" />
                  </div>
              </div>
          </Stack>
          <Stack align={'flex-start'} fontSize={14} fontWeight={400} color={"black"} >
            <Link fontSize={18}> <b>Department</b></Link>
            <Link href={'/'}>Fashion</Link>
            <Link href={'/'}>Education Products</Link>
            <Link href={'/'}>Frozen Food</Link>
            <Link href={'/'}>Beverages</Link>
            <Link href={'/'}>Organic Grocery</Link>
            <Link href={'/'}>Office Supplies</Link>
            <Link href={'/'}>Beauty Products</Link>
            <Link href={'/'}>Books</Link>
            <Link href={'/'}>Electronic & Gadges</Link>
            <Link href={'/'}>Trivel Accessories</Link>
            <Link href={'/'}>Fitness</Link>
            <Link href={'/'}>Sneakers</Link>
            <Link href={'/'}>Toys</Link>
            <Link href={'/'}>Furniture</Link>
          </Stack>
          <Stack align={'flex-start'} fontSize={14} fontWeight={400} color={"black"}>
            <Link fontSize={18}><b>About Us</b></Link>
            <Link href={'/'}>About Shopcart</Link>
            <Link href={'/'}>Careers</Link>
            <Link href={'/'}>News & Blogs</Link>
            <Link href={'/'}>Help</Link>
            <Link href={'/'}>Press Center</Link>
            <Link href={'/'}>Shop by Location</Link>
            <Link href={'/'}>Shopcard Brands</Link>
            <Link href={'/'}>Affiliate & Partners</Link>
            <Link href={'/'}>Ideas & Guides</Link>
          </Stack>
          <Stack align={'flex-start'} fontSize={14} fontWeight={400} color={"black"}>
            <Link fontSize={18} ><b>Servises</b></Link>
            <Link href={'/'}>Gift Cart</Link>
            <Link href={'/'}>Mobile App</Link>
            <Link href={'/'}>Shipping & Delivery</Link>
            <Link href={'/'}>Order Pickup</Link>
            <Link href={'/'}>Account Signup</Link>
          </Stack>
          <Stack align={'flex-start'} fontSize={14} fontWeight={400} color={"black"}>
            <Link fontSize={18} ><b>Help</b></Link>
            <Link href={'#'}>Shopcart Help</Link>
            <Link href={'#'}>Returns</Link>
            <Link href={'#'}>Track Orders</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Organic Grocery</Link>
            <Link href={'#'}>Feedback</Link>
            <Link href={'#'}>Security & Fraud</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    <div className='footerBottom' style={{width:"90%",margin:"auto"}}>
            <div style={{display:"flex", justifyContent:"space-between", width:"360px"}}>
        <div> <FontAwesomeIcon icon={faCartFlatbedSuitcase} style={{color: "#df3ad9",}} /> Become Seller</div>
        <div> <FontAwesomeIcon icon={faGift} style={{color: "#df3ad9",}} /> Gift Cards </div>
        <div> <FontAwesomeIcon icon={faCircleInfo}  style={{color: "#df3ad9",}} /> Help Center</div>
           </div>
           <div style={{display:"flex", justifyContent:"space-between", width:"190px"}}>
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            </div>
            <div>All Right Reserved By Musemind | 2023</div>
         </div>
     </div> 
}

export default Footer



            