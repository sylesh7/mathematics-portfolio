/**
 * All portfolio content lives here — swap this file to make the site yours.
 */

export const profile = {
  name: 'Elena Vasquez',
  role: 'Mathematics Educator',
  tagline: 'I teach mathematics the way it actually lives — as motion, pattern, and play.',
  email: 'elena.vasquez@example.com',
  location: 'Portland, OR',
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/example' },
    { label: 'YouTube', href: 'https://youtube.com/@example' },
    { label: 'Desmos', href: 'https://desmos.com/example' },
  ],
  stats: [
    { label: 'Years teaching', value: 11, suffix: '' },
    { label: 'Students taught', value: 1400, suffix: '+' },
    { label: 'Lessons designed', value: 320, suffix: '+' },
    { label: 'Avg. class rating', value: 4.9, suffix: '/5', decimals: 1 },
  ],
  story: [
    'I fell for mathematics the day a teacher drew a sine wave and called it "a circle, unrolled in time." Nothing about math was static after that — every equation was a machine you could crank, every graph a story with a plot.',
    'For over a decade I have taught secondary and early-college mathematics — algebra through calculus, statistics, and everything between — designing lessons where students manipulate the math before they memorize it. My classroom runs on conjecture first, notation second.',
    'I build interactive tools, animations, and visual proofs because abstraction should be the reward of understanding, not the price of admission. When a student drags a point and watches a tangent line tilt, the derivative stops being a rule and starts being a fact about the world.',
  ],
}

export const philosophy = [
  {
    n: '1',
    symbol: '∂',
    title: 'Motion before notation',
    body: 'Students meet every concept as something that moves — a curve bending, a point sliding, a distribution filling in — before they meet the symbols that pin it down. Notation is the souvenir, not the trip.',
  },
  {
    n: '2',
    symbol: '≟',
    title: 'Conjecture is the curriculum',
    body: 'Every lesson opens with a question students can argue about. Wrong guesses are load-bearing: the fastest route to understanding a theorem is trying to break it first.',
  },
  {
    n: '3',
    symbol: '⟲',
    title: 'Struggle, safely',
    body: 'Productive struggle is engineered, not accidental. Problems are staged so every student hits a wall — and every wall has a door. Confidence comes from the climb, never from the absence of one.',
  },
  {
    n: '4',
    symbol: '∀',
    title: 'Every student counts',
    body: 'Mathematical identity is fragile and forged early. My classroom protocols guarantee every voice does math out loud — because "math person" is a label everyone deserves access to.',
  },
]

export const lessons = [
  {
    title: 'The Unrolled Circle',
    topic: 'Trigonometry',
    level: 'Grades 10–11',
    description: 'Students derive the sine wave physically by unrolling a marked circle along an axis, then verify with an interactive grapher.',
    tags: ['discovery', 'kinesthetic'],
  },
  {
    title: 'Tangent Line Detective',
    topic: 'Calculus',
    level: 'Grades 11–12',
    description: 'A secant line slowly closes the gap between two points. Students predict the limiting slope before the word "derivative" is ever spoken.',
    tags: ['limits', 'visual proof'],
  },
  {
    title: 'The Casino Always Wins',
    topic: 'Probability',
    level: 'Grades 9–10',
    description: 'Students design dice games, simulate thousands of trials, and discover expected value by going bankrupt (in play money).',
    tags: ['simulation', 'expected value'],
  },
  {
    title: 'Parabolas That Catch Things',
    topic: 'Algebra II',
    level: 'Grades 9–10',
    description: 'From satellite dishes to basketball arcs — vertex form as an engineering tool, capped by a catapult calibration challenge.',
    tags: ['modeling', 'project-based'],
  },
  {
    title: 'Proof Without Words',
    topic: 'Geometry',
    level: 'Grades 8–10',
    description: 'Students animate classic visual proofs (Pythagoras by rearrangement, sum of odds) and narrate the logic frame by frame.',
    tags: ['proof', 'animation'],
  },
  {
    title: 'The Signal in the Noise',
    topic: 'Statistics',
    level: 'Grades 11–12',
    description: 'Real district weather data, competing regression models, and a class tournament for the most honest forecast.',
    tags: ['data science', 'regression'],
  },
]

export const timeline = [
  { year: '2014', title: 'B.S. Mathematics', place: 'University of Oregon', detail: 'Graduated magna cum laude; senior thesis on visual approaches to convergence.' },
  { year: '2015', title: 'M.Ed. Curriculum & Instruction', place: 'Portland State University', detail: 'Research focus: manipulatives and dynamic geometry in secondary classrooms.' },
  { year: '2016', title: 'First classroom', place: 'Roosevelt High School', detail: 'Algebra I & Geometry. Learned more in year one than in any degree.' },
  { year: '2018', title: 'Math Lab founded', place: 'Roosevelt High School', detail: 'Launched a drop-in visual math lab; attendance hit 120 students weekly by spring.' },
  { year: '2020', title: 'Remote reinvention', place: 'District-wide', detail: 'Built 40+ interactive Desmos lessons adopted across the district during remote learning.' },
  { year: '2022', title: 'Department chair', place: 'Lincoln High School', detail: 'Led a 9-teacher department through a full curriculum redesign around inquiry.' },
  { year: '2024', title: 'State presenter', place: 'OCTM Annual Conference', detail: 'Keynote workshop: "Motion Before Notation" — teaching calculus concepts interactively.' },
  { year: '2026', title: 'Curriculum author', place: 'Open Curriculum Project', detail: 'Publishing an open-source interactive precalculus course used by 3,000+ students.' },
]

export const skills = [
  { name: 'Curriculum design', pct: 96, glyph: 'ƒ' },
  { name: 'Calculus instruction', pct: 94, glyph: '∫' },
  { name: 'Statistics & probability', pct: 90, glyph: 'σ' },
  { name: 'Desmos / GeoGebra', pct: 95, glyph: '∿' },
  { name: 'Differentiated instruction', pct: 88, glyph: '≠' },
  { name: 'Assessment design', pct: 85, glyph: '✓' },
  { name: 'EdTech integration', pct: 92, glyph: '⌘' },
  { name: 'Python & data viz', pct: 78, glyph: '𝜆' },
  { name: 'Classroom facilitation', pct: 97, glyph: '∀' },
  { name: 'Teacher mentorship', pct: 86, glyph: '∴' },
]

export const certifications = [
  { title: 'Oregon Professional Teaching License', org: 'Oregon TSPC', year: '2016', detail: 'Advanced Mathematics, Grades 6–12' },
  { title: 'National Board Certification', org: 'NBPTS', year: '2021', detail: 'Mathematics / Adolescence & Young Adulthood' },
  { title: 'Desmos Certified Presenter', org: 'Desmos', year: '2020', detail: 'Interactive activity design & facilitation' },
  { title: 'AP Calculus Reader', org: 'College Board', year: '2022', detail: 'Exam scoring & rubric calibration' },
  { title: 'Google Certified Educator L2', org: 'Google for Education', year: '2019', detail: 'Advanced classroom technology integration' },
]

export const navLinks = [
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'about', label: 'About' },
  { id: 'lab', label: 'Lessons Lab' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]
