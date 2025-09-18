
const features = [
  {
    id: 1,
    label: 'We provide premium-grade nuts and oil seeds with high oil content and superior quality, tailored for global demand.'
  },
  {
    id: 2,
    label: 'All products are sourced from fertile farmlands across Africa, giving buyers authentic, naturally grown agricultural outputs.'
  },
  {
    id: 3,
    label: 'We also process quality nuts and oil seeds to their various extracts for various industrial applications including food processing, confectionery, cosmetics and pharmaceuticals.'
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
