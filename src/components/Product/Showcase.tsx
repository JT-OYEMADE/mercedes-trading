const products = [
  {
    name: "Hibiscus Flower",
    description:
      "Premium dried hibiscus flowers known for their vibrant color and tart, cranberry-like flavor. Rich in antioxidants and vitamin C, perfect for teas and juices.",
  },
  {
    name: "Dried Split Ginger",
    description:
      "Carefully processed and dried ginger root, split to preserve maximum potency and flavor. Known for its warming properties and digestive benefits.",
  },
  {
    name: "Turmeric",
    description:
      "Golden turmeric root powder with its distinctive earthy flavor and vibrant color. A cornerstone of traditional medicine and modern wellness practices.",
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
            All our herbs and spices are ethically sourced, carefully processed, and meet international quality
            standards for export.
          </p>
        </div> */}
      </div>
    </section>
  )
}
