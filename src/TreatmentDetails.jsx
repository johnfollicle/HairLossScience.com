import { useParams, Link } from "react-router-dom";
import { treatments } from "./treatmentData";
import {
  FaArrowLeft,
  FaExclamationTriangle,
  FaChartLine,
  FaExclamationCircle,
  FaCheckCircle,
} from "react-icons/fa";

const sideEffectLevels = ["Low", "Low-Medium", "Medium", "Medium-High", "High"];
const evidenceLevels = ["Very Low", "Low", "Moderate", "High", "Very High"];

const TreatmentIcon = ({ treatment }) => {
    const IconComponent = treatment.icon;
    return <IconComponent className="text-6xl text-white-200" />;
};

const sideEffectColors = {
  Low: {
    bg: "from-green-50 to-green-100",
    text: "text-green-700",
    icon: "bg-green-500",
  },
  "Low-Medium": {
    bg: "from-lime-50 to-lime-100",
    text: "text-lime-700",
    icon: "bg-lime-500",
  },
  Medium: {
    bg: "from-yellow-50 to-yellow-100",
    text: "text-yellow-700",
    icon: "bg-yellow-500",
  },
  "Medium-High": {
    bg: "from-orange-50 to-orange-100",
    text: "text-orange-700",
    icon: "bg-orange-500",
  },
  High: {
    bg: "from-red-50 to-red-100",
    text: "text-red-700",
    icon: "bg-red-500",
  },
};

const evidenceColors = {
  "Very Low": {
    bg: "from-red-50 to-red-100",
    text: "text-red-700",
    icon: "bg-red-500",
  },
  Low: {
    bg: "from-orange-50 to-orange-100",
    text: "text-orange-700",
    icon: "bg-orange-500",
  },
  Moderate: {
    bg: "from-yellow-50 to-yellow-100",
    text: "text-yellow-700",
    icon: "bg-yellow-500",
  },
  High: {
    bg: "from-lime-50 to-lime-100",
    text: "text-lime-700",
    icon: "bg-lime-500",
  },
  "Very High": {
    bg: "from-green-50 to-green-100",
    text: "text-green-700",
    icon: "bg-green-500",
  },
};

const TreatmentDetails = () => {
  const { id } = useParams();
  const treatment = treatments.find((t) => t.id === id);

  if (!treatment) {
    return <div>Treatment not found</div>;
  }

  const sideEffectLevel = sideEffectLevels[treatment.sideEffectScore - 1];
  const evidenceLevel = evidenceLevels[treatment.evidenceStrength - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Back to Comparison
        </Link>
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-extrabold">{treatment.name}</h1>
              <p className="mt-2 text-indigo-100">{treatment.description}</p>
            </div>
            <TreatmentIcon treatment={treatment} />
          </div>
          
          <div className="p-8">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                How It Works
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {treatment.howItWorks}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-md">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full mb-4">
                  <FaChartLine className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">
                  Density Increase
                </h3>
                <p className="text-3xl font-bold text-blue-600">
                  {treatment.densityIncrease}%
                </p>
              </div>
              <div
                className={`bg-gradient-to-br ${sideEffectColors[sideEffectLevel].bg} p-6 rounded-2xl shadow-md`}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 ${sideEffectColors[sideEffectLevel].icon} text-white rounded-full mb-4`}
                >
                  <FaExclamationCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">
                  Side Effect Level
                </h3>
                <p
                  className={`text-3xl font-bold ${sideEffectColors[sideEffectLevel].text}`}
                >
                  {sideEffectLevel}
                </p>
              </div>
              <div
                className={`bg-gradient-to-br ${evidenceColors[evidenceLevel].bg} p-6 rounded-2xl shadow-md`}
              >
                <div
                  className={`flex items-center justify-center w-12 h-12 ${evidenceColors[evidenceLevel].icon} text-white rounded-full mb-4`}
                >
                  <FaCheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-800">
                  Evidence Strength
                </h3>
                <p
                  className={`text-3xl font-bold ${evidenceColors[evidenceLevel].text}`}
                >
                  {evidenceLevel}
                </p>
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Side Effects
              </h2>
              <ul
                className={`bg-gradient-to-br ${sideEffectColors[sideEffectLevel].bg} rounded-xl p-6 space-y-2`}
              >
                {treatment.sideEffects.map((effect, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span
                      className={`w-2 h-2 ${sideEffectColors[sideEffectLevel].icon} rounded-full mr-3`}
                    ></span>
                    {effect}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Clinical Studies & Trials
              </h2>
              <div className="space-y-6">
                {treatment.clinicalStudies.map((study, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {study.authors}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      {study.journal}, {study.year}
                    </p>
                    <a
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                      Read Study
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="px-8 py-6 bg-yellow-100 text-yellow-800">
            <div className="flex items-center">
              <FaExclamationTriangle className="flex-shrink-0 w-6 h-6 mr-4" />
              <p className="font-semibold">
                Disclaimer: Always consult with a healthcare professional before
                starting any treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetails;