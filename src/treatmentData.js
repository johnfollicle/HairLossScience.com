// treatmentData.js
import { FaSprayCan, FaPills } from "react-icons/fa";

export const treatments = [
  {
    id: "topical-finasteride-minoxidil",
    name: "Topical finasteride + Minoxidil",
    densityIncrease: 15,
    sideEffectScore: 2,
    evidenceStrength: 4,
    description: "Combination therapy for enhanced results",
    icon: FaSprayCan,
    iconColor: "text-blue-500",
    howItWorks: "This combination therapy works by inhibiting DHT locally in the scalp (finasteride) and promoting blood flow to hair follicles (minoxidil), resulting in improved hair growth and density.",
    sideEffects: ["Scalp irritation", "Itching", "Dryness", "Increased body hair growth"],
    clinicalStudies: [
      {
        title: "Efficacy and safety of a new topical formulation containing finasteride and minoxidil in androgenetic alopecia",
        authors: "Smith J, et al.",
        journal: "Journal of Clinical Dermatology",
        year: 2021,
        link: "https://example.com/study1"
      },
      {
        title: "Comparative study of topical finasteride-minoxidil versus oral finasteride in male androgenetic alopecia",
        authors: "Johnson M, et al.",
        journal: "International Journal of Trichology",
        year: 2020,
        link: "https://example.com/study2"
      }
    ]
  },
  {
    id: "topical-minoxidil",
    name: "Topical Minoxidil",
    densityIncrease: 10,
    sideEffectScore: 1,
    evidenceStrength: 5,
    description: "Promotes hair growth and prolongs growth phase",
    icon: FaSprayCan,
    iconColor: "text-blue-500",
    howItWorks: "Minoxidil works by widening blood vessels and opening potassium channels, which increases blood flow to hair follicles. This stimulates hair growth and prolongs the anagen (growth) phase of the hair cycle.",
    sideEffects: ["Scalp irritation", "Dryness", "Flaking", "Initial shedding"],
    clinicalStudies: [
      {
        title: "Long-term (5-year) multinational experience with finasteride 1 mg in the treatment of men with androgenetic alopecia",
        authors: "Brown A, et al.",
        journal: "European Journal of Dermatology",
        year: 2019,
        link: "https://example.com/study3"
      },
      {
        title: "Efficacy of 5% minoxidil versus combined 5% minoxidil and 0.01% tretinoin for male pattern hair loss",
        authors: "Lee W, et al.",
        journal: "American Journal of Clinical Dermatology",
        year: 2018,
        link: "https://example.com/study4"
      }
    ]
  },
  {
    id: "topical-finasteride",
    name: "Topical Finasteride",
    densityIncrease: 12,
    sideEffectScore: 2,
    evidenceStrength: 3,
    description: "Reduces DHT levels in the scalp",
    icon: FaSprayCan,
    iconColor: "text-blue-500",
    howItWorks: "Topical finasteride works by inhibiting the enzyme 5-alpha reductase in the scalp, which reduces the conversion of testosterone to dihydrotestosterone (DHT). Lower DHT levels in the scalp can slow down or stop hair loss and promote regrowth.",
    sideEffects: ["Scalp irritation", "Itching", "Redness", "Decreased libido (rare)"],
    clinicalStudies: [
      {
        title: "Efficacy and safety of topical finasteride spray solution for male androgenetic alopecia",
        authors: "Garcia R, et al.",
        journal: "Journal of Dermatological Treatment",
        year: 2020,
        link: "https://example.com/study5"
      },
      {
        title: "Topical finasteride for androgenetic alopecia: a systematic review",
        authors: "Thompson J, et al.",
        journal: "British Journal of Dermatology",
        year: 2019,
        link: "https://example.com/study6"
      }
    ]
  },
  {
    id: "oral-minoxidil",
    name: "Oral Minoxidil",
    densityIncrease: 18,
    sideEffectScore: 3,
    evidenceStrength: 4,
    description: "Systemic treatment for overall hair growth",
    icon: FaPills,
    iconColor: "text-blue-500",
    howItWorks: "Oral minoxidil is a systemic vasodilator that promotes hair growth throughout the body. It works by increasing blood flow to hair follicles and prolonging the anagen phase of the hair cycle.",
    sideEffects: ["Increased body hair growth", "Fluid retention", "Dizziness", "Palpitations"],
    clinicalStudies: [
      {
        title: "Low-dose oral minoxidil for treating alopecia: A 3-year study",
        authors: "Wilson K, et al.",
        journal: "Journal of the American Academy of Dermatology",
        year: 2021,
        link: "https://example.com/study7"
      },
      {
        title: "Oral minoxidil for male and female pattern hair loss: A comprehensive review",
        authors: "Taylor L, et al.",
        journal: "International Journal of Dermatology",
        year: 2020,
        link: "https://example.com/study8"
      }
    ]
  },
  {
    id: "oral-finasteride",
    name: "Oral Finasteride",
    densityIncrease: 16,
    sideEffectScore: 4,
    evidenceStrength: 5,
    description: "Blocks DHT production throughout the body",
    icon: FaPills,
    iconColor: "text-blue-500",
    howItWorks: "Oral finasteride inhibits the enzyme 5-alpha reductase throughout the body, reducing the conversion of testosterone to DHT. This systemic reduction in DHT levels can slow or stop hair loss and promote regrowth in genetically susceptible hair follicles.",
    sideEffects: ["Decreased libido", "Erectile dysfunction", "Gynecomastia", "Depression"],
    clinicalStudies: [
      {
        title: "Finasteride in the treatment of men with androgenetic alopecia",
        authors: "Roberts J, et al.",
        journal: "New England Journal of Medicine",
        year: 1998,
        link: "https://example.com/study9"
      },
      {
        title: "Long-term safety and efficacy of finasteride in the treatment of male pattern hair loss",
        authors: "Davis N, et al.",
        journal: "European Journal of Dermatology",
        year: 2014,
        link: "https://example.com/study10"
      }
    ]
  }
];