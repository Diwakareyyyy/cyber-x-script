export interface Member {
  name: string;
  designation: string;
  department: string;
  photo: string; // path in /members/photos/
  linkedin: string;
}

export interface Leadership {
  name: string;
  designation: string;
  department: string;
  photo: string;
  linkedin: string;
}

// These leaders and staff are shared between both clubs
export const leaders: Leadership[] = [
  {
    name: "Dr.R.Palson Kennedy",
    designation: "Principal",
    department: "PERI-IT",
    photo: "/members/leaders/leader1.jpg",
    linkedin: "https://www.linkedin.com/in/rajagopal-palson-kennedy-02aab226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr.B.Magesh",
    designation: "Vice Principal",
    department: "PERI-IT",
    photo: "/members/leaders/leader2.jpg",
    linkedin: "https://www.linkedin.com/in/dr-magesh-balakrishnan-793331128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dr.D.Manohari",
    designation: "Head of Department",
    department: "CSE",
    photo: "/members/leaders/leader3.jpg",
    linkedin: "https://www.linkedin.com/in/manohari-dorairaj-b3853074?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

export const staffCoordinators: Leadership[] = [
  {
    name: "Duraimurugan S",
    designation: "Faculty Coordinator",
    department: "CSE",
    photo: "/members/leaders/staff1.jpg",
    linkedin: "https://linkedin.com/in/staff1",
  },
  {
    name: "Divya M",
    designation: "Faculty Coordinator",
    department: "CSE",
    photo: "/members/leaders/staff2.jpg",
    linkedin: "https://linkedin.com/in/staff2",
  },
  {
    name: "Dharmaprakesh",
    designation: "Faculty Coordinator",
    department: "CSE",
    photo: "/members/leaders/staff3.jpg",
    linkedin: "https://www.linkedin.com/in/v-dharma-prakash-8aa55654",
  },
];

export const  cyberKnightsMembers: Member[] = [
  {
    name: "Birundha J",
    designation: "President ",
    department: "CSE",
    photo: "/members/cyber-knights/member1.jpg",
    linkedin: "https://www.linkedin.com/in/birundha-jayakrishnan-9a010428b",
  },
  {
    name: "Chukka Gayathri Preethi",
    designation: "Vice President",
    department: "CSE",
    photo: "/members/cyber-knights/member2.jpg",
    linkedin: "https://linkedin.com/in/vignesh-r",
  },
  {
    name: "kar S",
    designation: "Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member3.jpg",
    linkedin: "https://www.linkedin.com/in/s-diwakar-164169291/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Gopika J",
    designation: "Joint Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member4.jpg",
    linkedin: "https://linkedin.com/in/harish-k",
  },
  {
    name: "Jenish jose gideon",
    designation: "Treasurer",
    department: "CSE",
    photo: "/members/cyber-knights/member5.jpg",
    linkedin: "https://linkedin.com/in/nandhini-m",
  },
  {
    name: "Indhu S",
    designation: "joint Treasurer",
    department: "CSE",
    photo: "/members/cyber-knights/member6.jpg",
    linkedin: "https://linkedin.com/in/rahul-dev",
  },
  {
    name: "Priyadharshini S",
    designation: "student Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member7.jpg",
    linkedin: "https://linkedin.com/in/swetha-p",
  },
  {
    name: "Sandhiya E",
    designation: "student Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member8.jpg",
    linkedin: "https://www.linkedin.com/in/sandhiya-e-3a560b292/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Dhaunshkumar M",
    designation: "student Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member9.jpg",
    linkedin: "https://linkedin.com/in/meena-l",
  },
  {
    name: "yuvakrishanan M",
    designation: "student Secretary",
    department: "CSE",
    photo: "/members/cyber-knights/member10.jpg",
    linkedin: "https://linkedin.com/in/sanjay-t",
  },
  {
    name: "Heerashini SP",
    designation:"Committee Member",
    department: "CSE",
    photo: "/members/cyber-knights/member11.jpg",
    linkedin: "https://www.linkedin.com/in/heerashini-sp-71272a273 ",
  },
  {
    name: "Mukitha",
    designation:"Co-Committee Member",
    department: "CSE",
    photo: "/members/cyber-knights/member12.jpg",
    linkedin: "https://www.linkedin.com/in/heerashini-sp-71272a273 ",
  },
];
export const scriptSoldiersMembers:Member[] = [
  {
    name: "Vikram A",
    designation: "President",
    department: "CSE",
    photo: "/members/script-soldiers/member1.jpg",
    linkedin: "https://linkedin.com/in/arun-kumar",
  },
  {
    name: "Hakesh S",
    designation: "Vice President",
    department: "AIML",
    photo: "/members/script-soldiers/member2.jpg",
    linkedin: "https://linkedin.com/in/vignesh-r",
  },
  {
    name: "Shanmuga Sundaram S",
    designation: "Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member3.jpg",
    linkedin: "linkedin.com/in/shanmugam-sundaram-40a761355?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Mathiazhagan R",
    designation: "Joint Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member4.jpg",
    linkedin: "https://linkedin.com/in/harish-k",
  },
  {
    name: "Saravanan V",
    designation: "Treasurer",
    department: "CSE",
    photo: "/members/script-soldiers/member5.jpg",
    linkedin: "https://www.linkedin.com/in/saravanan-v16062005/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
  },
  {
    name: "Sharan D",
    designation: "Joint Treasurer",
    department: "CSE",
    photo: "/members/script-soldiers/member6.jpg",
    linkedin: "https://linkedin.com/in/rahul-dev",
  },
  {
    name: "Dheaneswaran M",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member10.jpg",
    linkedin: "https://linkedin.com/in/swetha-p",
  },
  {
    name: "Gopika R",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member7.jpg",
    linkedin: "https://www.linkedin.com/in/gopika-r-1a22b42b5 ",
  },
  {
    name: "Adhithya R",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member8.jpg",
    linkedin: "https://linkedin.com/in/meena-l",
  },
  {
    name: "Varshaa B",
    designation: "Student Secretary",
    department: "CSE",
    photo: "/members/script-soldiers/member10.jpg",
    linkedin: "https://linkedin.com/in/sanjay-t",
  },
  {
    name: "Srinidhi U",
    designation: "Committee member",
    department: "CSE",
    photo: "/members/script-soldiers/member11.jpg",
    linkedin: "www.linkedin.com/in/srinidhi-shankar-91a244292",
  },
   {
    name: "Inoshiya",
    designation: "Committee member",
    department: "CSE",
    photo: "/members/script-soldiers/member12.jpg",
    linkedin: "www.linkedin.com/in/inoshiya-027182292",
  },
];
