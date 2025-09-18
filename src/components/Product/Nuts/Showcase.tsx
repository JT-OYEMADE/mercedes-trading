const products = [
  {
    name: "Cashew Nuts",
    description:
      "Premium raw and processed cashew nuts with extracts including cashew butter and cashew milk. Known for their creamy texture and rich nutritional profile.",
  },
  {
    name: "Shea Nuts",
    description:
      "High-quality shea nuts and their valuable extracts including shea butter and shea oil. Essential for cosmetic and pharmaceutical applications worldwide.",
  },
  {
    name: "Cocoa",
    description:
      "Premium cocoa beans and extracts including cocoa butter, cocoa powder, and cocoa liquor. Sourced from the finest African cocoa-growing regions.",
  },
  {
    name: "Sesame Seeds",
    description:
      "Superior quality sesame seeds with extracts including sesame oil and sesame cake. Rich in healthy fats and essential nutrients.",
  },
  {
    name: "Tiger Nuts",
    description:
      "Nutritious tiger nuts and their extracts including tiger nuts beverage and tiger nuts meal. A superfood with excellent health benefits.",
  },
  {
    name: "Soybean",
    description:
      "High-grade soybeans and extracts including soybean oil, soybean cake, and soybean meal. Essential for food processing and animal feed industries.",
  },
]

export const Showcase = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Premium Selection</h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {products.map((product, index) => (
            <div key={index} className="border-l-4 border-primary pl-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">{product.name}</h4>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All our nuts and oil seeds are ethically sourced, carefully processed, and meet international quality
            standards for export.
          </p>
        </div> */}
      </div>
    </section>
  )
}
