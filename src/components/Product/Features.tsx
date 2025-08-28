
const features = [
  {
    id: 1,
    label: 'All our herbs and spices are naturally cultivated, carefully handpicked, and sun dried to preserve their authentic aroma, taste, and potency.'
  },
  {
    id: 2,
    label: 'We ensure every product meets international quality and safety standards, making them suitable for both food and pharmaceutical industries.'
  },
  {
    id: 3,
    label: 'Products are traceably sourced from trusted local farmers, ensuring ethical practices and sustainable supply chains.'
  },
]

export const Features = () => {
  return (
    <section className='py-20 lg:py-28 bg-white -tracking-[0.04em]'>
      <div className='container'>
        <h6 className="text-center mb-5 text-lg">Key Features</h6>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, key) => (
            <div className="text-2xl text-[#A3A3A3] border-l-4 p-5 border-primary bg-primary-light" key={key}>
              {f.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
