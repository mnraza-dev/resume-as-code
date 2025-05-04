import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  RefreshCw,
  FileDown,
  GitBranch,
  Moon,
  Code2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Layers,
    title: "Customizable Templates",
    description: "Personalize your resume with pre-built templates or create your own from scratch.",
  },
  {
    icon: RefreshCw,
    title: "Instant Feedback",
    description: "View real-time updates of your resume as you edit the JSON. No more guesswork.",
  },
  {
    icon: FileDown,
    title: "Fast PDF Export",
    description: "Download your resume as a high-quality PDF instantly. No server-side processing required.",
  },
  {
    icon: GitBranch,
    title: "Version Controlled",
    description: "Keep your resume history safe with Git-friendly, code-based editing.",
  },
  {
    icon: Moon,
    title: "Dark Mode Ready",
    description: "Enjoy a polished dark/light experience that respects your system preferences.",
  },
  {
    icon: Code2,
    title: "Open Source Freedom",
    description: "Fully open-source. Fork it, customize it, make it your own with zero lock-in.",
  },
];

const FeatureHighlights = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl border border-border bg-gradient-to-br from-muted/50 to-background hover:shadow-xl transition-shadow duration-200 h-full">
              <CardHeader className="flex flex-col items-center justify-center text-center space-y-4">
                <motion.div
                  className="bg-primary/10 p-3 rounded-full"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground text-center px-6 pb-6">
                {feature.description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureHighlights;
