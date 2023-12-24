"use client";

import { Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import { setCookie } from "cookies-next";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Background from "@/components/SignIn/Background";
import { fetchWrapper } from "@/utils/fetchWrapper";

type Inputs = {
  username: string;
  password: string;
};

export default function Signin() {
  const router = useRouter();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const request: any = await fetchWrapper("auth/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });
      setCookie("TOKEN", request.token);

      router.refresh();
    } catch (error: any) {
      console.log(error, "error");
      toast({
        status: "error",
        title: "Erro ao fazer login",
        description: "Verifique suas credenciais",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Background />
      <Flex justify="center" alignItems="center" flexDir="column">
        <Flex mt="400px" gap="20px" align="left" flexDir="column" w="400px">
          <Input
            size="lg"
            placeholder="Username"
            _hover={{
              borderColor: "purple.200",
            }}
            _active={{
              borderColor: "purple.200",
            }}
            {...register("username", { required: true })}
          />
          {errors.username && (
            <Text color="red" textAlign="left">
              Username é obrigatório
            </Text>
          )}
          <Input
            size="lg"
            placeholder="Password"
            _hover={{
              borderColor: "purple.200",
            }}
            _active={{
              borderColor: "purple.200",
            }}
            {...register("password", { required: true })}
          />
          {errors.password && (
            <Text color="red" textAlign="left">
              Password é obrigatório
            </Text>
          )}
        </Flex>
        <Button
          type="submit"
          w="100%"
          maxW="250px"
          maxH="58px"
          py="22px"
          px="42px"
          my="36px"
          bg="purple.200"
          fontSize="14px"
          color="white"
          borderRadius="20px"
          transition="0.2s"
          _hover={{
            filter: "brightness(80%)",
          }}
        >
          Login
        </Button>
      </Flex>
    </form>
  );
}
