import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const testimonials = [
  {
    quote:
      "This tool made it so easy to create a beautiful resume! The live preview and JSON editing is a game changer.",
    name: "John Doe",
    role: "Software Developer",
  },
  {
    quote:
      "I love the fact that I can control the structure of my resume with JSON. It's so much faster and more flexible!",
    name: "Jane Smith",
    role: "Product Manager",
  },
  {
    quote:
      "The PDF export is clean, the templates are stunning, and the developer-first workflow is unmatched.",
    name: "Rajiv Nair",
    role: "Frontend Engineer",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">What Users Are Saying</h2>
        <div className="overflow-hidden">
          {/* Scroll-Up Container */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
                }}
                className="relative"
              >
                <motion.div
                  whileHover={{
                    rotate: -2,
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  className="p-1 rounded-xl bg-gradient-to-br from-muted/30 to-background hover:cursor-pointer"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary/30 via-transparent to-accent/10 blur-2xl opacity-20 z-0"></div>
                  <Card className="bg-background text-left relative z-10 rounded-2xl p-6">
                    <CardHeader className="space-y-4">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <p className="italic text-sm text-muted-foreground">
                        “{t.quote}”
                      </p>
                    </CardHeader>
                    <CardContent className="mt-4">
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
