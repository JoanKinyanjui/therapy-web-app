import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import LoadingPage from "@/components/LoadingPage";
import { useRouter } from "next/router";

export default function Home() {
  const [loading,setLoading] = useState(true);
  const router = useRouter();
  let token ;

  useEffect(()=>{
    token = localStorage.getItem('token');
    console.log('token', token);
  if(token){
    setLoading(false);
    router.push('/home')
  } else{
    router.push('/login')
  }
  });

  if(loading){
    return <LoadingPage/>
  }
}

