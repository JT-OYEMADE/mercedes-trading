import { Badge } from 'components/shared';

const trade = [
  {
    stat: '10,000',
    label: 'Tons of commodities exported globally.'
  },
  {
    stat: '50',
    label: 'Years combined industry experience'
  },
  {
    stat: '65',
    label: 'Countries across the globe.'
  },
]

export const Moving = () => {
  return (
    <section className='py-6 lg:py-28 bg-white -tracking-[0.04em]'>
      <div className='container'>
        <div className='flex flex-col md:flex-row gap- md:gap-x-28'>
          <div className='w-full md:w-[40%]'>
            <Badge text='who are we?' />
            <h2 className='text-dark text-[30px] md:text-[40px] font-medium md:leading-[100%] mt-4'>
              Moving Africa Forward, <br />{' '}
              <span className=' text-gray'>One Trade at a Time</span>{' '}
            </h2>
          </div>
          <div className='w-full md:w-[60%] space-y-5 md:space-y-11'>
            <div>
              <p className='text-sm md:text-2xl text-gray leading-[22px] md:leading-10'>
                Mercedes Trading & Transport Limited is a burgeoning global trading house out
                of Nigeria with local expertise and is on a mission to simplify how Africa
                trades with the rest of the world. We are founded on one simple truth:{' '}
                <span className=' text-black'>
                  “Africa is rich in resources, talent and potential, yet often disconnected
                  from the global systems that unlock value”.
                </span>{' '}
              </p>
              <p className='text-sm md:text-2xl text-gray leading-[22px] md:leading-1'>
                At our core, we believe trade should be seamless, logistics should be reliable,
                and African businesses should have a real seat at the global table. That is why
                we do not just move products, we build partnerships. From the first handshake
                and engaging communities at sourcing to the final delivery at an international
                port, we are there, ensuring quality, trust and excellence at every step.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-[27px]'>
              {trade.map((t, key) => (
                <div key={key} className='bg-gray-light rounded-[15px] p-5'>
                  <h2 className=' text-[30px] text-dark font-medium leading-[35px]'>{t.stat}+</h2>
                  <p className='text-gray'>{t.label}</p>
                </div>
              ))}
            </div>
            <div>
              <Badge text='our vision' />
              <p className='text-sm md:text-2xl text-gray mt-2'>To become the leading global trading and operating platform for simplifying access to commodities in Africa.</p>
            </div>
            <div>
              <Badge text='our mission' />
              <p className='text-sm md:text-2xl text-gray mt-2'>To transform Africa’s natural resources value chains by providing access to global markets through effective supply chain and excellent execution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
