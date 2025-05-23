'use client'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ShoppingCart, Heart, Star, Truck, RefreshCw, ChevronDown, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
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
                  <Link href="/shop/women/bottoms" className="text-muted-foreground hover:text-primary">
                    Women's Bottoms
                  </Link>
                </li>
                <li className="text-muted-foreground">/</li>
                <li className="font-medium">High-Waisted Jeans</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src="/product-bottom-1.jpg"
                    alt="High-Waisted Jeans"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="aspect-square overflow-hidden rounded-md border-2 border-primary">
                    <img
                      src="/product-bottom-1.jpg"
                      alt="High-Waisted Jeans - Front"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-md border border-muted">
                    <img
                      src="/product-bottom-1.jpg"
                      alt="High-Waisted Jeans - Side"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-md border border-muted">
                    <img
                      src="/product-bottom-1.jpg"
                      alt="High-Waisted Jeans - Back"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-md border border-muted">
                    <img
                      src="/product-bottom-1.jpg"
                      alt="High-Waisted Jeans - Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-3xl font-bold mb-2">High-Waisted Jeans</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">5.0 (32 reviews)</span>
                </div>
                <div className="text-2xl font-bold mb-6">$59.99</div>

                <div className="space-y-6">
                  {/* Color Selection */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Color: Blue</span>
                      <span className="text-sm text-muted-foreground">3 options</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 rounded-full bg-blue-800 border-2 border-primary flex items-center justify-center">
                        <span className="sr-only">Blue</span>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-black border border-muted">
                        <span className="sr-only">Black</span>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-gray-400 border border-muted">
                        <span className="sr-only">Grey</span>
                      </button>
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Size: 28</span>
                      <button className="text-sm text-primary">Size Guide</button>
                    </div>
                    <div className="grid grid-cols-6 gap-2">
                      <button className="py-2 border rounded-md text-sm text-muted-foreground hover:border-primary">
                        25
                      </button>
                      <button className="py-2 border rounded-md text-sm text-muted-foreground hover:border-primary">
                        26
                      </button>
                      <button className="py-2 border-2 border-primary rounded-md text-sm font-medium">
                        28
                      </button>
                      <button className="py-2 border rounded-md text-sm text-muted-foreground hover:border-primary">
                        30
                      </button>
                      <button className="py-2 border rounded-md text-sm text-muted-foreground hover:border-primary">
                        32
                      </button>
                      <button className="py-2 border rounded-md text-sm text-muted-foreground hover:border-primary">
                        34
                      </button>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <span className="text-sm font-medium mb-2 block">Quantity</span>
                    <div className="flex items-center border rounded-md w-32">
                      <button className="flex-1 flex items-center justify-center py-2">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="flex-1 text-center">1</span>
                      <button className="flex-1 flex items-center justify-center py-2">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1 gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Heart className="h-4 w-4 mr-2" />
                      Add to Wishlist
                    </Button>
                  </div>

                  {/* Product Details */}
                  <div className="space-y-4 pt-6">
                    <Separator />
                    <div className="flex justify-between py-2">
                      <span className="font-medium">Product Details</span>
                      <ChevronDown className="h-5 w-5" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        Our high-waisted jeans are designed to flatter your figure with a contoured waistband 
                        that sits at your natural waist. Made with premium stretch denim, these jeans offer 
                        both comfort and style for all-day wear. The classic five-pocket design and slim leg 
                        create a timeless silhouette that pairs perfectly with any top.
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>98% cotton, 2% elastane</li>
                        <li>High-waisted design</li>
                        <li>Slim fit through hip and thigh</li>
                        <li>Five-pocket styling</li>
                        <li>Button and zip fly closure</li>
                        <li>Machine washable</li>
                      </ul>
                    </div>
                    <Separator />
                    <div className="flex justify-between py-2">
                      <span className="font-medium">Shipping & Returns</span>
                      <ChevronDown className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4 text-muted-foreground" />
                        <span>Free shipping over $50</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <RefreshCw className="h-4 w-4 text-muted-foreground" />
                        <span>Free 30-day returns</span>
                      </div>
                    </div>
                    <Separator />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-background rounded-lg overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={`/product-bottom-${item}.jpg`}
                      alt={`Related Product ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Related Product</h3>
                    <p className="text-sm text-muted-foreground">Bottoms</p>
                    <div className="mt-2 font-semibold">$49.99</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 