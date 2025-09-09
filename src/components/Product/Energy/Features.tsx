
const features = [
  {
    id: 1,
    label: 'We provide products in large-scale, bulk volumes suitable for industrial use in energy, construction, and manufacturing.'
  },
  {
    id: 2,
    label: 'All our natural resources are sustainably and ethically sourced, with practices that prioritize both communities and the environment.'
  },
  {
    id: 3,
    label: 'These resources are essential inputs powering infrastructure, energy production, and industrial processes across global markets.'
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
