import { Leaf, Award, Truck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Sustainable Materials",
    description: "Our products are made from eco-friendly and sustainable materials",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Carefully crafted garments designed to last for years",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on all orders over $50 with quick delivery",
  },
  {
    icon: ShieldCheck,
    title: "Secure Shopping",
    description: "Safe payment processing and data protection guaranteed",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose StyleHub</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience possible.
            Here's what sets us apart from the rest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm"
            >
              <div className="bg-accent p-3 rounded-full mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 