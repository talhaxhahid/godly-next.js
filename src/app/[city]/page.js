import GodlyHome from "@/godlyComponents/home";

export default async function Page({ params }) {
  const { city } = await params;
  return (
    <GodlyHome
      city={city} // Pass the city parameter to the GodlyHome component
    />
  );
}
