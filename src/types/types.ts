export interface Course {
    id: number;
    img: string;
    title: string;
    desc: string;
    instructor: string;
    stars: number;
    rate: number;
    rateNumber: string;
    price: string;
    discount: string;
    bestSeller?: string; 
}


export interface Testimoial {
    id: number;
    desc: string;
    desc2: string;
    specilaDesc: string;
    name: string;
    nameWithLetter: string;
    link: string;
    linkTitle: string;
}

export interface Customer {
    id: number;
    desc: string;
    desc2: string;
    specilaDesc: string;
    img: string;
    name: string;
    job: string;
    address: string;
    fullStoryLink: string;
    customerLink: string;
}
