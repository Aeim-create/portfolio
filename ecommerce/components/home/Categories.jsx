import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const offerings = [
  {
    name: "Curated Collections",
    description: "Carefully selected pieces that work perfectly together",
    image: "/shopnowimages/top1.jpg",
    href: "/shop",
  },
  {
    name: "Sustainable Fashion",
    description: "Eco-friendly clothing that doesn't compromise on style",
    image: "/shopnowimages/pant1.jpg",
    href: "/shop?filter=sustainable",
  },
  {
    name: "Seasonal Essentials",
    description: "Must-have pieces for every season and occasion",
    image: "/shopnowimages/skirt1.jpg",
    href: "/shop?filter=seasonal",
  },
];

export default function Offerings() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At StyleHub, we believe in providing more than just clothing. We offer a complete
            fashion experience with carefully curated collections and sustainable options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering) => (
            <Card key={offering.name} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-[4/3] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/30 transition-colors"></div>
                <img
                  src={offering.image}
                  alt={offering.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{offering.name}</h3>
                <p className="text-muted-foreground mb-4">{offering.description}</p>
                <Button asChild variant="outline">
                  <Link href={offering.href}>Explore</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/shop">Shop All Collections</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 