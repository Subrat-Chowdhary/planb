const { PrismaClient } = require("@prisma/client")

const database =  new PrismaClient();

async function main() {
try {
    await database.programs.createMany({
        data: [
  {
    "title": "QuantumCraft",
    "description": "Unlock the power of quantum computing in this innovative programming adventure.",
    "startDate": "2023-11-04T00:00:00.000Z",
    "endDate": "2023-11-07T00:00:00.000Z",
    "price": 49.99
  },
  {
    "title": "AstronomyExplorer",
    "description": "Explore the mysteries of the universe through code and data analysis.",
    "startDate": "2023-11-10T00:00:00.000Z",
    "endDate": "2023-11-14T00:00:00.000Z",
    "price": 79.99
  },
  {
    "title": "CodeChefMastermind",
    "description": "Compete in coding challenges and become the ultimate CodeChef Mastermind.",
    "startDate": "2023-11-20T00:00:00.000Z",
    "endDate": "2023-11-25T00:00:00.000Z",
    "price": 59.99
  },
  {
    "title": "CyberGuardians",
    "description": "Defend the digital realm against cyber threats with your coding skills.",
    "startDate": "2023-12-01T00:00:00.000Z",
    "endDate": "2023-12-05T00:00:00.000Z",
    "price": 69.99
  },
  {
    "title": "GameDevPro",
    "description": "Become a professional game developer and create your dream games.",
    "startDate": "2023-12-10T00:00:00.000Z",
    "endDate": "2023-12-15T00:00:00.000Z",
    "price": 89.99
  },
  {
    "title": "AIWizardry",
    "description": "Unleash the magic of artificial intelligence and machine learning.",
    "startDate": "2024-01-05T00:00:00.000Z",
    "endDate": "2024-01-10T00:00:00.000Z",
    "price": 99.99
  },
  {
    "title": "RoboCrafters",
    "description": "Craft your own robots and automate tasks with RoboCrafters.",
    "startDate": "2024-01-15T00:00:00.000Z",
    "endDate": "2024-01-20T00:00:00.000Z",
    "price": 79.99
  },
  {
    "title": "CryptoVoyager",
    "description": "Embark on a journey into the world of cryptocurrencies and blockchain.",
    "startDate": "2024-02-01T00:00:00.000Z",
    "endDate": "2024-02-05T00:00:00.000Z",
    "price": 69.99
  },
  {
    "title": "WebMasters",
    "description": "Master the art of web development and design with WebMasters.",
    "startDate": "2024-02-10T00:00:00.000Z",
    "endDate": "2024-02-14T00:00:00.000Z",
    "price": 59.99
  },
  {
    "title": "DataSculptors",
    "description": "Sculpt and shape data into meaningful insights with DataSculptors.",
    "startDate": "2024-03-01T00:00:00.000Z",
    "endDate": "2024-03-05T00:00:00.000Z",
    "price": 89.99
  }
]

    });

} catch (error) {
    console.log("Error seeding the database categories", error);
} finally {
    await database.$disconnect();
}
}

main();