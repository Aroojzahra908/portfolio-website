import { motion } from "framer-motion";

interface SkillProgressProps {
  name: string;
  percentage: number;
  delay?: number;
}

export function SkillProgress({ name, percentage, delay = 0 }: SkillProgressProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div 
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
        />
      </div>
    </div>
  );
}
