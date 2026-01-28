/**
 * countryProviderMatrix.ts
 *
 * Auto-generated country-provider mappings.
 * Generated: 2026-01-27T23:30:12.852Z
 * Total entries: 183
 *
 * To regenerate: npx tsx scripts/bulk-generate/generate.ts
 */

import type { CountryProviderEntry, ProviderInCountry, ProviderCard, ComparisonRow } from './types';
import { getProviderBySlug } from './providers';

export const countryProviderMatrix: CountryProviderEntry[] = [
  {
    countrySlug: "greece",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Medical evacuation from Greek islands to Athens and worldwide travel coverage",
        notIdealFor: "Budget-focused expats—Greek private healthcare is affordable without premium plans",
        countryPageHref: "/countries/greece/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Digital Nomad Visa applicants (EU-based, meets Greek visa requirements)",
        notIdealFor: "Those planning to stay on mainland Athens only—local plans are cheaper",
        countryPageHref: "/countries/greece/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and comprehensive mental health coverage",
        notIdealFor: "Healthy digital nomads—more coverage than typically needed for Greece",
        countryPageHref: "/countries/greece/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget Digital Nomad Visa coverage meeting €30,000 minimum requirement",
        notIdealFor: "Island residents needing robust evacuation guarantees",
        countryPageHref: "/countries/greece/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "croatia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Croatia",
        countryPageHref: "/countries/croatia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/croatia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/croatia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/croatia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "ireland",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Expats who travel frequently and need worldwide coverage beyond Ireland",
        notIdealFor: "Long-term Ireland residents—VHI/Laya cost less and qualify for 20% tax relief",
        countryPageHref: "/countries/ireland/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "EU expats moving between Ireland and other European countries",
        notIdealFor: "Ireland-only residents—local insurers have better hospital agreements",
        countryPageHref: "/countries/ireland/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions (Bupa Ireland also operates locally with good hospital access)",
        notIdealFor: "Budget-conscious expats over 34—Lifetime Community Rating increases local plan costs",
        countryPageHref: "/countries/ireland/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Short-term stays or digital nomads not planning to establish residency",
        notIdealFor: "Long-term residents—missing 20% tax relief and local hospital agreements",
        countryPageHref: "/countries/ireland/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "poland",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Residence permit compliance plus travel coverage for Poland-based remote workers",
        notIdealFor: "Poland-only expats—Medicover/LuxMed subscriptions cost 70% less",
        countryPageHref: "/countries/poland/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "EU expats traveling frequently between Poland and Western Europe",
        notIdealFor: "Warsaw-based expats—local subscriptions are cheaper with better clinic networks",
        countryPageHref: "/countries/poland/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and comprehensive mental health coverage",
        notIdealFor: "Budget expats—Polish private healthcare is already very affordable",
        countryPageHref: "/countries/poland/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Non-EU visa applicants needing residence permit-compliant coverage",
        notIdealFor: "Long-term residents—Medicover/LuxMed have better Polish clinic networks",
        countryPageHref: "/countries/poland/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "czech-republic",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Supplement to Czech comprehensive insurance for worldwide travel coverage",
        notIdealFor: "Visa compliance—may NOT meet Czech Comprehensive Commercial Insurance requirements",
        countryPageHref: "/countries/czech-republic/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "EU expats wanting coverage beyond EHIC for Prague private clinics",
        notIdealFor: "Non-EU visa applicants—must use Czech-approved comprehensive insurers (PVZP, Maxima)",
        countryPageHref: "/countries/czech-republic/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and expats who qualify for public insurance but want premium options",
        notIdealFor: "Non-EU first 5 years—Czech comprehensive insurance is mandatory",
        countryPageHref: "/countries/czech-republic/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Short-term stays and EU citizens supplementing EHIC coverage",
        notIdealFor: "Long-term non-EU residents—does not meet Czech comprehensive insurance requirements",
        countryPageHref: "/countries/czech-republic/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "hungary",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Residence permit compliance plus worldwide coverage for Budapest-based professionals",
        notIdealFor: "Long-term Hungary residents—NEAK voluntary enrollment or local private is 60% cheaper",
        countryPageHref: "/countries/hungary/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "EU expats traveling between Hungary and Western Europe who want premium Budapest clinic access",
        notIdealFor: "Budget expats—Hungarian private healthcare is already extremely affordable",
        countryPageHref: "/countries/hungary/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions—critical since NEAK voluntary enrollment excludes pre-existing for 6 months",
        notIdealFor: "Healthy expats under 50—Hungary's low healthcare costs don't justify premium international plans",
        countryPageHref: "/countries/hungary/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Non-EU visa applicants needing residence permit-compliant coverage on a budget",
        notIdealFor: "Long-term residents—NEAK voluntary enrollment offers better value for Hungary-only care",
        countryPageHref: "/countries/hungary/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "austria",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Austria",
        countryPageHref: "/countries/austria/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/austria/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/austria/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/austria/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "switzerland",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Supplementary worldwide coverage on top of mandatory LAMal—useful for frequent travelers",
        notIdealFor: "Primary Switzerland coverage—does NOT satisfy mandatory LAMal requirement",
        countryPageHref: "/countries/switzerland/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Cross-border workers and those splitting time between Switzerland and EU",
        notIdealFor: "Swiss residents—you still need LAMal; this would be supplementary only",
        countryPageHref: "/countries/switzerland/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions coverage as supplement to LAMal (VVG excludes pre-existing)",
        notIdealFor: "Primary coverage—LAMal is mandatory and must come from Swiss-registered insurer",
        countryPageHref: "/countries/switzerland/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Short-term visitors (under 3 months) who are exempt from LAMal requirement",
        notIdealFor: "Swiss residents—does not meet mandatory LAMal requirements",
        countryPageHref: "/countries/switzerland/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "belgium",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Belgium",
        countryPageHref: "/countries/belgium/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/belgium/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/belgium/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/belgium/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "sweden",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Sweden",
        countryPageHref: "/countries/sweden/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/sweden/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/sweden/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/sweden/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "norway",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Norway",
        countryPageHref: "/countries/norway/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/norway/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/norway/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/norway/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "denmark",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Denmark",
        countryPageHref: "/countries/denmark/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/denmark/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/denmark/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/denmark/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "finland",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Finland",
        countryPageHref: "/countries/finland/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/finland/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/finland/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/finland/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "romania",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Romania",
        countryPageHref: "/countries/romania/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/romania/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/romania/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/romania/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "bulgaria",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Bulgaria",
        countryPageHref: "/countries/bulgaria/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/bulgaria/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/bulgaria/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/bulgaria/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "serbia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Serbia",
        countryPageHref: "/countries/serbia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/serbia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/serbia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/serbia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "montenegro",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Montenegro",
        countryPageHref: "/countries/montenegro/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/montenegro/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/montenegro/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/montenegro/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "albania",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Albania",
        countryPageHref: "/countries/albania/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/albania/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/albania/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/albania/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "north-macedonia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in North Macedonia",
        countryPageHref: "/countries/north-macedonia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/north-macedonia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/north-macedonia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/north-macedonia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "slovenia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Slovenia",
        countryPageHref: "/countries/slovenia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/slovenia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/slovenia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/slovenia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "slovakia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Slovakia",
        countryPageHref: "/countries/slovakia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/slovakia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/slovakia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/slovakia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "lithuania",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Lithuania",
        countryPageHref: "/countries/lithuania/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/lithuania/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/lithuania/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/lithuania/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "latvia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Latvia",
        countryPageHref: "/countries/latvia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/latvia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/latvia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/latvia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "estonia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Estonia",
        countryPageHref: "/countries/estonia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/estonia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/estonia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/estonia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "cyprus",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Cyprus",
        countryPageHref: "/countries/cyprus/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/cyprus/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/cyprus/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/cyprus/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "malta",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Malta",
        countryPageHref: "/countries/malta/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/malta/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/malta/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/malta/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "luxembourg",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Luxembourg",
        countryPageHref: "/countries/luxembourg/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/luxembourg/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/luxembourg/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/luxembourg/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "iceland",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Iceland",
        countryPageHref: "/countries/iceland/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/iceland/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/iceland/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/iceland/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "andorra",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Andorra",
        countryPageHref: "/countries/andorra/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/andorra/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/andorra/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/andorra/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "monaco",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Monaco",
        countryPageHref: "/countries/monaco/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/monaco/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/monaco/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/monaco/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "liechtenstein",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Liechtenstein",
        countryPageHref: "/countries/liechtenstein/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/liechtenstein/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/liechtenstein/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/liechtenstein/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "san-marino",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in San Marino",
        countryPageHref: "/countries/san-marino/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/san-marino/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/san-marino/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/san-marino/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "bosnia-herzegovina",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Bosnia and Herzegovina",
        countryPageHref: "/countries/bosnia-herzegovina/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/bosnia-herzegovina/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/bosnia-herzegovina/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/bosnia-herzegovina/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "kosovo",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Kosovo",
        countryPageHref: "/countries/kosovo/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/kosovo/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/kosovo/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/kosovo/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "moldova",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Moldova",
        countryPageHref: "/countries/moldova/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/moldova/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/moldova/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/moldova/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "ukraine",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Ukraine",
        countryPageHref: "/countries/ukraine/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/ukraine/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/ukraine/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/ukraine/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "belarus",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Belarus",
        countryPageHref: "/countries/belarus/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/belarus/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/belarus/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/belarus/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "georgia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Georgia",
        countryPageHref: "/countries/georgia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/georgia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/georgia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/georgia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "armenia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Armenia",
        countryPageHref: "/countries/armenia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/armenia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/armenia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/armenia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "azerbaijan",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Azerbaijan",
        countryPageHref: "/countries/azerbaijan/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/azerbaijan/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/azerbaijan/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/azerbaijan/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "turkey",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Meets residence permit requirements plus worldwide coverage for frequent travelers",
        notIdealFor: "Long-term Turkey residents—local insurance costs 70% less with same hospital access",
        countryPageHref: "/countries/turkey/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Expats splitting time between Turkey and Europe",
        notIdealFor: "Turkey-only residents—local insurers offer better value at Acibadem/Memorial",
        countryPageHref: "/countries/turkey/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions without Turkish insurer waiting periods",
        notIdealFor: "Budget expats—Turkish healthcare is already very affordable",
        countryPageHref: "/countries/turkey/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Residence permit requirement compliance at lower international rates",
        notIdealFor: "Long-term residents—may lack direct billing at top Istanbul hospitals",
        countryPageHref: "/countries/turkey/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "south-korea",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Supplementing NHIS with global coverage and English support at international clinics",
        notIdealFor: "Those only needing basic NHIS gap coverage (local Korean plans cheaper)",
        countryPageHref: "/countries/south-korea/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "E-7 professionals wanting high-deductible plans to reduce costs alongside NHIS",
        notIdealFor: "E-2 teachers on tight budgets",
        countryPageHref: "/countries/south-korea/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Mental health coverage and pre-existing conditions (limited under NHIS)",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/south-korea/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget-friendly NHIS supplement for E-2 English teachers",
        notIdealFor: "Those wanting premium international clinic access",
        countryPageHref: "/countries/south-korea/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "taiwan",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Coverage during 6-month NHI waiting period plus frequent international travel",
        notIdealFor: "Long-term Taiwan residents—NHI is excellent at $50/month; keeping international coverage is overkill",
        countryPageHref: "/countries/taiwan/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Expats splitting time between Taiwan and Europe who need worldwide coverage",
        notIdealFor: "Taiwan-only residents—once NHI eligible, it outperforms international plans for local care",
        countryPageHref: "/countries/taiwan/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions during 6-month waiting period—NHI covers all pre-existing once enrolled",
        notIdealFor: "Anyone past the waiting period—NHI has no pre-existing exclusions and costs 80% less",
        countryPageHref: "/countries/taiwan/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget coverage for 6-month waiting period before NHI enrollment",
        notIdealFor: "Long-term residents—NHI is mandatory and superior for Taiwan-based care",
        countryPageHref: "/countries/taiwan/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "hong-kong",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Expats planning to relocate—portable coverage that continues when leaving HK",
        notIdealFor: "Long-term HK residents—BUPA HK or AIA offer better local hospital networks at lower cost",
        countryPageHref: "/countries/hong-kong/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Frequent travelers needing worldwide coverage beyond Hong Kong",
        notIdealFor: "HK-only residents—local insurers have stronger private hospital relationships",
        countryPageHref: "/countries/hong-kong/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions—BUPA also operates BUPA HK locally with good conversion options",
        notIdealFor: "Employed expats with corporate coverage—may be redundant",
        countryPageHref: "/countries/hong-kong/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget-conscious expats willing to manage higher out-of-pocket costs",
        notIdealFor: "Anyone wanting comprehensive HK private hospital coverage—HK healthcare is expensive",
        countryPageHref: "/countries/hong-kong/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "philippines",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Medical evacuation to Singapore included—critical for those outside Metro Manila",
        notIdealFor: "Manila-only residents—local HMOs like Maxicare are 1/5 the price",
        countryPageHref: "/countries/philippines/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Frequent travelers between Philippines and other Asian countries",
        notIdealFor: "Budget-focused Manila expats—local coverage is much cheaper",
        countryPageHref: "/countries/philippines/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "SRRV retirees with pre-existing conditions needing comprehensive coverage",
        notIdealFor: "Young, healthy expats—local HMOs offer better value in Manila",
        countryPageHref: "/countries/philippines/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget medical evacuation coverage for expats in provinces",
        notIdealFor: "Those wanting direct billing at St. Luke's and Makati Medical—check network first",
        countryPageHref: "/countries/philippines/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "malaysia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Singapore coverage included—useful for complex cases requiring cross-border care",
        notIdealFor: "MM2H visa holders 35+—does not satisfy Malaysian insurance requirement",
        countryPageHref: "/countries/malaysia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Frequent travelers between Malaysia and other Asian countries",
        notIdealFor: "Long-term Malaysia-only residents—local plans are 50% cheaper with same hospital access",
        countryPageHref: "/countries/malaysia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and access to premium hospitals like Prince Court and Gleneagles",
        notIdealFor: "Budget-conscious expats—Malaysian private healthcare is already affordable out of pocket",
        countryPageHref: "/countries/malaysia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "DE Rantau digital nomads wanting affordable coverage with medical evacuation",
        notIdealFor: "MM2H applicants 35+—must use Malaysian insurance company",
        countryPageHref: "/countries/malaysia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "cambodia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Medical evacuation to Bangkok/Singapore—the most critical coverage in Cambodia",
        notIdealFor: "No one—evacuation coverage is essential here regardless of budget",
        countryPageHref: "/countries/cambodia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Expats who frequently travel to Thailand and want seamless regional coverage",
        notIdealFor: "Those who never leave Phnom Penh—but evacuation is still needed for serious cases",
        countryPageHref: "/countries/cambodia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Retirees with pre-existing conditions who need reliable evacuation guarantees",
        notIdealFor: "Young healthy expats who just want evacuation—cheaper options exist",
        countryPageHref: "/countries/cambodia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget-conscious expats wanting essential evacuation coverage at lower cost",
        notIdealFor: "Those wanting direct billing at Royal Phnom Penh Hospital—verify network first",
        countryPageHref: "/countries/cambodia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "laos",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Laos",
        countryPageHref: "/countries/laos/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/laos/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/laos/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/laos/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "myanmar",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "⚠️ Verify Myanmar coverage first—essential evacuation to Bangkok if policy covers Myanmar",
        notIdealFor: "Anyone who hasn't confirmed Myanmar is covered—some insurers have added exclusions",
        countryPageHref: "/countries/myanmar/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "⚠️ Confirm coverage—may provide evacuation to Singapore if Myanmar still covered",
        notIdealFor: "Those assuming coverage exists—verify in writing before relying on it",
        countryPageHref: "/countries/myanmar/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "⚠️ Check current policy terms—pre-existing conditions irrelevant if Myanmar excluded",
        notIdealFor: "Anyone who hasn't contacted Bupa directly about Myanmar coverage status",
        countryPageHref: "/countries/myanmar/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "⚠️ May still cover Myanmar—verify before purchase as policies change frequently",
        notIdealFor: "Those needing guaranteed direct billing—banking restrictions complicate payments",
        countryPageHref: "/countries/myanmar/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "nepal",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Nepal",
        countryPageHref: "/countries/nepal/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/nepal/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/nepal/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/nepal/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "sri-lanka",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Digital Nomad Visa compliance plus evacuation to India for complex cases",
        notIdealFor: "Budget expats—Sri Lanka has free public healthcare and affordable private options",
        countryPageHref: "/countries/sri-lanka/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Expats wanting India coverage included—Chennai/Kerala hospitals excellent for complex care",
        notIdealFor: "Colombo-only residents—local hospitals are good and very affordable",
        countryPageHref: "/countries/sri-lanka/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and chronic care—medication supply chains have stabilized post-crisis",
        notIdealFor: "Healthy expats—free public healthcare handles routine care adequately",
        countryPageHref: "/countries/sri-lanka/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget Digital Nomad Visa coverage meeting $50,000 minimum requirement",
        notIdealFor: "Those with serious chronic conditions—consider more comprehensive coverage",
        countryPageHref: "/countries/sri-lanka/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "bangladesh",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Bangladesh",
        countryPageHref: "/countries/bangladesh/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/bangladesh/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/bangladesh/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/bangladesh/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "pakistan",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Pakistan",
        countryPageHref: "/countries/pakistan/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/pakistan/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/pakistan/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/pakistan/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "india",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Medical evacuation from smaller cities to Delhi/Mumbai and worldwide travel coverage",
        notIdealFor: "Long-term India-only expats—local HDFC ERGO/Star Health costs 80% less",
        countryPageHref: "/countries/india/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Expats traveling frequently between India, Europe, and Asia",
        notIdealFor: "India-only residents—local insurers have better hospital networks",
        countryPageHref: "/countries/india/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions (faster coverage than local 2-4 year waiting periods)",
        notIdealFor: "Budget-conscious expats—Indian private healthcare is already very affordable",
        countryPageHref: "/countries/india/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Digital nomads wanting affordable international coverage with India included",
        notIdealFor: "Long-term expats—cashless networks may be limited compared to local insurers",
        countryPageHref: "/countries/india/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "maldives",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Maldives",
        countryPageHref: "/countries/maldives/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/maldives/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/maldives/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/maldives/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "brunei",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Brunei",
        countryPageHref: "/countries/brunei/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/brunei/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/brunei/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/brunei/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "mongolia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Mongolia",
        countryPageHref: "/countries/mongolia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/mongolia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/mongolia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/mongolia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "kazakhstan",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Kazakhstan",
        countryPageHref: "/countries/kazakhstan/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/kazakhstan/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/kazakhstan/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/kazakhstan/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "uzbekistan",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Uzbekistan",
        countryPageHref: "/countries/uzbekistan/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/uzbekistan/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/uzbekistan/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/uzbekistan/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "kyrgyzstan",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Kyrgyzstan",
        countryPageHref: "/countries/kyrgyzstan/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/kyrgyzstan/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/kyrgyzstan/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/kyrgyzstan/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "tajikistan",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Tajikistan",
        countryPageHref: "/countries/tajikistan/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/tajikistan/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/tajikistan/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/tajikistan/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "turkmenistan",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Turkmenistan",
        countryPageHref: "/countries/turkmenistan/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/turkmenistan/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/turkmenistan/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/turkmenistan/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "china",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in China",
        countryPageHref: "/countries/china/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/china/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/china/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/china/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "macau",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Macau",
        countryPageHref: "/countries/macau/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/macau/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/macau/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/macau/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "brazil",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Direct billing at Einstein, Sírio-Libanês, and top São Paulo hospitals",
        notIdealFor: "Budget expats—local planos de saúde cost 1/3 the price for Brazil-only coverage",
        countryPageHref: "/countries/brazil/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Frequent travelers needing Latin America plus Europe/US coverage",
        notIdealFor: "Those staying exclusively in Brazil—local planos offer better value",
        countryPageHref: "/countries/brazil/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and comprehensive mental health coverage",
        notIdealFor: "Budget-conscious expats who can wait out local carência periods",
        countryPageHref: "/countries/brazil/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Digital nomads wanting affordable international coverage with medical evacuation",
        notIdealFor: "Long-term residents—a local Bradesco or SulAmérica plan offers more value",
        countryPageHref: "/countries/brazil/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "chile",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Digital Nomad Visa compliance plus worldwide coverage for frequent travelers",
        notIdealFor: "Employed residents—you still must pay 7% to FONASA/ISAPRE regardless",
        countryPageHref: "/countries/chile/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Patagonia and remote area residents needing strong evacuation coverage to Santiago",
        notIdealFor: "Santiago-only expats—ISAPREs provide Clínica Alemana access at lower cost",
        countryPageHref: "/countries/chile/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions—ISAPREs can exclude or overcharge for health history",
        notIdealFor: "Healthy young expats—ISAPRE plans are cheaper with excellent Santiago clinic access",
        countryPageHref: "/countries/chile/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Digital nomads needing affordable visa-compliant coverage before establishing residency",
        notIdealFor: "Long-term residents—once earning income, ISAPRE/FONASA is mandatory anyway",
        countryPageHref: "/countries/chile/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "peru",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Digital Nomad Visa compliance plus medical evacuation from Cusco/highlands to Lima",
        notIdealFor: "Lima-only expats—local EPS (Rímac, Pacífico) offers top clinic access at 1/3 the cost",
        countryPageHref: "/countries/peru/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-altitude trekkers and Cusco residents needing robust evacuation coverage",
        notIdealFor: "Budget Lima expats—local plans have better Clínica Anglo Americana rates",
        countryPageHref: "/countries/peru/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and older expats who may be denied local EPS coverage",
        notIdealFor: "Healthy young expats—Lima private healthcare is affordable even out-of-pocket",
        countryPageHref: "/countries/peru/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget Digital Nomad Visa coverage and adventure travelers with altitude coverage",
        notIdealFor: "Long-term Lima residents—local EPS provides better clinic networks",
        countryPageHref: "/countries/peru/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "uruguay",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Uruguay",
        countryPageHref: "/countries/uruguay/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/uruguay/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/uruguay/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/uruguay/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "paraguay",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Paraguay",
        countryPageHref: "/countries/paraguay/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/paraguay/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/paraguay/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/paraguay/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "bolivia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Bolivia",
        countryPageHref: "/countries/bolivia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/bolivia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/bolivia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/bolivia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "venezuela",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Venezuela",
        countryPageHref: "/countries/venezuela/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/venezuela/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/venezuela/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/venezuela/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "guyana",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Guyana",
        countryPageHref: "/countries/guyana/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/guyana/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/guyana/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/guyana/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "suriname",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Suriname",
        countryPageHref: "/countries/suriname/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/suriname/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/suriname/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/suriname/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "belize",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Belize",
        countryPageHref: "/countries/belize/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/belize/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/belize/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/belize/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "guatemala",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Guatemala",
        countryPageHref: "/countries/guatemala/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/guatemala/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/guatemala/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/guatemala/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "honduras",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Honduras",
        countryPageHref: "/countries/honduras/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/honduras/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/honduras/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/honduras/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "el-salvador",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in El Salvador",
        countryPageHref: "/countries/el-salvador/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/el-salvador/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/el-salvador/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/el-salvador/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "nicaragua",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Nicaragua",
        countryPageHref: "/countries/nicaragua/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/nicaragua/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/nicaragua/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/nicaragua/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "dominican-republic",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Dominican Republic",
        countryPageHref: "/countries/dominican-republic/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/dominican-republic/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/dominican-republic/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/dominican-republic/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "jamaica",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Jamaica",
        countryPageHref: "/countries/jamaica/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/jamaica/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/jamaica/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/jamaica/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "bahamas",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Bahamas",
        countryPageHref: "/countries/bahamas/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/bahamas/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/bahamas/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/bahamas/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "barbados",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Barbados",
        countryPageHref: "/countries/barbados/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/barbados/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/barbados/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/barbados/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "trinidad-tobago",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Trinidad and Tobago",
        countryPageHref: "/countries/trinidad-tobago/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/trinidad-tobago/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/trinidad-tobago/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/trinidad-tobago/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "cuba",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Cuba",
        countryPageHref: "/countries/cuba/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/cuba/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/cuba/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/cuba/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "haiti",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Haiti",
        countryPageHref: "/countries/haiti/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/haiti/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/haiti/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/haiti/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "puerto-rico",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Puerto Rico",
        countryPageHref: "/countries/puerto-rico/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/puerto-rico/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/puerto-rico/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/puerto-rico/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "aruba",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Aruba",
        countryPageHref: "/countries/aruba/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/aruba/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/aruba/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/aruba/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "curacao",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Curaçao",
        countryPageHref: "/countries/curacao/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/curacao/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/curacao/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/curacao/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "cayman-islands",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Cayman Islands",
        countryPageHref: "/countries/cayman-islands/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/cayman-islands/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/cayman-islands/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/cayman-islands/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "bermuda",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Bermuda",
        countryPageHref: "/countries/bermuda/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/bermuda/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/bermuda/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/bermuda/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "virgin-islands",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in US Virgin Islands",
        countryPageHref: "/countries/virgin-islands/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/virgin-islands/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/virgin-islands/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/virgin-islands/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "st-kitts-nevis",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in St Kitts and Nevis",
        countryPageHref: "/countries/st-kitts-nevis/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/st-kitts-nevis/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/st-kitts-nevis/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/st-kitts-nevis/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "antigua-barbuda",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Antigua and Barbuda",
        countryPageHref: "/countries/antigua-barbuda/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/antigua-barbuda/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/antigua-barbuda/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/antigua-barbuda/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "grenada",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Grenada",
        countryPageHref: "/countries/grenada/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/grenada/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/grenada/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/grenada/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "st-lucia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Saint Lucia",
        countryPageHref: "/countries/st-lucia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/st-lucia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/st-lucia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/st-lucia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "dominica",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Dominica",
        countryPageHref: "/countries/dominica/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/dominica/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/dominica/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/dominica/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "st-vincent",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in St Vincent and the Grenadines",
        countryPageHref: "/countries/st-vincent/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/st-vincent/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/st-vincent/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/st-vincent/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "israel",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Israel",
        countryPageHref: "/countries/israel/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/israel/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/israel/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/israel/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "jordan",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Jordan",
        countryPageHref: "/countries/jordan/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/jordan/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/jordan/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/jordan/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "lebanon",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Lebanon",
        countryPageHref: "/countries/lebanon/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/lebanon/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/lebanon/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/lebanon/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "saudi-arabia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Saudi Arabia",
        countryPageHref: "/countries/saudi-arabia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/saudi-arabia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/saudi-arabia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/saudi-arabia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "qatar",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Qatar",
        countryPageHref: "/countries/qatar/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/qatar/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/qatar/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/qatar/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "kuwait",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Kuwait",
        countryPageHref: "/countries/kuwait/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/kuwait/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/kuwait/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/kuwait/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "bahrain",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Bahrain",
        countryPageHref: "/countries/bahrain/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/bahrain/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/bahrain/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/bahrain/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "oman",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Oman",
        countryPageHref: "/countries/oman/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/oman/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/oman/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/oman/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "iraq",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Iraq",
        countryPageHref: "/countries/iraq/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/iraq/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/iraq/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/iraq/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "iran",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Iran",
        countryPageHref: "/countries/iran/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/iran/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/iran/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/iran/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "yemen",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Yemen",
        countryPageHref: "/countries/yemen/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/yemen/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/yemen/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/yemen/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "syria",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Syria",
        countryPageHref: "/countries/syria/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/syria/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/syria/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/syria/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "south-africa",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in South Africa",
        countryPageHref: "/countries/south-africa/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/south-africa/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/south-africa/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/south-africa/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "morocco",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Medical evacuation to Europe (France/Spain) for complex cases not treatable in Morocco",
        notIdealFor: "Budget expats in Casablanca—Moroccan private healthcare is very affordable out-of-pocket",
        countryPageHref: "/countries/morocco/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "French retirees and EU expats wanting seamless coverage between Morocco and Europe",
        notIdealFor: "Morocco-only residents—local private insurance costs 50% less",
        countryPageHref: "/countries/morocco/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and expats needing guaranteed access to Casablanca's top clinics",
        notIdealFor: "Healthy expats—Moroccan healthcare costs are low enough to self-insure for routine care",
        countryPageHref: "/countries/morocco/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget coverage for digital nomads with evacuation to Europe included",
        notIdealFor: "Those wanting direct billing at Moroccan clinics—may require pay-and-claim",
        countryPageHref: "/countries/morocco/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "egypt",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Egypt",
        countryPageHref: "/countries/egypt/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/egypt/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/egypt/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/egypt/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "tunisia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Tunisia",
        countryPageHref: "/countries/tunisia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/tunisia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/tunisia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/tunisia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "kenya",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Kenya",
        countryPageHref: "/countries/kenya/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/kenya/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/kenya/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/kenya/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "tanzania",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Tanzania",
        countryPageHref: "/countries/tanzania/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/tanzania/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/tanzania/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/tanzania/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "uganda",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Uganda",
        countryPageHref: "/countries/uganda/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/uganda/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/uganda/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/uganda/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "rwanda",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Rwanda",
        countryPageHref: "/countries/rwanda/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/rwanda/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/rwanda/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/rwanda/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "ethiopia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Ethiopia",
        countryPageHref: "/countries/ethiopia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/ethiopia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/ethiopia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/ethiopia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "ghana",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Ghana",
        countryPageHref: "/countries/ghana/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/ghana/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/ghana/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/ghana/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "nigeria",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Nigeria",
        countryPageHref: "/countries/nigeria/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/nigeria/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/nigeria/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/nigeria/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "senegal",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Senegal",
        countryPageHref: "/countries/senegal/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/senegal/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/senegal/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/senegal/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "ivory-coast",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Ivory Coast",
        countryPageHref: "/countries/ivory-coast/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/ivory-coast/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/ivory-coast/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/ivory-coast/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "cameroon",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Cameroon",
        countryPageHref: "/countries/cameroon/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/cameroon/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/cameroon/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/cameroon/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "namibia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Namibia",
        countryPageHref: "/countries/namibia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/namibia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/namibia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/namibia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "botswana",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Botswana",
        countryPageHref: "/countries/botswana/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/botswana/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/botswana/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/botswana/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "zambia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Zambia",
        countryPageHref: "/countries/zambia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/zambia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/zambia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/zambia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "zimbabwe",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Zimbabwe",
        countryPageHref: "/countries/zimbabwe/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/zimbabwe/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/zimbabwe/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/zimbabwe/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "mozambique",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Mozambique",
        countryPageHref: "/countries/mozambique/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/mozambique/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/mozambique/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/mozambique/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "mauritius",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Mauritius",
        countryPageHref: "/countries/mauritius/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/mauritius/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/mauritius/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/mauritius/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "seychelles",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Seychelles",
        countryPageHref: "/countries/seychelles/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/seychelles/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/seychelles/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/seychelles/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "madagascar",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Madagascar",
        countryPageHref: "/countries/madagascar/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/madagascar/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/madagascar/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/madagascar/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "reunion",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Réunion",
        countryPageHref: "/countries/reunion/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/reunion/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/reunion/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/reunion/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "cape-verde",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Cape Verde",
        countryPageHref: "/countries/cape-verde/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/cape-verde/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/cape-verde/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/cape-verde/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "angola",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Angola",
        countryPageHref: "/countries/angola/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/angola/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/angola/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/angola/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "drc",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Democratic Republic of Congo",
        countryPageHref: "/countries/drc/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/drc/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/drc/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/drc/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "congo",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Republic of Congo",
        countryPageHref: "/countries/congo/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/congo/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/congo/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/congo/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "gabon",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Gabon",
        countryPageHref: "/countries/gabon/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/gabon/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/gabon/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/gabon/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "mali",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Mali",
        countryPageHref: "/countries/mali/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/mali/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/mali/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/mali/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "burkina-faso",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Burkina Faso",
        countryPageHref: "/countries/burkina-faso/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/burkina-faso/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/burkina-faso/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/burkina-faso/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "niger",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Niger",
        countryPageHref: "/countries/niger/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/niger/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/niger/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/niger/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "benin",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Benin",
        countryPageHref: "/countries/benin/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/benin/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/benin/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/benin/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "togo",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Togo",
        countryPageHref: "/countries/togo/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/togo/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/togo/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/togo/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "guinea",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Guinea",
        countryPageHref: "/countries/guinea/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/guinea/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/guinea/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/guinea/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "sierra-leone",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Sierra Leone",
        countryPageHref: "/countries/sierra-leone/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/sierra-leone/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/sierra-leone/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/sierra-leone/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "liberia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Liberia",
        countryPageHref: "/countries/liberia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/liberia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/liberia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/liberia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "gambia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in The Gambia",
        countryPageHref: "/countries/gambia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/gambia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/gambia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/gambia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "mauritania",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Mauritania",
        countryPageHref: "/countries/mauritania/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/mauritania/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/mauritania/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/mauritania/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "algeria",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Algeria",
        countryPageHref: "/countries/algeria/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/algeria/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/algeria/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/algeria/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "libya",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Libya",
        countryPageHref: "/countries/libya/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/libya/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/libya/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/libya/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "sudan",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Sudan",
        countryPageHref: "/countries/sudan/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/sudan/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/sudan/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/sudan/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "south-sudan",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in South Sudan",
        countryPageHref: "/countries/south-sudan/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/south-sudan/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/south-sudan/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/south-sudan/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "eritrea",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Eritrea",
        countryPageHref: "/countries/eritrea/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/eritrea/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/eritrea/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/eritrea/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "djibouti",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Djibouti",
        countryPageHref: "/countries/djibouti/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/djibouti/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/djibouti/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/djibouti/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "somalia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Somalia",
        countryPageHref: "/countries/somalia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/somalia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/somalia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/somalia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "comoros",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Comoros",
        countryPageHref: "/countries/comoros/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/comoros/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/comoros/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/comoros/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "mayotte",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Mayotte",
        countryPageHref: "/countries/mayotte/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/mayotte/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/mayotte/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/mayotte/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "sao-tome",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in São Tomé and Príncipe",
        countryPageHref: "/countries/sao-tome/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/sao-tome/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/sao-tome/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/sao-tome/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "equatorial-guinea",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Equatorial Guinea",
        countryPageHref: "/countries/equatorial-guinea/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/equatorial-guinea/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/equatorial-guinea/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/equatorial-guinea/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "central-african-republic",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Central African Republic",
        countryPageHref: "/countries/central-african-republic/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/central-african-republic/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/central-african-republic/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/central-african-republic/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "chad",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Chad",
        countryPageHref: "/countries/chad/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/chad/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/chad/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/chad/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "burundi",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Burundi",
        countryPageHref: "/countries/burundi/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/burundi/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/burundi/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/burundi/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "malawi",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Malawi",
        countryPageHref: "/countries/malawi/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/malawi/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/malawi/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/malawi/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "lesotho",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Lesotho",
        countryPageHref: "/countries/lesotho/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/lesotho/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/lesotho/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/lesotho/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "eswatini",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Eswatini",
        countryPageHref: "/countries/eswatini/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/eswatini/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/eswatini/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/eswatini/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "new-zealand",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Medical evacuation to Australia for complex care and worldwide travel coverage",
        notIdealFor: "Long-term NZ residents—Southern Cross offers better local value",
        countryPageHref: "/countries/new-zealand/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "Frequent travelers between NZ, Australia, and Asia-Pacific",
        notIdealFor: "NZ-only residents—local plans are more cost-effective",
        countryPageHref: "/countries/new-zealand/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions (faster coverage than Southern Cross 3-year wait)",
        notIdealFor: "Healthy expats—Southern Cross is cheaper with no medical underwriting",
        countryPageHref: "/countries/new-zealand/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Student visa holders needing Immigration NZ-compliant coverage",
        notIdealFor: "Those wanting extensive private hospital networks—NZ has limited private facilities",
        countryPageHref: "/countries/new-zealand/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "fiji",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Fiji",
        countryPageHref: "/countries/fiji/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/fiji/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/fiji/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/fiji/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "papua-new-guinea",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Papua New Guinea",
        countryPageHref: "/countries/papua-new-guinea/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/papua-new-guinea/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/papua-new-guinea/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/papua-new-guinea/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "samoa",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Samoa",
        countryPageHref: "/countries/samoa/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/samoa/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/samoa/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/samoa/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "tonga",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Tonga",
        countryPageHref: "/countries/tonga/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/tonga/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/tonga/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/tonga/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "vanuatu",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Vanuatu",
        countryPageHref: "/countries/vanuatu/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/vanuatu/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/vanuatu/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/vanuatu/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "solomon-islands",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Solomon Islands",
        countryPageHref: "/countries/solomon-islands/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/solomon-islands/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/solomon-islands/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/solomon-islands/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "new-caledonia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in New Caledonia",
        countryPageHref: "/countries/new-caledonia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/new-caledonia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/new-caledonia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/new-caledonia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "french-polynesia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in French Polynesia",
        countryPageHref: "/countries/french-polynesia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/french-polynesia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/french-polynesia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/french-polynesia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "guam",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Guam",
        countryPageHref: "/countries/guam/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/guam/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/guam/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/guam/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "palau",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Palau",
        countryPageHref: "/countries/palau/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/palau/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/palau/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/palau/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "micronesia",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Micronesia",
        countryPageHref: "/countries/micronesia/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/micronesia/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/micronesia/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/micronesia/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "marshall-islands",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Marshall Islands",
        countryPageHref: "/countries/marshall-islands/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/marshall-islands/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/marshall-islands/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/marshall-islands/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "kiribati",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Kiribati",
        countryPageHref: "/countries/kiribati/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/kiribati/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/kiribati/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/kiribati/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "nauru",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Nauru",
        countryPageHref: "/countries/nauru/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/nauru/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/nauru/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/nauru/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "tuvalu",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Tuvalu",
        countryPageHref: "/countries/tuvalu/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/tuvalu/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/tuvalu/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/tuvalu/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "cook-islands",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Cook Islands",
        countryPageHref: "/countries/cook-islands/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/cook-islands/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/cook-islands/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/cook-islands/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "niue",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Niue",
        countryPageHref: "/countries/niue/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/niue/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/niue/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/niue/insurance/img-global"
      }
    ]
  },
  {
    countrySlug: "tokelau",
    providers: [
      {
        providerSlug: "cigna-global",
        bestFor: "Worldwide coverage and strong customer service",
        notIdealFor: "Budget-focused expats staying only in Tokelau",
        countryPageHref: "/countries/tokelau/insurance/cigna-global"
      },
      {
        providerSlug: "allianz-care",
        bestFor: "High-deductible savings and EU-based service",
        notIdealFor: "Those wanting minimal out-of-pocket costs",
        countryPageHref: "/countries/tokelau/insurance/allianz-care"
      },
      {
        providerSlug: "bupa-global",
        bestFor: "Pre-existing conditions and mental health coverage",
        notIdealFor: "Those seeking the lowest premiums",
        countryPageHref: "/countries/tokelau/insurance/bupa-global"
      },
      {
        providerSlug: "img-global",
        bestFor: "Budget international coverage",
        notIdealFor: "Those wanting premium service levels",
        countryPageHref: "/countries/tokelau/insurance/img-global"
      }
    ]
  }
];

// Helper functions

export function getProvidersForCountry(countrySlug: string): ProviderInCountry[] {
  const entry = countryProviderMatrix.find(e => e.countrySlug === countrySlug);
  return entry?.providers || [];
}

export function buildProviderCards(countrySlug: string): ProviderCard[] {
  const countryProviders = getProvidersForCountry(countrySlug);

  return countryProviders.slice(0, 4).map(cp => {
    const provider = getProviderBySlug(cp.providerSlug);
    return {
      name: provider?.name || cp.providerSlug,
      bestFor: cp.bestFor,
      notIdealFor: cp.notIdealFor,
      href: cp.countryPageHref || provider?.href || '#',
    };
  });
}

export function buildComparisonRows(countrySlug: string): ComparisonRow[] {
  const countryProviders = getProvidersForCountry(countrySlug);

  return countryProviders.map(cp => {
    const provider = getProviderBySlug(cp.providerSlug);
    return {
      provider: provider?.name || cp.providerSlug,
      bestFor: cp.bestFor.split(' ').slice(0, 4).join(' '),
      coverageStyle: provider?.coverageStyle || 'Unknown',
      includesUS: provider?.includesUS || false,
      notableLimits: cp.notableLimitsOverride || provider?.notableLimits || 'None noted',
      learnMoreHref: cp.countryPageHref || provider?.href || '#',
    };
  });
}

export function getCountriesWithProvider(providerSlug: string): string[] {
  return countryProviderMatrix
    .filter(entry => entry.providers.some(p => p.providerSlug === providerSlug))
    .map(entry => entry.countrySlug);
}

export function getAllMatrixCountrySlugs(): string[] {
  return countryProviderMatrix.map(e => e.countrySlug);
}
