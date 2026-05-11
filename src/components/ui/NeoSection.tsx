import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface NeoSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}

const NeoSection: React.FC<NeoSectionProps> = ({ eyebrow, title, description, actions, className, children, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
    >
      <section className={cn('neo-section section-shell', className)} {...props}>
      {eyebrow || title || description || actions ? (
        <div className="neo-section__header">
          {eyebrow ? <div className="neo-section__eyebrow">{eyebrow}</div> : null}
          {title ? <h2 className="neo-section__title">{title}</h2> : null}
          {description ? <p className="neo-section__description">{description}</p> : null}
          {actions ? <div className="neo-section__actions">{actions}</div> : null}
        </div>
      ) : null}
      {children}
      </section>
    </motion.div>
  );
};

export default NeoSection;
