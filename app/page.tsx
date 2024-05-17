"use client";
import { Button } from "@/components/ui/button";
import { routes } from "@/constants";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleTest = () => {
    router.push(routes.REGISTER);
  }

  return (
    <div>
      <Button onClick={handleTest}>review my test</Button>
    </div>
  );
}
