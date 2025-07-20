import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Access & Registration",
    description:
      "Register for an account to access advanced features and save your work.",
    // no direct tool to launch here, usually registration flow handled elsewhere
    hasLaunchButton: false,
  },
  {
    id: 2,
    title: "Explore & Analyze",
    description:
      "Use our interactive tools to explore data and perform your analysis.",
    // This can open the main Tools page or dashboard
    hasLaunchButton: true,
    launchUrl: "/tools", // or whatever route for tools
    launchLabel: "Explore Tools",
  },
  {
    id: 3,
    title: "Share & Collaborate",
    description:
      "Share your findings and collaborate with other researchers.",
    // You can link to a collaboration platform or feedback form
    hasLaunchButton: true,
    launchUrl: "/collaborate", // example URL for sharing/collaboration
    launchLabel: "Go to Collaboration",
  },
];

const ToolUsageGuidelines: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  const currentStep = steps[currentStepIndex];

  const handleNext = () => {
    if (!isLastStep) setCurrentStepIndex(currentStepIndex + 1);
  };

  const handlePrev = () => {
    if (!isFirstStep) setCurrentStepIndex(currentStepIndex - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Tool Usage Guidelines
        </h1>

        <p className="text-center text-gray-700 mb-10 max-w-lg mx-auto">
          Learn how to effectively use our research tools for your projects by
          following these logical steps.
        </p>

        {/* Step indicator */}
        <div className="flex items-center justify-center mb-8 space-x-6">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center cursor-pointer select-none ${
                index === currentStepIndex
                  ? "text-blue-700 font-bold"
                  : "text-gray-400"
              }`}
              onClick={() => setCurrentStepIndex(index)}
              aria-current={index === currentStepIndex ? "step" : undefined}
              aria-label={`Step ${step.id}: ${step.title}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setCurrentStepIndex(index);
              }}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                  index === currentStepIndex
                    ? "border-blue-700 bg-blue-100"
                    : "border-gray-300 bg-white"
                }`}
              >
                {step.id}
              </div>
              <span className="mt-2 text-sm text-center max-w-[8rem]">{step.title}</span>
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {currentStep.title}
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-8 leading-relaxed">
            {currentStep.description}
          </p>

          {/* Launch button if available */}
          {currentStep.hasLaunchButton && (
            <a
              href={currentStep.launchUrl}
              className="inline-block px-6 py-3 bg-blue-700 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentStep.launchLabel}
            </a>
          )}
        </div>

        {/* Navigation buttons */}
        <div className="mt-12 flex justify-between max-w-md mx-auto">
          <button
            onClick={handlePrev}
            disabled={isFirstStep}
            className={`px-5 py-2 rounded-md font-semibold transition-colors ${
              isFirstStep
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            aria-disabled={isFirstStep}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={isLastStep}
            className={`px-5 py-2 rounded-md font-semibold transition-colors ${
              isLastStep
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-700 text-white hover:bg-blue-600"
            }`}
            aria-disabled={isLastStep}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToolUsageGuidelines;
