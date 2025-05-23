import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Organic Cotton Tee",
    price: 29.99,
    image: "/shopnowimages/top1.jpg",
    tag: "Trending",
    href: "/product/organic-cotton-tee",
  },
  {
    id: 2,
    name: "Relaxed Fit Dress",
    price: 49.99,
    image: "/shopnowimages/pant1.jpg",
    tag: "Bestseller",
    href: "/product/relaxed-fit-dress",
  },
  {
    id: 3,
    name: "Premium Denim Jeans",
    price: 59.99,
    image: "/shopnowimages/skirt1.jpg",
    tag: "New Arrival",
    href: "/product/premium-denim-jeans",
  },
  {
    id: 4,
    name: "Oversized Sweater",
    price: 44.99,
    image: "/product-4.jpg",
    tag: "Limited Edition",
    href: "/product/oversized-sweater",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
            <p className="text-muted-foreground">
              Discover our most popular styles that everyone loves
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <Link href={product.href}>
                <div className="aspect-square relative overflow-hidden">
                  <span className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md">
                    {product.tag}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              </Link>
              <CardContent className="pt-4">
                <Link href={product.href}>
                  <h3 className="font-medium mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-semibold text-lg">${product.price.toFixed(2)}</p>
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
      </div>
    </section>
  );
} 