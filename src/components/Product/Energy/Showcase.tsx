const products = [
  {
    name: "Bio Char",
    description:
      "High-quality biochar produced from sustainable biomass sources. Excellent for soil enhancement, carbon sequestration, and renewable energy applications.",
  },
  {
    name: "Ethically Sourced Charcoal",
    description:
      "Premium charcoal produced through sustainable forestry practices. Clean-burning and efficient for industrial and domestic energy needs.",
  },
  {
    name: "Biomass Shells",
    description:
      "Diverse biomass shells including palm kernel shells, shea nut shells, and cashew shells. Excellent renewable fuel sources for industrial energy generation.",
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
            All our energy and natural resources are sustainably sourced with environmental responsibility and meet
            international quality standards for export.
          </p>
        </div> */}
      </div>
    </section>
  )
}
