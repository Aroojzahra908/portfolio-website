interface TechBadgeProps {
  technology: string;
}

export function TechBadge({ technology }: TechBadgeProps) {
  // Set badge color based on tech category
  const getBadgeColor = (tech: string) => {
    tech = tech.toLowerCase();
    
    if (tech.includes('python') || tech.includes('flask') || tech.includes('fastapi')) {
      return 'bg-blue-600 text-white';
    }
    
    if (tech.includes('tensor') || tech.includes('pytorch') || tech.includes('keras')) {
      return 'bg-orange-500 text-white';
    }
    
    if (tech.includes('react') || tech.includes('js') || tech.includes('html') || tech.includes('css')) {
      return 'bg-blue-500 text-white';
    }
    
    if (tech.includes('gan') || tech.includes('llm') || tech.includes('llama')) {
      return 'bg-purple-500 text-white';
    }
    
    if (tech.includes('docker') || tech.includes('kubernetes')) {
      return 'bg-gray-700 text-white';
    }
    
    if (tech.includes('data') || tech.includes('sql') || tech.includes('pandas') || tech.includes('numpy')) {
      return 'bg-teal-600 text-white';
    }
    
    // Default badge color
    return 'bg-primary/10 text-primary';
  };

  return (
    <span className={`${getBadgeColor(technology)} text-xs px-2 py-1 rounded-full`}>
      {technology}
    </span>
  );
}
