import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import Photo from "assets/img/profile/image.png"
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
const SignUp = () => {
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
    const googleText = useColorModeValue("navy.700", "white");
    const googleHover = useColorModeValue(
      { bg: "gray.200" },
      { bg: "whiteAlpha.300" }
    );
    const googleActive = useColorModeValue(
      { bg: "secondaryGray.300" },
      { bg: "whiteAlpha.200" }
    );
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <DefaultAuth illustrationBackground={Photo} image={Photo}>
    <Flex
      maxW={{ base: "100%", md: "max-content" }}
      w='100%'
      mx={{ base: "auto", lg: "0px" }}
      me='auto'
      h='100%'
      alignItems='start'
      justifyContent='center'
      mb={{ base: "30px", md: "60px" }}
      px={{ base: "25px", md: "0px" }}
      mt={{ base: "40px", md: "14vh" }}
      flexDirection='column'>
        
        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
             <Box me='auto'>
                <Heading color={textColor} fontSize='36px' mb='10px'>
                Create your account
                </Heading>
                <Text
                    mb='36px'
                    ms='4px'
                    color={textColorSecondary}
                    fontWeight='400'
                    fontSize='md'>
                   Creating an account is easy and only takes a few moments.
                </Text>
             </Box>
            <FormControl>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              mb='8px'>
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='email'
              placeholder='Enter Email Address'
              mb='24px'
              fontWeight='500'
              size='lg'
            />
            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              color={textColor}
              display='flex'>
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size='md'>
              <Input
                isRequired={true}
                fontSize='sm'
                placeholder='Min. 12 characters'
                mb='24px'
                size='lg'
                type={show ? "text" : "password"}
                variant='auth'
              />
              <InputRightElement display='flex' alignItems='center' mt='4px'>
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
           
            <Button
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='100%'
              h='50'
              onClick={nextStep}
              mb='24px'>
             Next
            </Button>
          </FormControl>
          </div>
        )}

        {step === 2 && (
         <div>
            <Box me='auto'>
                <Heading color={textColor} fontSize='36px' mb='10px'>
                Verify your email
                </Heading>
                <Text
                    mb='36px'
                    ms='4px'
                    color={textColorSecondary}
                    fontWeight='400'
                    fontSize='md'>
                   We sent a code email to test1234@gmail.com, please check your mailbox and enter the code to verify your email address.
                </Text>
             </Box>
         <FormControl>
         <FormLabel
           display='flex'
           ms='4px'
           fontSize='sm'
           fontWeight='500'
           color={textColor}
           mb='8px'>
           Verfication Code <Text color={brandStars}>*</Text>
         </FormLabel>
         <Input
           isRequired={true}
           variant='auth'
           fontSize='sm'
           
           ms={{ base: "0px", md: "0px" }}
           type='email'
           placeholder='Verfication Code'
           mb='24px'
           fontWeight='500'
           size='lg'
         />
          <p className='py-12'>If you don't see the email, please check your spam folder or click Resend code.</p><br/>
         <Flex justifyContent='space-between' align='center' mb='24px'>
         <Button
           fontSize='sm'
           variant='brand'
           fontWeight='500'
           w='20%'
           h='50'
           onClick={prevStep}
           mb='24px'>
          Previous
         </Button>
         <Button
           fontSize='sm'
           outline='outline'
           variant='brand'
           fontWeight='500'
           w='20%'
           h='50'
           onClick={nextStep}
           mb='24px'>
          Next
         </Button>
         </Flex>
       </FormControl>
         
          </div>
        )}

        {step === 3 && (
          <div>
             <Box me='auto'>
                <Heading color={textColor} fontSize='36px' mb='10px'>
                Almost there!
                </Heading>
                <Text
                    mb='36px'
                    ms='4px'
                    color={textColorSecondary}
                    fontWeight='400'
                    fontSize='md'>
                  Stay in the loop! Share your contact info with us.
                </Text>
             </Box>
           <FormControl>
         <FormLabel
           display='flex'
           ms='4px'
           fontSize='sm'
           fontWeight='500'
           color={textColor}
           mb='8px'>
           Full Name<Text color={brandStars}>*</Text>
         </FormLabel>
         <Input
           isRequired={true}
           variant='auth'
           fontSize='sm'
           ms={{ base: "0px", md: "0px" }}
           type='email'
           placeholder='Enter Full Name'
           mb='24px'
           fontWeight='500'
           size='lg'
         />
         <FormLabel
           display='flex'
           ms='4px'
           fontSize='sm'
           fontWeight='500'
           color={textColor}
           mb='8px'>
           Phone Number <Text color={brandStars}>*</Text>
         </FormLabel>
         <Input
           isRequired={true}
           variant='auth'
           fontSize='sm'
           ms={{ base: "0px", md: "0px" }}
           type='email'
           placeholder='Enter Number'
           mb='24px'
           fontWeight='500'
           size='lg'
         />
         <FormLabel
           display='flex'
           ms='4px'
           fontSize='sm'
           fontWeight='500'
           color={textColor}
           mb='8px'>
           Referral Code 
         </FormLabel>
         <Input
           isRequired={false}
           variant='auth'
           fontSize='sm'
           ms={{ base: "0px", md: "0px" }}
           type='email'
           placeholder='Referral Code'
           mb='24px'
           fontWeight='500'
           size='lg'
         />
         <Flex justifyContent='space-between' align='center' mb='24px'>
         <Button
           fontSize='sm'
           variant='brand'
           fontWeight='500'
           w='20%'
           h='50'
           onClick={prevStep}
           mb='24px'>
          Previous
         </Button>
         <Button
           fontSize='sm'
           outline='outline'
           variant='brand'
           fontWeight='500'
           w='40%'
           h='50'
           type='submit'
           onClick={nextStep}
           mb='24px'>
          Sign Our petition
         </Button>
         </Flex>
       </FormControl>
          </div>
        )}
      </form>
    </Flex>
    </Flex>
    </DefaultAuth>
  );
};

export default SignUp;
