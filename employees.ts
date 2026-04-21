import bree from './src/assets/Bree.jpg';

export interface Employees{
    id: number,
    name: string,
    position: string,
    image: ImageMetadata
}


export const empDetails: Employees[] = [
    {
        id: 1,
        name: "Brewell Ncita",
        position: "Chief Executive Officer",
        image: bree
    },
    {
        id: 2,
        name: "Kevin Chiloane",
        position: "Chief Technology Officer",
        image: bree
    },
    {
        id: 3,
        name: "Gordon Nthako",
        position: "Chief Financial Officer",
        image: bree
    },
    {
        id: 4,
        name: "Hlumelo Siyo",
        position: "Chief Hardware Architect",
        image: bree 
    },
    {
        id: 5,
        name: "Wanga Tshikombedze",
        position: "Chief Product Officer",
        image: bree
    },
    {
        id: 6,
        name: "Kamogelo Mathye",
        position: "Chief Marketing Officer",
        image: bree
    },
    {
        id: 7,
        name: "Derick Diana",
        position: "Quality Control Officer",
        image: bree
    },
    {
        id: 8,
        name: "Nicholas MJ",
        position: "Chief Growth Officer",
        image: bree 
    },
    {
        id: 9,
        name: "Kgaugelo Bopape",
        position: "Software Engineer",
        image: bree 
    },
    {
        id: 10,
        name: "Blessing Nukeri",
        position: "DevOps manager ",
        image: bree
    },
    {
        id: 11,
        name: "Akhile Ngwenya",
        position: "Chief Operations Officer",
        image: bree
    }
]