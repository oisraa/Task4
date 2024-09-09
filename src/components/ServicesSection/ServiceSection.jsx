import React from 'react';
import { FaStethoscope, FaUserMd, FaWheelchair, FaPills, FaHeartbeat, FaSyringe } from 'react-icons/fa';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesSection = () => (
  <div className="container my-5">
  {/* Services Section Header */}
  <div className="text-center mb-4">
    <h2 className="fw-bold">Services</h2>
    <hr
      style={{
        width: "60px",
        height: "4px",
        backgroundColor: "teal",
        margin: "0.5rem auto",
      }}
    />
    <p className="text-muted">
      Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
    </p>
  </div>

  {/* Services Cards */}
  <div className="row">
    <ServiceCard
      icon={<FaStethoscope size={40} color="teal" />}
      title="Nesciunt Mete"
      description="Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur."
    />
    <ServiceCard
      icon={<FaUserMd size={40} color="teal" />}
      title="Eosle Commodi"
      description="Ut autem aut autem non a. Sint sint facilis nam iusto sint. Libero corrupti neque cum. Id non ut nesciunt dolorem."
    />
    <ServiceCard
      icon={<FaHeartbeat size={40} color="teal" />}
      title="Ledo Markt"
      description="Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea vel. Quia id voluptas adipisci eos earum corrupti."
    />
    <ServiceCard
      icon={<FaPills size={40} color="teal" />}
      title="Asperiores Commodit"
      description="Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque."
    />
    <ServiceCard
      icon={<FaWheelchair size={40} color="teal" />}
      title="Velit Doloremque"
      description="Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore."
    />
    <ServiceCard
      icon={<FaSyringe size={40} color="teal" />}
      title="Dolori Architecto"
      description="Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim."
    />
  </div>
</div>
);

export default ServicesSection;