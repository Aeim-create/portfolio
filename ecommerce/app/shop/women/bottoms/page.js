import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ShoppingCart, Heart, Filter, ChevronDown } from "lucide-react";

const products = [
  {
    id: 1,
    name: "High-Waisted Jeans",
    price: 59.99,
    image: "/product-bottom-1.jpg",
    colors: ["Blue", "Black", "Grey"],
    href: "/product/high-waisted-jeans",
  },
  {
    id: 2,
    name: "Wide Leg Pants",
    price: 49.99,
    image: "/product-bottom-2.jpg",
    colors: ["Beige", "Navy", "Olive"],
    href: "/product/wide-leg-pants",
  },
  {
    id: 3,
    name: "Slim Fit Trousers",
    price: 54.99,
    image: "/product-bottom-3.jpg",
    colors: ["Black", "Grey", "Camel"],
    href: "/product/slim-fit-trousers",
  },
  {
    id: 4,
    name: "Linen Pants",
    price: 44.99,
    image: "/product-bottom-4.jpg",
    colors: ["White", "Beige", "Light Blue"],
    href: "/product/linen-pants",
  },
  {
    id: 5,
    name: "Leggings",
    price: 29.99,
    image: "/product-bottom-5.jpg",
    colors: ["Black", "Grey", "Navy"],
    href: "/product/leggings",
  },
  {
    id: 6,
    name: "Cargo Pants",
    price: 64.99,
    image: "/product-bottom-6.jpg",
    colors: ["Khaki", "Olive", "Black"],
    href: "/product/cargo-pants",
  },
];

export default function WomenBottoms() {
  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="bg-muted py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li className="text-muted-foreground">/</li>
                <li>
                  <Link href="/shop" className="text-muted-foreground hover:text-primary">
                    Shop
                  </Link>
                </li>
                <li className="text-muted-foreground">/</li>
                <li>
                  <Link href="/shop" className="text-muted-foreground hover:text-primary">
                    Women
                  </Link>
                </li>
                <li className="text-muted-foreground">/</li>
                <li className="font-medium">Bottoms</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Category Header */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Women's Bottoms</h1>
                <p className="text-muted-foreground">18 products</p>
              </div>
              <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  Sort by: Featured
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Products Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden group">
                  <Link href={product.href}>
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                  <CardContent className="pt-4">
                    <Link href={product.href}>
                      <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="font-semibold text-lg mb-2">${product.price.toFixed(2)}</p>
                    <div className="flex gap-1">
                      {product.colors.map((color) => (
                        <span key={color} className="text-xs text-muted-foreground">
                          {color}
                          {color !== product.colors[product.colors.length - 1] && ", "}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 