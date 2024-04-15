import Image from "next/image";
import {ThemeToggle} from "@/components/ui/theme-toggle";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeToggle />
      <Card>
        <CardHeader>
          <CardTitle>Next.js</CardTitle>
        </CardHeader>
        <CardContent>
          <Image
            src="/favicon.ico"
            alt="Next.js Logo"
            width={400}
            height={200}
          />
        </CardContent>
        </Card>
    </main>
  );
}
