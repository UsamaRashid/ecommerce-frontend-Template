import { useToast } from "@chakra-ui/react";
import React from "react";

export default function Register() {
  const toast = useToast();

  return (
    <div>
      Register
      <button
        className='bg-violet-600 rounded-full'
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </button>
    </div>
  );
}
