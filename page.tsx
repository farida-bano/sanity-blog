import Image from "next/image";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

interface Icooking {
  expert: string;
  introduction: string;
  name: string;
  totka: string;
  recipe: string;
  image: {
    asset: {
      _ref: string;
    };
  };
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default async function Home() {
  let res: Icooking[] = await client.fetch(`*[_type == 'cooking']`);
  console.log(res);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Celebrity Chefs and Recipes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {res.map((data) => (
          <div key={data.name} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col items-center text-center">
              {/* Display the image from Sanity */}
              <div className="w-32 h-32 mb-4">
  <Image
    className="w-full h-full object-cover rounded-full"
    src={data.image?.asset === 'mehbob' ? '/mehbob.png' : '/zub.png'} // Fallback to zub.png if asset is not mehbob
    alt={data.name}
    width={128}
    height={128}
  />
</div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{data.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{data.expert}</p>
              <p className="text-gray-700 mb-4">{data.introduction}</p>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">Totka (Cooking Tip)</h3>
                <p className="text-gray-700">{data.totka}</p>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">Recipe</h3>
                <p className="text-gray-700">{data.recipe}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

