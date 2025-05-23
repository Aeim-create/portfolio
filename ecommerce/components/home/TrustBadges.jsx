import { CheckCircle } from "lucide-react";

const trustPoints = [
  {
    id: 1,
    title: "100K+ Happy Customers",
    description: "Trusted by customers worldwide",
  },
  {
    id: 2,
    title: "4.8/5 Average Rating",
    description: "Based on 15,000+ reviews",
  },
  {
    id: 3,
    title: "Featured In",
    description: "Vogue, Elle, GQ, and more",
  },
  {
    id: 4,
    title: "Sustainable Practices",
    description: "Certified eco-friendly materials",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-8 bg-muted border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((point) => (
            <div key={point.id} className="flex flex-col items-center text-center">
              <div className="mb-3 text-primary">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-1">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t flex flex-wrap justify-center gap-8 items-center">
          <span className="text-sm font-medium text-muted-foreground">As Featured In:</span>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-lg font-serif font-bold">VOGUE</span>
            </div>
            <div className="h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-lg font-serif italic">Elle</span>
            </div>
            <div className="h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-lg font-bold">GQ</span>
            </div>
            <div className="h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <span className="text-lg font-bold tracking-tight">HARPER'S</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 