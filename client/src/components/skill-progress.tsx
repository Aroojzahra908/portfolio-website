import { motion } from "framer-motion";

interface SkillProgressProps {
  name: string;
  percentage: number;
  delay?: number;
}

export function SkillProgress({ name, percentage, delay = 0 }: SkillProgressProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-white">{name}</span>
        <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div 
          className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
        />
      </div>
    </div>
  );
}
