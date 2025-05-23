import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const womenCategories = [
  {
    name: "Tops",
    description: "Blouses, t-shirts, sweaters and more",
    image: "/shopnowimages/top1.jpg",
    href: "/shop/women/tops",
    count: 24,
  },
  {
    name: "Bottoms",
    description: "Pants, jeans, leggings and more",
    image: "/shopnowimages/pant1.jpg",
    href: "/shop/women/bottoms",
    count: 18,
  },
  {
    name: "Skirts",
    description: "Mini, midi, maxi skirts and more",
    image: "/shopnowimages/skirt1.jpg",
    href: "/shop/women/skirts",
    count: 12,
  },
];

export default function Shop() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-accent py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">Shop Collection</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Explore our latest collection of women's clothing. From casual to formal,
                we have everything you need to express your unique style.
              </p>
            </div>
          </div>
        </section>

        {/* Women's Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Women's Collection</h2>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm">
                  Sort by: Featured
                </Button>
                <Button variant="outline" size="sm">
                  Filter
                </Button>
              </div>
            </div>

            <Separator className="mb-8" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {womenCategories.map((category) => (
                <Link href={category.href} key={category.name} className="block group">
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                          <p className="text-sm opacity-90 mb-2">{category.description}</p>
                          <span className="text-xs bg-primary/80 px-2 py-1 rounded-full">
                            {category.count} items
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for? Contact our customer service team for assistance.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 