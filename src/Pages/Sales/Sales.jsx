import { motion } from "framer-motion";
import { ShoppingCart, Award, Zap, CheckCircle } from "lucide-react";

const membershipPlans = [
  {
    id: 1,
    name: "Starter Pack",
    price: "$29",
    duration: "/month",
    popular: false,
    features: [
      "Basic gym access",
      "3 group classes/month",
      "Locker rental",
      "Fitness assessment"
    ],
    cta: "Get Started"
  },
  {
    id: 2,
    name: "Pro Athlete",
    price: "$59",
    duration: "/month",
    popular: true,
    features: [
      "Unlimited gym access",
      "Unlimited classes",
      "Personal trainer discount",
      "Sauna & spa access",
      "Nutrition consultation",
      "Priority booking"
    ],
    cta: "Join Now"
  },
  {
    id: 3,
    name: "Elite Package",
    price: "$99",
    duration: "/month",
    popular: false,
    features: [
      "All Pro benefits",
      "Dedicated locker",
      "2 personal training sessions",
      "Sports massage",
      "Advanced body analysis",
      "VIP event access"
    ],
    cta: "Become Elite"
  }
];

export default function Sales() {
  return (
    <section className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-4"
          >
            Elevate Your Performance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-base-content/70 max-w-3xl mx-auto"
          >
            Choose the perfect membership to match your athletic goals and training needs
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 group 
                ${plan.popular ? "border-secondary scale-105" : "border-base-300/50 hover:border-primary/30"}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-secondary-content px-4 py-1 text-sm font-bold transform translate-x-2 -translate-y-2 rotate-6">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "bg-base-200" : "bg-base-100"}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${plan.popular ? "bg-secondary text-secondary-content" : "bg-primary/10 text-primary"}`}>
                    {plan.popular ? <Award size={24} /> : <ShoppingCart size={24} />}
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                  <span className="text-base-content/70">{plan.duration}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={18} className="mt-1 flex-shrink-0 text-secondary" />
                      <span className="text-base-content/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full btn ${plan.popular ? "btn-secondary cursor-not-allowed" : "btn-primary cursor-not-allowed"} group-hover:shadow-lg transition-all`}
                >
                  {plan.cta}
                  <Zap size={18} className="ml-2 group-hover:animate-pulse" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center bg-base-200 rounded-xl p-6 border border-base-300 max-w-2xl">
            <h3 className="text-2xl font-bold text-primary mb-3">Need something custom?</h3>
            <p className="text-base-content/80 mb-4">
              Our team can create a personalized training package tailored to your specific athletic needs and schedule.
            </p>
            <button className="btn btn-outline btn-primary cursor-not-allowed">
              Contact Our Coaches
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}