export interface Guest {
  token: string;
  name: string;
  designation: string;
  department?: string;
}

export const guests: Record<string, Guest> = {
  "principal": {
    token: "principal",
    name: "Dr. Pramod B. Patil",
    designation: "Principal",
  },
  "dean": {
    token: "dean",
    name: "Dr. S. V. Sonekar",
    designation: "Vice Principal",
  },
  "hod-cse": {
    token: "hod-cse",
    name: "Dr. Supriya Sawwashere",
    designation: "Head of Department",
    department: "Computer Science & Engineering",
  },
  "hod-ai": {
    token: "hod-ai",
    name: "Dr. Ashutosh Lanjewar",
    designation: "Head of Department",
    department: "Artificial Intelligence",
  },
  "hod-it": {
    token: "hod-it",
    name: "Prof. Amit Velekar",
    designation: "Head of Department",
    department: "Information Technology",
  },
  "hod-ds": {
    token: "hod-ds",
    name: "Prof. Hemant Tulkar",
    designation: "Head of Department",
    department: "Data Science",
  },
  "hod-etc": {
    token: "hod-etc",
    name: "Head of Department",
    designation: "Head of Department",
    department: "ETC",
  },
  "hod-electrical": {
    token: "hod-electrical",
    name: "Head of Department",
    designation: "Head of Department",
    department: "Electrical",
  },
  "hod-cyber": {
    token: "hod-cyber",
    name: "Prof. Rohan Kokate",
    designation: "Head of Department",
    department: "Cyber Security",
  },
  "hod-mech": {
    token: "hod-mech",
    name: "Head of Department",
    designation: "Head of Department",
    department: "Mechanical",
  },
  "hod-civil": {
    token: "hod-civil",
    name: "Head of Department",
    designation: "Head of Department",
    department: "Civil",
  },
  "hod-bshd": {
    token: "hod-bshd",
    name: "Prof. Bhavna Ilamkar",
    designation: "Head of Department",
    department: "BSHD",
  },
};

export const defaultGuest: Guest = {
  token: "guest",
  name: "Respected Guest",
  designation: "Distinguished Invitee",
};

export function getGuestByToken(token: string | undefined): Guest {
  if (!token) return defaultGuest;
  return guests[token.toLowerCase()] || defaultGuest;
}
