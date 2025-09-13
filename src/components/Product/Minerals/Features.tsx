
const features = [
  {
    id: 1,
    label: 'Our minerals are supplied in their standardized, export-ready state, making them adaptable to various global processing needs.'
  },
  {
    id: 2,
    label: 'They include critical resources like lithium and tantalum, essential for renewable energy storage, electronics, and aerospace industries.'
  },
  {
    id: 3,
    label: 'Every consignment is responsibly sourced with strict adherence to local and international compliance requirements.'
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
