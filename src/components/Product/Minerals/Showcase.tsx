const products = [
  {
    name: "Tantalite and Tantalum Concentrate",
    description:
      "High-grade tantalite ore and refined tantalum concentrate. Essential for electronics manufacturing, aerospace applications, and advanced technology components.",
  },
  {
    name: "Lithium",
    description:
      "Premium lithium minerals crucial for battery technology and renewable energy storage solutions. Sourced from reliable African deposits with sustainable practices.",
  },
  {
    name: "Ilmenite",
    description:
      "High-quality ilmenite ore, the primary source of titanium dioxide. Used in pigments, coatings, and advanced materials manufacturing.",
  },
  {
    name: "Rutile",
    description:
      "Superior grade rutile, a valuable titanium mineral. Essential for welding electrodes, titanium metal production, and high-performance industrial applications.",
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
            All our solid minerals are ethically sourced through responsible mining practices and meet international
            quality standards for export.
          </p>
        </div> */}
      </div>
    </section>
  )
}
