export interface Guest {
  name: string;
  designation: string;
  department?: string;
}

// Add all guests here — token is the URL slug
export const guests: Record<string, Guest> = {
  principal: {
    name: "Respected Dr. Principal",
    designation: "Principal",
  },
  dean: {
    name: "Respected Dr. Dean",
    designation: "Dean of Academics",
  },
  "hod-cse": {
    name: "Respected Dr. [Name]",
    designation: "Head of Department",
    department: "Computer Science & Engineering",
  },
  "hod-it": {
    name: "Respected Dr. [Name]",
    designation: "Head of Department",
    department: "Information Technology",
  },
  faculty: {
    name: "Respected Prof. [Name]",
    designation: "Faculty Coordinator",
  },
};

// Fallback guest for generic / unknown tokens
export const defaultGuest: Guest = {
  name: "Respected Guest",
  designation: "Distinguished Invitee",
};

export function getGuestByToken(token: string | undefined): Guest {
  if (!token) return defaultGuest;
  return guests[token.toLowerCase()] || defaultGuest;
}
