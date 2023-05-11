export async function generateMetadata({
  params: { category, id },
}: {
  params: { category: string; id: string };
}) {
  return {
    title: `${category} - ${id}`,
  };
}

export default function ItemPage({
  params: { id, category },
}: {
  params: { id: string; category: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-3xl">
        (Hard Route) {category} - {id}
      </h2>
    </main>
  );
}
