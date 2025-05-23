import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center bg-accent">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Summer is Coming
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Upto 80% OFF
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Refresh your wardrobe with our latest summer collection. 
              Breathable fabrics, vibrant colors, and styles for all occasions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/category/summer">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/category/new-arrivals">New Arrivals</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-transparent z-10"></div>
            <img 
              src="/hero-image.jpg" 
              alt="Summer Collection" 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-primary text-primary-foreground py-3 text-center">
        <p className="text-sm md:text-base font-medium">
          Free shipping on all orders over $50 | Easy returns within 30 days
        </p>
      </div>
    </section>
  );
} 