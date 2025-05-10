import ServicesPage from "@/godlyComponents/servicesPage";

export default async function GodlyServices({ params }) {
  const param = await params;
  const { slug, city } = param;

  return <ServicesPage slug={slug} city={city} />;
}
