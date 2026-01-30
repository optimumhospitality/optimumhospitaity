// Team member images
import johnGardner from "../../assets/image/team-page/team-member/john-gardner.webp";
import khangNguyen from "../../assets/image/team-page/team-member/khang.webp";
import gauravRai from "../../assets/image/team-page/team-member/gaurav-rai.webp";
import ayeMon from "../../assets/image/team-page/team-member/aye-mon.webp";
import minhNguyen from "../../assets/image/team-page/team-member/minh-nyugen.webp";
import lannyTran from "../../assets/image/team-page/team-member/lanny-tran.webp";
import colmHutchinson from "../../assets/image/team-page/team-member/colm-hutchinson.webp";
import tomBeirnaert from "../../assets/image/team-page/team-member/tom.webp";
import nobertVas from "../../assets/image/team-page/team-member/nobert-vas.webp";
import martinNugroho from "../../assets/image/team-page/team-member/martin-nugroho.webp";

// Signature image (common for all)
// import signature from "../../assets/image/team-page/signature/john-signature.webp";
import john from "../../assets/image/team-page/signature/john-gardenr.webp";
import lanny from "../../assets/image/team-page/signature/lanny-tran.webp";
import khang from "../../assets/image/team-page/signature/khang-ngugen.webp";
import colm from "../../assets/image/team-page/signature/colm-huttision.webp";
import gaurav from "../../assets/image/team-page/signature/gaurav-rai.webp";
import tom from "../../assets/image/team-page/signature/tom-beinarat.webp";
import aye from "../../assets/image/team-page/signature/aye-nugyen.webp";
import nobert from "../../assets/image/team-page/signature/nobert-vas.webp";
import minh from "../../assets/image/team-page/signature/minh-nyugen.webp";
import martin from "../../assets/image/team-page/signature/martin-nugodo.webp";


export interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  character: string;
  about: string[];
  image: string;
  signatureImage: string;
  country: string;
  gender:string;
}

export const teamMembersData: TeamMemberData[] = [
  {
    id: "john-gardner",
    name: "John Gardner",
    role: "Founding Partner & CEO",
    character: "Leads marketing-led growth in India and is a core leader in Media & Marketing",
    about: [
      "John is a well-seasoned and passionate 5 star hotelier experienced in general management, cluster management of multiple properties, pre-openings, renovations as well as asset management.",
      "He started his hospitality career in his native New Zealand where he opened and operated a number of restaurants before moving to Australia and had a change of direction into hotels joining the Accor group in the early 90's, managing several properties around the country before transferring up to Thailand as the start of his career throughout Asia. John has managed a number of different Accor brands such as Novotel, Grand Mercure and Sofitel in other Asian countries of Indonesia, Singapore and Cambodia before moving to China. During his time in there, he joined IHG opening a Crown Plaza in Shenzhen and an InterContinental in Chongqing.",
      "In 2007 John moved to Vietnam and joined the iconic Caravelle Saigon as General Manager then later as General Director of the JV owning company. Under his stewardship, the Caravelle undertook a full renovation of the property and has received numerous industry, environmental, compliance and service awards. John has an excellent understanding of 5 star brand standards and operations including marketing and finance.",
      "Towards the end of 2021, John left the Caravelle Saigon to set up Optimum Hospitality, a hotel asset management, consultancy and independent hotel management company. This new venture has expanded to Indonesia, Cambodia and Laos and offers a full suite of hotel consultancy services including \"white label\" hotel management of either franchised hotels or owners own branded hotels.",
      "John is well versed in project management, experience gained during many pre-openings and renovations throughout his career. During his nearly 20 years of working and living in Vietnam, being on the board of the New Zealand Chamber of Commerce Vietnam and being involved in many charity and social events, John has built up an extensive network within the country both in the hospitality industry and the community at large."
    ],
    image: johnGardner,
    signatureImage: john,
    country: "VIETNAM",
    gender:"him"
  },
  {
    id: "khang-nguyen",
    name: "Khang Nguyen",
    role: "Operations Director & Business Development",
    character: "Plays a pivotal role as an Owner Representative in ensuring harmonious collaboration.",
    about: [
      "Khang is an experienced hospitality professional with extensive expertise in operations management and business development across Southeast Asia.",
      "With a strong background in hotel operations, Khang has successfully led multiple property openings and operational turnarounds. His strategic approach to business development has helped expand Optimum Hospitality's presence in the Vietnamese market.",
      "Khang's deep understanding of local market dynamics and his ability to build strong relationships with stakeholders make him an invaluable asset to the team.",
      "His commitment to excellence and passion for the hospitality industry drives continuous improvement in all aspects of hotel operations."
    ],
    image: khangNguyen,
    signatureImage: khang,
    country: "VIETNAM",
    gender:"him"
  },
  {
    id: "gaurav-rai",
    name: "Gaurav Rai",
    role: "Director of Special Projects",
    character: "Seasoned hospitality executive with over 30 years of international experience",
    about: [
      "Gaurav is a seasoned hospitality executive with over 30 years of international experience in luxury hotel management and special projects.",
      "Throughout his distinguished career, Gaurav has led numerous high-profile projects across Asia, bringing his expertise in pre-opening strategies, brand implementations, and operational excellence.",
      "His extensive experience includes working with major international hotel brands, where he developed deep expertise in project management, quality assurance, and team development.",
      "Gaurav's strategic vision and hands-on approach to special projects have consistently delivered exceptional results for property owners and stakeholders."
    ],
    image: gauravRai,
    signatureImage: gaurav,
    country: "VIETNAM",
    gender:"him"
  },
  {
    id: "aye-mon",
    name: "Aye Mon",
    role: "Spa & Wellness",
    character: "Her expertise includes pre-opening, rebranding, and operational strategy.",
    about: [
      "Aye Mon is a wellness industry specialist with comprehensive experience in spa operations, pre-openings, and operational excellence.",
      "Her expertise spans across luxury spa and wellness center management, where she has successfully launched and operated numerous world-class facilities.",
      "Aye Mon's deep understanding of wellness trends and guest experience optimization has made her a sought-after consultant in the industry.",
      "Her passion for holistic wellness and commitment to exceptional service standards drives innovation in spa and wellness programming."
    ],
    image: ayeMon,
    signatureImage:aye,
    country: "VIETNAM",
    gender:"her"
  },
  {
    id: "minh-nguyen",
    name: "Minh Nguyen",
    role: "Advisor",
    character: "Plays a pivotal role as an Owner Representative in ensuring harmonious collaboration.",
    about: [
      "Minh is a trusted advisor with deep expertise in hospitality investments and owner representation.",
      "With years of experience in the Vietnamese hospitality market, Minh provides strategic guidance on asset performance, market positioning, and investment optimization.",
      "His strong network within the industry and government sectors enables smooth project execution and regulatory compliance.",
      "Minh's analytical approach and business acumen make him an invaluable resource for property owners seeking to maximize their investments."
    ],
    image: minhNguyen,
    signatureImage: minh,
    country: "VIETNAM",
    gender:"him"
  },
  {
    id: "lanny-tran",
    name: "Lanny Tran",
    role: "Project Analyst and Strategy Advisor",
    character: "Seasoned hospitality executive with over 30 years of international experience",
    about: [
      "Lanny is a skilled project analyst and strategy advisor with extensive experience in hospitality consulting and market analysis.",
      "Her analytical expertise and strategic thinking have contributed to numerous successful hotel development and repositioning projects.",
      "Lanny excels at identifying market opportunities and developing comprehensive strategies that align with owner objectives and market demands.",
      "Her dedication to data-driven decision-making and attention to detail ensure projects are well-planned and executed effectively."
    ],
    image: lannyTran,
    signatureImage: lanny,
    country: "VIETNAM",
    gender:"her",
  },
  {
    id: "colm-hutchinson",
    name: "Colm Hutchinson",
    role: "Marketing Content & Strategy",
    character: "Her expertise includes pre-opening, rebranding, and operational strategy.",
    about: [
      "Colm is a creative marketing professional with extensive experience in hospitality marketing, content strategy, and brand development.",
      "His innovative approach to marketing has helped numerous hotels establish strong brand identities and connect with their target audiences effectively.",
      "Colm's expertise spans digital marketing, content creation, and strategic communications, delivering measurable results for hospitality clients.",
      "His passion for storytelling and understanding of guest psychology drives compelling marketing campaigns that resonate with travelers."
    ],
    image: colmHutchinson,
    signatureImage: colm,
    country: "VIETNAM",
    gender:"him"
  },
  {
    id: "tom-beirnaert",
    name: "Tom Beirnaert",
    role: "AI Strategy Partner, Vertize",
    character: "Innovative hospitality-focused technology entrepreneur with extensive experience",
    about: [
      "Tom is an innovative hospitality-focused technology entrepreneur with extensive experience in AI and digital transformation.",
      "As the AI Strategy Partner at Vertize, Tom leads the development and implementation of cutting-edge technology solutions for the hospitality industry.",
      "His expertise in artificial intelligence and machine learning has helped hotels optimize operations, enhance guest experiences, and improve revenue management.",
      "Tom's vision for the future of hospitality technology continues to drive innovation and digital excellence across the organization."
    ],
    image: tomBeirnaert,
    signatureImage: tom,
    country: "VIETNAM",
    gender:"him"
  },
  {
    id: "nobert-vas",
    name: "Nobert Vas",
    role: "CEO of Optimum Hospitality- Indonesia",
    character: "Fluent in four languages and passionate about connecting capital",
    about: [
      "Nobert is a multilingual hospitality executive fluent in four languages with a passion for connecting capital with premium hospitality opportunities.",
      "As CEO of Optimum Hospitality Indonesia, Nobert leads the expansion of the company's services throughout the Indonesian archipelago.",
      "His extensive network in the hospitality and investment sectors has facilitated numerous successful partnerships and hotel developments.",
      "Nobert's leadership and strategic vision continue to drive the growth and success of Optimum Hospitality's Indonesian operations."
    ],
    image: nobertVas,
    signatureImage: nobert,
    country: "INDONESIA",
    gender:"him"
  },
  {
    id: "martin-nugroho",
    name: "Martin Nugroho",
    role: "COO & VP Development",
    character: "Distinguished executive within the Indonesian real estate industry",
    about: [
      "Martin is a distinguished executive within the Indonesian real estate and hospitality industry with decades of leadership experience.",
      "As COO & VP Development, Martin oversees operations and spearheads development initiatives across Indonesia.",
      "His deep understanding of the local market and strong relationships with developers and investors have been instrumental in the company's growth.",
      "Martin's operational excellence and strategic development approach ensure sustainable growth and exceptional service delivery."
    ],
    image: martinNugroho,
    signatureImage: martin,
    country: "INDONESIA",
    gender:'him'
  }
];

// Helper function to get member by ID
export const getTeamMemberById = (id: string): TeamMemberData | undefined => {
  return teamMembersData.find(member => member.id === id);
};
