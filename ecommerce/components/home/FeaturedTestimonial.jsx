import { Star, Quote } from "lucide-react";

export default function FeaturedTestimonial() {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Customer Spotlight</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from one of our long-time customers about their StyleHub experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute -top-10 -left-10 h-20 w-20 text-primary/10" />
          
          <div className="bg-background rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/testimonial-featured.jpg"
                  alt="Jessica Williams"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl mb-6">
                  "I've been shopping at StyleHub for over three years now, and I can confidently say it has become my go-to destination for all my clothing needs. The quality is consistent, the styles are timeless yet modern, and their commitment to sustainability aligns perfectly with my values. What sets StyleHub apart is their attention to detail and exceptional customer service. Every piece I've purchased has become a staple in my wardrobe."
                </blockquote>
                
                <div>
                  <h4 className="font-bold text-lg">Jessica Williams</h4>
                  <p className="text-muted-foreground">Loyal Customer since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 