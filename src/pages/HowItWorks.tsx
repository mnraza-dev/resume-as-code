import React from 'react';
import { FileJson, Eye, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the steps with icons, titles, and descriptions
const steps = [
    {
        icon: FileJson,
        title: "Edit JSON",
        description: "Write your resume as structured JSON. Version-controlled, developer-friendly.",
    },
    {
        icon: Eye,
        title: "Live Preview",
        description: "Get instant feedback with a sleek, modern UI preview as you type.",
    },
    {
        icon: Download,
        title: "Export PDF",
        description: "Download your résumé in one click — no backend, no nonsense.",
    },
];

const HowItWorks = () => {
    return (
        <div className="max-w-6xl mx-auto mt-16 px-4 p-16">
            <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
            <div className="relative">
                {/* Line connecting steps on larger screens */}
                <div className="hidden md:block absolute left-1/2 top-1/3 w-1/2 h-[2px] bg-muted/60 transform -translate-x-1/2 z-0"></div>

                {/* Grid for the steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="z-10"
                        >
                            <Card className="rounded-2xl border border-border bg-gradient-to-br from-muted/50 to-background hover:shadow-lg transition-all duration-200">
                                <CardHeader className="flex items-center justify-center">
                                    <step.icon className="w-10 h-10 text-primary" />
                                    <CardTitle className="text-xl text-center mt-4">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground text-center px-6 pb-6">
                                    {step.description}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;
