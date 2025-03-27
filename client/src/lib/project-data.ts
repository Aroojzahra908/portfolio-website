export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  challenges: string;
  solution: string;
  outcome: string;
  tag: string;
  tagColor: string;
  links: {
    demo?: string;
    github?: string;
    paper?: string;
    model?: string;
    blog?: string;
    [key: string]: string | undefined;
  };
}

export const projectData: Project[] = [
  {
    id: "kisan360",
    title: "Kisan360 Chatbot",
    shortDescription: "AI-powered chatbot using Meta LLaMA 3.2 3B, fine-tuned on a custom wheat dataset for farmers.",
    description: "An AI-powered chatbot designed to assist farmers with agricultural information and advice. This chatbot is a critical component of the Kisan360 mobile application, providing instant answers to farming-related questions.",
    image: "https://images.unsplash.com/photo-1578496480157-697fc14d2e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["Python", "Meta LLaMA 3.2 3B", "Hugging Face Transformers", "Docker", "Open WebUI"],
    challenges: "Fine-tuning the LLaMA model on a custom wheat dataset while optimizing for mobile use presented significant challenges. Ensuring accurate responses in a low-resource environment required careful model optimization.",
    solution: "We deployed the fine-tuned model on a server machine using Docker containers, enabling the mobile app to communicate with the AI through a lightweight API layer. The implementation uses Open WebUI for seamless interaction.",
    outcome: "The chatbot successfully delivers accurate farming advice in real-time, significantly improving agricultural decision-making for farmers with limited access to expert knowledge.",
    tag: "Final Year Project",
    tagColor: "bg-accent/10 text-accent",
    links: {
      demo: "https://play.google.com/store/apps/details?id=com.kisan360",
      github: "#",
      model: "https://huggingface.co/"
    }
  },
  {
    id: "tts-chatbot",
    title: "Multilingual TTS Chatbot",
    shortDescription: "Multilingual text-to-speech chatbot with file upload capabilities and text extraction using Tesseract.js.",
    description: "A versatile chatbot application supporting multilingual text-to-speech capabilities with document analysis features. Users can upload various file formats including PDFs, images, and text documents for information extraction and analysis.",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["Python", "JavaScript", "Flask", "Tesseract.js", "Text-to-Speech APIs"],
    challenges: "Implementing reliable OCR for diverse document types and creating a seamless text-to-speech experience in multiple languages presented significant technical hurdles.",
    solution: "The application uses Tesseract.js for document text extraction combined with custom Flask backend APIs that handle text-to-speech conversion in both Urdu and English languages.",
    outcome: "The resulting application provides an accessible interface for document analysis with audio feedback, making information more accessible to users with different language preferences or accessibility needs.",
    tag: "Personal Project",
    tagColor: "bg-secondary/10 text-secondary",
    links: {
      demo: "#",
      github: "https://github.com/Aroojzahra908",
      blog: "#"
    }
  },
  {
    id: "gan-cloud",
    title: "Satellite Image GAN",
    shortDescription: "Using Generative Adversarial Networks to remove clouds from satellite images for agricultural analysis.",
    description: "A deep learning project utilizing Generative Adversarial Networks (GANs) to remove cloud cover from satellite imagery, enabling clearer views of the Earth's surface for agricultural and environmental monitoring applications.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["Python", "TensorFlow", "GANs", "CUDA", "cuDNN", "Satellite Image Processing"],
    challenges: "Working with paired datasets of cloud-covered and cloud-free images required careful preprocessing and alignment. Training stable GANs that could effectively remove clouds without distorting underlying terrain features was technically demanding.",
    solution: "The project implements a custom GAN architecture trained on paired image datasets. The generator learns to transform cloudy images into their cloud-free equivalents, while the discriminator evaluates the realism of the generated images.",
    outcome: "The model successfully removes cloud cover from satellite images, revealing underlying terrain features with good accuracy. This enables more consistent agricultural monitoring and environmental analysis regardless of cloud conditions.",
    tag: "Research Project",
    tagColor: "bg-primary/10 text-primary",
    links: {
      demo: "#",
      github: "#",
      paper: "#"
    }
  },
  {
    id: "sentiment-analysis",
    title: "Social Media Sentiment Analysis",
    shortDescription: "Real-time sentiment analysis of social media posts using NLP and transformer models.",
    description: "A sentiment analysis tool that processes social media posts in real-time to determine public opinion on specific topics. The system categorizes sentiment as positive, negative, or neutral and visualizes trends over time.",
    image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["Python", "BERT", "PyTorch", "Twitter API", "Dash", "Pandas", "NLP"],
    challenges: "Handling the volume and velocity of social media data while maintaining accurate sentiment classification presented significant technical challenges. Adapting to the informal language, slang, and context-specific meanings required sophisticated NLP approaches.",
    solution: "The project uses a fine-tuned BERT model for sentiment classification combined with a custom data pipeline for preprocessing and filtering. A Dash-based dashboard provides real-time visualization of sentiment trends.",
    outcome: "The system successfully analyzes thousands of social media posts per minute with over 85% accuracy in sentiment classification, providing valuable insights for brand monitoring and public opinion analysis.",
    tag: "ML Project",
    tagColor: "bg-blue-500/10 text-blue-500",
    links: {
      demo: "#",
      github: "https://github.com/Aroojzahra908",
      blog: "#"
    }
  },
  {
    id: "plant-disease",
    title: "Plant Disease Detection",
    shortDescription: "Mobile app for detecting plant diseases from leaf images using transfer learning and CNNs.",
    description: "A mobile application that allows farmers to diagnose plant diseases by simply taking a photo of affected leaves. The app uses computer vision to identify various crop diseases and provides treatment recommendations.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
    technologies: ["Python", "TensorFlow", "Transfer Learning", "MobileNetV2", "Flutter", "FastAPI"],
    challenges: "Creating a model that works accurately across different lighting conditions, backgrounds, and image qualities while keeping it lightweight enough for mobile deployment was the primary challenge.",
    solution: "The project uses transfer learning with MobileNetV2 as the base model, fine-tuned on a dataset of 87,000 images covering 38 different plant diseases. The model is deployed through FastAPI and integrated with a Flutter mobile app.",
    outcome: "The application achieves 93% accuracy in disease detection under various field conditions, helping farmers identify problems early and reduce crop losses through timely interventions.",
    tag: "Computer Vision",
    tagColor: "bg-green-500/10 text-green-500",
    links: {
      demo: "#",
      github: "https://github.com/Aroojzahra908",
      model: "https://huggingface.co/"
    }
  }
];
