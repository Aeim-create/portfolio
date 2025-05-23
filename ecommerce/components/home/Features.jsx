import { Truck, RefreshCw, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on all orders over $50",
  },
  {
    icon: RefreshCw,
    title: "30-Days Return",
    description: "Easy returns within 30 days of purchase",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Your payment information is always safe",
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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