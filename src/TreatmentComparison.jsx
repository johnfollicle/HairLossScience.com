import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaSort,
  FaSortUp,
  FaSortDown,
  FaInfoCircle,
  FaFilter,
  FaChevronDown,
  FaChevronUp,
  FaGithub,
} from "react-icons/fa";
import { treatments } from "./treatmentData";

const sideEffectLevels = ["Low", "Low-Medium", "Medium", "Medium-High", "High"];
const evidenceLevels = ["Very Low", "Low", "Moderate", "High", "Very High"];

const TreatmentIcon = ({ treatment }) => {
  const IconComponent = treatment.icon;
  return <IconComponent className={treatment.iconColor} />;
};

const sideEffectColors = {
  Low: { bg: "bg-green-500", text: "text-green-700" },
  "Low-Medium": { bg: "bg-lime-500", text: "text-lime-700" },
  Medium: { bg: "bg-yellow-500", text: "text-yellow-700" },
  "Medium-High": { bg: "bg-orange-500", text: "text-orange-700" },
  High: { bg: "bg-red-500", text: "text-red-700" },
};

const evidenceColors = {
  "Very Low": { bg: "bg-red-500", text: "text-red-700" },
  Low: { bg: "bg-orange-500", text: "text-orange-700" },
  Moderate: { bg: "bg-yellow-500", text: "text-yellow-700" },
  High: { bg: "bg-lime-500", text: "text-lime-700" },
  "Very High": { bg: "bg-green-500", text: "text-green-700" },
};

const TreatmentComparison = () => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [filterType, setFilterType] = useState("all");
  const [expandedRows, setExpandedRows] = useState(() => {
    const initialState = {};
    treatments.forEach(treatment => {
      initialState[treatment.id] = true;
    });
    return initialState;
  });

  const sortedTreatments = useMemo(() => {
    let sortableTreatments = [...treatments];
    if (sortConfig.key !== null) {
      sortableTreatments.sort((a, b) => {
        if (sortConfig.key === "treatment") {
          return a.name.localeCompare(b.name);
        }
        if (sortConfig.key === "type") {
          return a.name.includes("Topical") === b.name.includes("Topical") ? 0 : a.name.includes("Topical") ? -1 : 1;
        }
        if (sortConfig.key === "densityincrease") {
          return a.densityIncrease - b.densityIncrease;
        }
        if (sortConfig.key === "sideeffectlevel") {
          return a.sideEffectScore - b.sideEffectScore;
        }
        if (sortConfig.key === "evidencestrength") {
          return a.evidenceStrength - b.evidenceStrength;
        }
        return 0;
      });
      if (sortConfig.direction === "descending") {
        sortableTreatments.reverse();
      }
    }
    return sortableTreatments;
  }, [sortConfig]);

  const filteredTreatments = useMemo(() => {
    if (filterType === "all") return sortedTreatments;
    return sortedTreatments.filter((treatment) =>
      treatment.name.toLowerCase().includes(filterType.toLowerCase())
    );
  }, [sortedTreatments, filterType]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (columnName) => {
    if (sortConfig.key === columnName) {
      return sortConfig.direction === "ascending" ? (
        <FaSortUp className="inline ml-1" />
      ) : (
        <FaSortDown className="inline ml-1" />
      );
    }
    return <FaSort className="inline ml-1" />;
  };

  const toggleRowExpansion = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-600">
            HairLossScience<span className="text-purple-600">.com</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl text-gray-600">
            Your trusted source for hair loss treatment comparisons based on scientific evidence.
          </p>
        </div>

        <div className="mb-6 sm:mb-8 flex justify-end">
          <div className="relative">
            <select
              id="filter"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">All Treatments</option>
              <option value="topical">Topical</option>
              <option value="oral">Oral</option>
            </select>
            <FaFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hidden sm:table-header-group">
                <tr>
                  {["Treatment", "Type", "Density Increase", "Side Effect Level", "Evidence Strength"].map((header, index) => (
                    <th
                      key={index}
                      className="px-4 sm:px-6 py-3 text-left text-xs font-medium uppercase tracking-wider cursor-pointer whitespace-nowrap"
                      onClick={() => requestSort(header.toLowerCase().replace(" ", ""))}
                    >
                      {header} {getSortIcon(header.toLowerCase().replace(" ", ""))}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTreatments.map((treatment) => (
                  <React.Fragment key={treatment.id}>
                    <tr
                      className="hover:bg-gray-50 transition-colors duration-200 sm:table-row"
                    >
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap sm:table-cell">
                        <div className="flex items-center justify-between">
                          <Link
                            to={`/treatment/${treatment.id}`}
                            className="flex items-center text-indigo-600 hover:text-indigo-900 transition-colors duration-200"
                          >
                            <FaInfoCircle className="mr-2 flex-shrink-0" />
                            <span className="font-medium">{treatment.name}</span>
                          </Link>
                          <button
                            onClick={() => toggleRowExpansion(treatment.id)}
                            className="sm:hidden"
                          >
                            {expandedRows[treatment.id] ? (
                              <FaChevronUp className="text-gray-500" />
                            ) : (
                              <FaChevronDown className="text-gray-500" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="flex items-center">
                          <TreatmentIcon treatment={treatment} />
                          <span className="ml-2 text-gray-600">
                            {treatment.name.includes("Topical") ? "Topical" : "Oral"}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${treatment.densityIncrease * 5}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-gray-600">{treatment.densityIncrease}%</span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className={`${sideEffectColors[sideEffectLevels[treatment.sideEffectScore - 1]].bg} h-2.5 rounded-full`}
                              style={{ width: `${treatment.sideEffectScore * 20}%` }}
                            ></div>
                          </div>
                          <span className={`${sideEffectColors[sideEffectLevels[treatment.sideEffectScore - 1]].text} text-sm`}>
                            {sideEffectLevels[treatment.sideEffectScore - 1]}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="flex items-center">
                          <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className={`${evidenceColors[evidenceLevels[treatment.evidenceStrength - 1]].bg} h-2.5 rounded-full`}
                              style={{ width: `${treatment.evidenceStrength * 20}%` }}
                            ></div>
                          </div>
                          <span className={`${evidenceColors[evidenceLevels[treatment.evidenceStrength - 1]].text} text-sm`}>
                            {evidenceLevels[treatment.evidenceStrength - 1]}
                          </span>
                        </div>
                      </td>
                    </tr>
                    {expandedRows[treatment.id] && (
                      <tr className="sm:hidden bg-gray-50">
                        <td colSpan="5" className="px-4 py-4">
                          <div className="space-y-2">
                            <div>
                              <span className="font-bold">Type:</span>{" "}
                              <span className="text-gray-600">
                                {treatment.name.includes("Topical") ? "Topical" : "Oral"}
                              </span>
                            </div>
                            <div>
                              <span className="font-bold">Density Increase:</span>
                              <div className="flex items-center mt-1">
                                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                                  <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: `${treatment.densityIncrease * 5}%` }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-gray-600">{treatment.densityIncrease}%</span>
                              </div>
                            </div>
                            <div>
                              <span className="font-bold">Side Effect Level:</span>
                              <div className="flex items-center mt-1">
                                <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                                  <div
                                    className={`${sideEffectColors[sideEffectLevels[treatment.sideEffectScore - 1]].bg} h-2.5 rounded-full`}
                                    style={{ width: `${treatment.sideEffectScore * 20}%` }}
                                  ></div>
                                </div>
                                <span className={`${sideEffectColors[sideEffectLevels[treatment.sideEffectScore - 1]].text} text-sm`}>
                                  {sideEffectLevels[treatment.sideEffectScore - 1]}
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="font-bold">Evidence Strength:</span>
                              <div className="flex items-center mt-1">
                                <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                                  <div
                                    className={`${evidenceColors[evidenceLevels[treatment.evidenceStrength - 1]].bg} h-2.5 rounded-full`}
                                    style={{ width: `${treatment.evidenceStrength * 20}%` }}
                                  ></div>
                                </div>
                                <span className={`${evidenceColors[evidenceLevels[treatment.evidenceStrength - 1]].text} text-sm`}>
                                  {evidenceLevels[treatment.evidenceStrength - 1]}
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <a
            href="https://github.com/yourusername/your-repo-name"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-gray-700 transition-colors duration-200"
          >
            <FaGithub className="mr-2" />
            View on GitHub
          </a>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} FollicleFacts.org. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentComparison;