import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Men's Collection",
    description: "Stylish and comfortable clothing for men",
    image: "/men-category.jpg",
    href: "/category/men",
  },
  {
    name: "Women's Collection",
    description: "Elegant and trendy clothing for women",
    image: "/women-category.jpg",
    href: "/category/women",
  },
  {
    name: "Kids' Collection",
    description: "Fun and durable clothing for kids",
    image: "/kids-category.jpg",
    href: "/category/kids",
  },
  {
    name: "Accessories",
    description: "Complete your look with our accessories",
    image: "/accessories-category.jpg",
    href: "/category/accessories",
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of clothing collections for everyone in the family.
            Quality materials, stylish designs, and comfortable fit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="group">
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/30 transition-colors"></div>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 