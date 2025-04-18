import ServicesPage from "@/godlyComponents/servicesPage";

export default async function GodlyServices({ params }) {
  const { slug } = await params;
  return <ServicesPage slug={slug} />;
}
