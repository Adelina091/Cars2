const cars_info = {
    cars: [
        {
            "id": 1,
            "name": "BMW",
            "img": "https://wallpapers.com/images/featured/1920x1080-bmw-k85uw5ar84mfsbem.jpg",
            "text": "The MW 3 Series is the sixth generation of 3 Series passenger cars from the German automaker BMW, production of which began at the end of October 2011. The sedan, station wagon and sports version remained in the model range, the remaining cars were allocated to the 4th series. The new sedan (German Limousine) has become larger, longer and wider, which made its silhouette even more rapid. The elongated and narrower shape of the “nostrils” slightly inclined forward, which were in contact with twin headlights with luminous rings and LED “eyelashes” above them, formed a single visual element emphasizing the increased width of the car.",
            "price": "25.000$"
        },
        {
            "id": 2,
            "name": "Nissan",
            "img": "https://images.wallpaperscraft.ru/image/single/nissan_gtr_nissan_sportkar_139668_1920x1080.jpg",
            "text": "In March 2016, Nissan brought an updated version of its GT-R sports car to New York. Produced since 2007, the car has received noticeable changes in appearance - a completely new design of the front end with an enlarged signature V-shaped grille, a reinforced hood and a new spoiler. The latter provided an increase in downforce, and additional sill trims improved aerodynamic performance, while the ground clearance remained unchanged. In addition to practical solutions, changes to the exterior added expressiveness to the car. In addition, the GT-R received a more rigid body structure and an upgraded suspension, which had a positive effect on the car's handling.",
            "price": "45.000$"
        },
        {
            "id": 3,
            "name": "Mercedes-Benz",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszrZyFBMzBbEttsg-moALgxsBfJ9Hhyza5jDn0872VA&s",
            "text": "The AMG GT takes over its exterior design from its predecessor the SLS AMG - the same wide wheel arches and a similar lower part of the car, but the doors are not made in the gullwing style. The large hood and thin windshield also remain the same. The lead exterior designer was Mark Fetherston, known for his previous work on the W176 A-Class, CLA-Class and SLS[4]. The interior designer was Jan Kaul, who designed the large center console and decorative design elements made of leather and carbon polymer[5]. The trunk can accommodate a medium-sized suitcase. The vehicle's structure is made up of 93% aluminum, the front module is mainly made of magnesium.",
            "price": "10.000$"
        },
        {
            "id": 4,
            "name": "Ferrari",
            "img": "https://images.wallpaperscraft.ru/image/single/ferrari_458_italia_avto_99758_1920x1080.jpg",
            "text": "The car's exterior design and performance have been designed with aerodynamic efficiency in mind, producing 140 kg (309 lb) of downforce at 200 km/h (124 mph). In particular, the front grille features deformable wings that lower at high speeds to reduce drag. The car's interior was designed using materials from former Ferrari Formula 1 driver Michael Schumacher. In a racing car design, the new steering wheel incorporates a variety of controls typically located on the instrument panel or on steering wheel paddles, such as the turn signals or high beams.",
            "price": "50.000$"
        },
        {
            "id": 5,
            "name": "Subaru",
            "img": "https://i.artfile.ru/1920x1080_1561194_[www.ArtFile.ru].jpg",
            "text": "Subaru WRX (until 2014 Subaru Impreza WRX) is an all-wheel drive car, a “charged” version initially of the Subaru Impreza model, and from 2021 of the Subaru Levorg model. It was produced at different times in sedan, station wagon (until 2007) and hatchback (since 2007) versions. Sales of the Subaru Impreza WRX began in 1992 in Japan, but very soon the model was also sold in Australia, North America and Europe. Compared to the base model, the WRX comes with wider, low-profile tires, upgraded brakes and a stiffer suspension. The main difference between the WRX and cheaper modifications is the presence of turbocharging in all variants, the external difference is the air intake on the hood, a different radiator grille, reduced ground clearance, increased wheel diameter.",
            "price": "30.000$"
        },
        {
            "id": 6,
            "name": "Toyota",
            "img": "https://i0.wp.com/i.redd.it/obmat9yo4mi81.jpg?resize=1200%2C800&ssl=1",
            "text": "Toyota Supra is a serial sports car produced by Toyota since 1978. The Supra's design was adopted from the Toyota Celica, but the body became longer and wider. Beginning in mid-1986, the Supra separated from the Celica, becoming its own model. In this regard, Toyota stopped using the Celica prefix, and the car began to be called simply Supra. The first, second and third generations of Supra were assembled at the Takhara plant, the fourth generation at the Toyota plant in Japan, and the fifth generation was assembled both in Japan (in the city of Toyota) and in Austria (in the city of Graz by Magna Steyr). The Supra also shares a connection with the Toyota 2000GT, from which it shares its engine.",
            "price": "20.000$"
        },
        {
            "id": 7,
            "name": "Peugeot",
            "img": "https://www.hdwallpapers.in/download/compact_car_green_car_peugeot_peugeot_308_4k_hd_cars-1920x1080.jpg",
            "text": "Peugeot 508 is a mid-size car from the French company Peugeot, part of the PSA Peugeot Citroën concern. It was officially presented at the 2010 Geneva Motor Show and the same year at the Paris Motor Show, with sales beginning in early 2011. Replaced Peugeot 407 and Peugeot 607 in the model range. Available in two body types - sedan and station wagon. The salon will retain the dimensions of the 607 model, and the station wagon will be equipped with a glass roof. Also, the 508 is a continuation of the 500 series of Peugeot, which ended in 1992 with the 505 model.",
            "price": "47.000$"
        },
        {
            "id": 8,
            "name": "Mitsubishi",
            "img": "https://www.10wallpaper.com/wallpaper/1920x1080/1110/Mitsubishi_Super_car_Concept_1920x1080.jpg",
            "text": "The first generation Mitsubishi used technologies such as all-wheel drive, four active wheels, active aerodynamics involving automatically adjustable front and rear spoilers, and electronic control suspension (ECS). There was no active aerodynamics on the Dodge Stealth. The 3000GT engine had four camshafts, two turbochargers with an intercooler and multi-point fuel injection into the cylinders. The second generation of the model differs from the first primarily in the modified front and rear bumpers, as well as in the side air intakes. The interior has also been redone, there are 2 airbags, a new audio system and air conditioning.",
            "price": "38.000$"
        }
    ]
}

const search = document.getElementById('search'); 
let info_block = document.getElementById('info-block'); 


function random() { 

    info_block.innerHTML = `` 
    const carsArray = cars_info.cars; 
    const shuffledCars = carsArray.sort(() => Math.random() - 0.5); 

    shuffledCars.forEach(car => { 

        let card = document.createElement("div") 
        card.classList.add("card") 

        
        card.innerHTML = `
            <div class="card">
                <div class="card-img">
                    <img src="${car.img}" alt="">
                </div>
                <div class="card-title">
                    <div class="bigFont">${car.name}</div>
                </div>
                <div class="card-text">
                    <p>${car.text}</p>
                </div>
                <div class="card-price">
                    <div class="bigFont">${car.price}</div>
                </div>
            </div>
        `;    
        

        info_block.appendChild(card) 

    });

}

function searchByName(){ 
    const term = search.value.trim(); 

    const car = cars_info.cars.find(car => car.name.toLowerCase() === term.toLowerCase()); 
    info_block.innerHTML = ``
    let card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
        <div class="card">
            <div class="card-img">
                <img src="${car.img}" alt="">
            </div>
            <div class="card-title">
                <div class="bigFont">${car.name}</div>
            </div>
            <div class="card-text">
                <p>${car.text}</p>
            </div>
            <div class="card-price">
                <div class="bigFont">${car.price}</div>
            </div>
        </div>
    `;    
    
    info_block.appendChild(card)

}


