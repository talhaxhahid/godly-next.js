"use client"
import ServicesPage from "@/godlyComponents/servicesPage";
import { useSearchParams, usePathname } from 'next/navigation';
export default  async function GodlyServices({ params }) {
  const { slug } = await params;
  return <ServicesPage slug={slug} />;
}
