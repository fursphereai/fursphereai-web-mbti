export default function handler(req, res) {
    // 生成随机数
    const generateRandomPetMBTI = () => {
 
        const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    

        const getRandomFromList = (list) => list[getRandomInt(0, list.length - 1)];

        const generateRandomIP = () =>
            `${getRandomInt(1, 255)}.${getRandomInt(0, 255)}.${getRandomInt(0, 255)}.${getRandomInt(1, 255)}`;
    
        const generateRandomUserInfo = () => ({
            name: getRandomFromList(["Alice", "Bob", "Charlie", "Diana", "Eve"]),
            email: `${getRandomFromList(["alice", "bob", "charlie", "diana", "eve"])}@example.com`,
            age: getRandomInt(18, 60),
            ip_address: generateRandomIP()
        });

        const randomSurvey = {
            user_information : 
                generateRandomUserInfo(),
            
            basic_information: {
                "Is your pet a cat or a dog?": getRandomFromList(["Cat", "Dog"]),
                "What’s his/her name?": getRandomFromList(["Buddy", "Charlie", "Max", "Bella", "Luna"]),
                "What breed is he/she?": getRandomFromList(["Golden Retriever", "Poodle", "Bulldog", "Beagle", "Mixed"]),
                "Is your pet a boy or a girl?": getRandomFromList(["Boy", "Girl"]),
                "How old is he/she?": getRandomInt(1, 15) 
            },
            personality_and_behavior: {
                "Energy & Socialization (E vs. I)": {
                    "How much does he/she seek your attention? (Needy ↔ Independent)": getRandomInt(1, 10), 
                    "How does he/she react to new people? (Shy ↔ Outgoing)": getRandomInt(1, 10),
                    "How does he/she behave around other animals? (Avoids them ↔ Loves making new friends)": getRandomInt(1, 10)
                },
                "Routine vs. Curiosity (S vs. N)": {
                    "Does he/she prefer a strict routine? (Needs routine ↔ Easily adapts to new things)": getRandomInt(1, 10),
                    "How does he/she react to new environments? (Cautious ↔ Explores immediately)": getRandomInt(1, 10),
                    "Does he/she often seem lost in thought or 'zoned out'? (Always present ↔ Often staring off at nothing)": getRandomInt(1, 10)
                },
                "Decision-Making (T vs. F)": {
                    "How does he/she react when you’re sad? (Ignores it ↔ Comforts you immediately)": getRandomInt(1, 10),
                    "When faced with a challenge (e.g., reaching food or a toy), does he/she:": getRandomFromList([
                        "Keep trying",
                        "Give up"
                    ]),
                    "Does he/she seem to hold grudges? (Forgets instantly ↔ Remembers and reacts later)": getRandomInt(1, 10)
                },
                "Structure vs. Spontaneity (J vs. P)": {
                    "Does he/she prefer things a certain way (e.g., food placement, favorite spots)? (Rigid habits ↔ Goes with the flow)":
                        getRandomInt(1, 10),
                    "How does he/she react to unexpected changes (e.g., trip to the vet, new furniture)? (Gets stressed ↔ Adjusts quickly)":
                        getRandomInt(1, 10),
                    "Is he/she more likely to follow commands or do things on his/her own terms? (Always listens ↔ Does what he/she wants)":
                        getRandomInt(1, 10)
                }
            }
        };
    
        return randomSurvey;
    };
    
   
    const randomPetMBTI = generateRandomPetMBTI();
    console.log("Randomly Generated Pet MBTI JSON:", JSON.stringify(randomPetMBTI, null, 4));
    

    res.status(200).json(randomPetMBTI);
}
