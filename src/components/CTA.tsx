
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-20 animate-section">
      <div className="ndur-container">
        <div className="glass-morphism rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-6">
              Ready to Elevate Your Performance?
            </h2>
            <p className="body-large mb-8 text-white/80">
              Join the growing community of athletes using NDÜR to train smarter, recover faster, and
              perform better than ever before.
            </p>
            <Link to="/lab" className="primary-button inline-flex items-center group">
              <span>Explore Lab Services</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
