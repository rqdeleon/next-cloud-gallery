import { v2 as cloudinary } from "cloudinary"
import Image from "next/image";

interface CloudinaryResource{
  public_id: string;
  secure_url: string;
}
export default async function Gallery(){

  cloudinary.config({
    cloud_name: 'duwzronom',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  const resources = await cloudinary.search.expression('folder:ohana-hale/*').max_results(212).execute();
  return(
    <section className="w-full px-10">
      <ul className="grid gap-12 grid-cols-1 md:grid-cols-3">
        {resources.resources.map((img: CloudinaryResource)=>(
            <li key={img.public_id} className="w-full rounded-sm overflow-hidden bg-white">
              <div className="overflow-hidden">
                <Image 
                  src={img.secure_url}
                  width={450}
                  height={450}
                  alt="cloudinary"    
                />
              </div>
            </li>
          ))}
      </ul>
    </section>
  )

}