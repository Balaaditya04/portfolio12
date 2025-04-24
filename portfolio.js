// portfolio.js

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, BarChart3, BookOpenCheck, FlaskConical, Cpu, Code2, Award } from "lucide-react";

const skills = [
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: "Data Analysis",
    description: "Skilled in SQL, Python, Power BI & Tableau to analyze and visualize data effectively."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-green-600" />,
    title: "QA Engineering",
    description: "Experienced in manual and automation testing ensuring software quality and reliability."
  },
  {
    icon: <FlaskConical className="h-6 w-6 text-purple-600" />,
    title: "Testing Tools",
    description: "Proficient in Selenium, JIRA, Postman, TestNG, Cucumber, Jenkins, and REST Assured."
  },
  {
    icon: <Cpu className="h-6 w-6 text-yellow-600" />,
    title: "Frameworks & Concepts",
    description: "Skilled in BDD, Page Object Model, STLC, SDLC, and Agile methodologies."
  },
  {
    icon: <Code2 className="h-6 w-6 text-red-600" />,
    title: "Languages",
    description: "Comfortable with Java, SQL, Python, and JavaScript for backend and test scripting."
  },
  {
    icon: <Award className="h-6 w-6 text-indigo-600" />,
    title: "Certifications",
    description: "ISTQB certified with hands-on project experience and team collaboration skills."
  }
];

export default function Portfolio() {
  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Chamakura Harsha Vardhan Reddy
      </h1>
      <h2 className="text-xl text-center text-gray-600 mb-12">
        Data Analyst & Quality Assurance Professional
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <Card key={index} className="shadow-xl rounded-2xl border-0 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="ml-4 text-lg font-semibold text-gray-800">{skill.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
