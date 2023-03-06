document.addEventListener('DOMContentLoaded', function () {

    const petsPagination = [{
            "name": "Jennifer",
            "src": "assets/img/pets/jennifer",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 0
        },
        {
            "name": "Sophia",
            "src": "assets/img/pets/sophia",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 1
        },
        {
            "name": "Woody",
            "src": "assets/img/pets/woody",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"],
            "id": 2
        },
        {
            "name": "Scarlett",
            "src": "assets/img/pets/scarlett",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 3
        },
        {
            "name": "Katrine",
            "src": "assets/img/pets/katrine",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 4
        },
        {
            "name": "Timmy",
            "src": "assets/img/pets/timmy",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"],
            "id": 5
        },
        {
            "name": "Freddie",
            "src": "assets/img/pets/freddie",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 6
        },
        {
            "name": "Charly",
            "src": "assets/img/pets/charly",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"],
            "id": 7
        },
        
        {
            "name": "Sophia",
            "src": "assets/img/pets/sophia",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 8
        },
        {
            "name": "Jennifer",
            "src": "assets/img/pets/jennifer",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 9
        },
        {
            "name": "Woody",
            "src": "assets/img/pets/woody",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"],
            "id": 10
        },
        {
            "name": "Scarlett",
            "src": "assets/img/pets/scarlett",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 11
        },
        {
            "name": "Katrine",
            "src": "assets/img/pets/katrine",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 12
        },
        {
            "name": "Timmy",
            "src": "assets/img/pets/timmy",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"],
            "id": 13
        },
        {
            "name": "Freddie",
            "src": "assets/img/pets/freddie",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 14
        },
        {
            "name": "Charly",
            "src": "assets/img/pets/charly",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"],
            "id": 15
        },
        {
            "name": "Jennifer",
            "src": "assets/img/pets/jennifer",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 16
        },
        {
            "name": "Sophia",
            "src": "assets/img/pets/sophia",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 17
        },
        {
            "name": "Woody",
            "src": "assets/img/pets/woody",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"],
            "id": 18
        },
        {
            "name": "Scarlett",
            "src": "assets/img/pets/scarlett",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 19
        },
        {
            "name": "Timmy",
            "src": "assets/img/pets/timmy",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"],
            "id": 20
        },
        {
            "name": "Katrine",
            "src": "assets/img/pets/katrine",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 21
        },
        {
            "name": "Freddie",
            "src": "assets/img/pets/freddie",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 22
        },
        {
            "name": "Charly",
            "src": "assets/img/pets/charly",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"],
            "id": 23
        },
        {
            "name": "Jennifer",
            "src": "assets/img/pets/jennifer",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 24
        },
        {
            "name": "Sophia",
            "src": "assets/img/pets/sophia",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 25
        },
        {
            "name": "Scarlett",
            "src": "assets/img/pets/scarlett",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 26
        },
        {
            "name": "Woody",
            "src": "assets/img/pets/woody",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"],
            "id": 27
        },
        {
            "name": "Katrine",
            "src": "assets/img/pets/katrine",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 28
        },
        {
            "name": "Timmy",
            "src": "assets/img/pets/timmy",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"],
            "id": 29
        },
        {
            "name": "Freddie",
            "src": "assets/img/pets/freddie",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 30
        },
        {
            "name": "Charly",
            "src": "assets/img/pets/charly",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"],
            "id": 31
        },
        {
            "name": "Jennifer",
            "src": "assets/img/pets/jennifer",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 32
        },
        {
            "name": "Sophia",
            "src": "assets/img/pets/sophia",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 33
        },
        {
            "name": "Woody",
            "src": "assets/img/pets/woody",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"],
            "id": 34
        },
        {
            "name": "Scarlett",
            "src": "assets/img/pets/scarlett",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 35
        },
        {
            "name": "Katrine",
            "src": "assets/img/pets/katrine",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 36
        },
        {
            "name": "Timmy",
            "src": "assets/img/pets/timmy",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"],
            "id": 37
        },
        {
            "name": "Freddie",
            "src": "assets/img/pets/freddie",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 38
        },
        {
            "name": "Charly",
            "src": "assets/img/pets/charly",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"],
            "id": 39
        },
        {
            "name": "Jennifer",
            "src": "assets/img/pets/jennifer",
            "type": "Dog",
            "breed": "Labrador",
            "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
            "age": "2 months",
            "inoculations": ["none"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 40
        },
        {
            "name": "Sophia",
            "src": "assets/img/pets/sophia",
            "type": "Dog",
            "breed": "Shih tzu",
            "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
            "age": "1 month",
            "inoculations": ["parvovirus"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 41
        },
        {
            "name": "Woody",
            "src": "assets/img/pets/woody",
            "type": "Dog",
            "breed": "Golden Retriever",
            "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
            "age": "3 years 6 months",
            "inoculations": ["adenovirus", "distemper"],
            "diseases": ["right back leg mobility reduced"],
            "parasites": ["none"],
            "id": 42
        },
        {
            "name": "Scarlett",
            "src": "assets/img/pets/scarlett",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
            "age": "3 months",
            "inoculations": ["parainfluenza"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 43
        },
        {
            "name": "Katrine",
            "src": "assets/img/pets/katrine",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
            "age": "6 months",
            "inoculations": ["panleukopenia"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 44
        },
        {
            "name": "Timmy",
            "src": "assets/img/pets/timmy",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
            "age": "2 years 3 months",
            "inoculations": ["calicivirus", "viral rhinotracheitis"],
            "diseases": ["kidney stones"],
            "parasites": ["none"],
            "id": 45
        },
        {
            "name": "Charly",
            "src": "assets/img/pets/charly",
            "type": "Dog",
            "breed": "Jack Russell Terrier",
            "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
            "age": "8 years",
            "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
            "diseases": ["deafness", "blindness"],
            "parasites": ["lice", "fleas"],
            "id": 46
        },
        {
            "name": "Freddie",
            "src": "assets/img/pets/freddie",
            "type": "Cat",
            "breed": "British Shorthair",
            "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
            "age": "2 months",
            "inoculations": ["rabies"],
            "diseases": ["none"],
            "parasites": ["none"],
            "id": 47
        },
    ];




    // BURGER MENU

    const links = document.querySelectorAll('.header__nav-link');

    const openMenu = () => {
        document.querySelector('body').classList.add('lock');
        document.querySelector('.header-pets-overlay').classList.add('header-pets-overlay--visible');
        document.querySelector('.body-overlay').classList.add('body-overlay--visible');
        document.querySelector('.header__burger').classList.add('active');
        document.querySelector('.header__burger').classList.remove('not-active');
        document.querySelector('.header__nav').classList.add('active');
        links.forEach(link => link.classList.add('header__nav-link--burger'));
        document.querySelector('.header__burger').setAttribute('aria-label', 'Close menu');
    };

    const closeMenu = () => {
        document.querySelector('.header__burger').classList.remove('header__burger--active');
        document.querySelector('body').classList.remove('lock');
        document.querySelector('.header-pets-overlay').classList.remove('header-pets-overlay--visible');
        document.querySelector('.body-overlay').classList.remove('body-overlay--visible');
        document.querySelector('.header__burger').classList.remove('active');
        document.querySelector('.header__burger').classList.add('not-active');
        document.querySelector('.header__nav').classList.remove('active');
        links.forEach(link => link.classList.remove('header__nav-link--burger'));
        document.querySelector('.header__burger').setAttribute('aria-label', 'Open menu');
    };

    document.querySelector('#burger').addEventListener('click', () => {
        if (document.querySelector('.not-active')) {
            openMenu();
        } else if (document.querySelector('.active')) {
            closeMenu();
        }
    });

    links.forEach(link => link.addEventListener('click', () => {
        if (document.querySelector('.header__nav-link--burger')) {
            closeMenu();
        }
    }));

    document.querySelector('.body-overlay').addEventListener('click', closeMenu);
    document.querySelector('.header-pets-overlay').addEventListener('click', closeMenu);


    class PetsCard {
        constructor(src, type, name, id, parentSelector, cardSelector) {
            this.src = src;
            this.type = type;
            this.name = name;
            this.id = id;
            this.parent = document.querySelector(parentSelector);
            this.cardClass = cardSelector;
        }

        render() {
            const element = document.createElement('li');
            element.classList.add(...this.cardClass);
            element.innerHTML = `
            <article class="card" data-index="${this.id}">
              <picture class="card__img-container">
                  <source 
                    srcset="${this.src}@1x.webp 1x,
                            ${this.src}@2x.webp 2x" 
                    type="image/webp"
                  >
                  <img src="${this.src}@1x.jpg"
                      srcset="${this.src}@2x.jpg 2x" 
                      alt="${this.type}"
                      class="card__img"
                      data-index="${this.id}"
                  >
              </picture>
              <h3 class="card__name" data-index="${this.id}">
                  ${this.name}
              </h3>
              <button href="#" class="btn btn--other" data-index="${this.id}">Learn more</button>
            </article>
            `;
            this.parent.append(element);
        }
    }


    class popupCard {
        constructor(name, type, breed, description, age, inoculations, diseases, parasites, src) {
            this.name = name;
            this.type = type;
            this.breed = breed;
            this.description = description;
            this.age = age;
            this.inoculations = inoculations;
            this.diseases = diseases;
            this.parasites = parasites;
            this.src = src;
        }

        render() {
            const element = document.createElement('div');
            element.classList.add('popup');
            element.innerHTML = `
          <div class="popup__overlay"></div>
          <div class="popup__container">
              <picture class="popup__img-container">
                  <source 
                      srcset="${this.src}@1x.webp 1x,
                              ${this.src}@2x.webp 2x" 
                              type="image/webp">
                  <img src="${this.src}@1x.jpg" 
                      srcset="${this.src}@2x.jpg 2x"
                      alt="${this.type}" 
                      class="popup__img"
                  >
              </picture>
              <div class="popup__text-container">
                  <h3 class="popup__text-name">${this.name}</h3>
                  <span class="popup__text-type">${this.type} - ${this.breed}</span>
                  <p class="popup__text-info">
                      ${this.description}
                  </p>
                  <ul class="popup__list">
                      <li class="popup__item">
                          <span class="popup__item-info">Age: </span>
                          <span class="popup__item-data">${this.age}</span>
                      </li>
                      <li class="popup__item">
                          <span class="popup__item-info">Inoculations: </span>
                          <span class="popup__item-data">${this.inoculations}</span>
                      </li>
                      <li class="popup__item">
                          <span class="popup__item-info">Diseases: </span>
                          <span class="popup__item-data">${this.diseases}</span>
                      </li>
                      <li class="popup__item">
                          <span class="popup__item-info">Parasites: </span>
                          <span class="popup__item-data">${this.parasites}</span>
                      </li>
                  </ul>
              </div>
              <button class="popup__btn" aria-label="Close">
                  <svg class="popup__btn-img">
                      <use xlink:href="assets/icons/sprite.svg#close"></use>
                  </svg>
              </button>
          </div>
          `
            document.querySelector('body').append(element);
        }
    }


    let focusedElementBeforeModal;
    const openModal = (popupOverlay, popupContainer) => {
        popupOverlay.classList.add("popup__overlay--visible");
        popupContainer.classList.add("popup__container--visible");
        document.querySelector('body').classList.add("lock");
        // Сохранение фокуса
        focusedElementBeforeModal = document.activeElement;




        // Находим все элементы для фокуса 
        let focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
        let focusableElements = popupContainer.querySelectorAll(focusableElementsString);

        focusableElements = Array.prototype.slice.call(focusableElements);

        let firstTabStop = focusableElements[0];
        let lastTabStop = focusableElements[focusableElements.length - 1];
        firstTabStop.focus();

        function trapTabKey(e) {
            // Check for TAB key press
            if (e.keyCode === 9) {

                // SHIFT + TAB
                if (e.shiftKey) {
                    if (document.activeElement === firstTabStop) {
                        e.preventDefault();
                        lastTabStop.focus();
                    }

                    // TAB
                } else {
                    if (document.activeElement === lastTabStop) {
                        e.preventDefault();
                        firstTabStop.focus();
                    }
                }
            }
        }

        popupContainer.addEventListener('keydown', trapTabKey);

    }


    const closeModal = (btnSelector, popupOverlay, popupContainer, popup) => {
        return btnSelector.addEventListener('click', () => {
            popupOverlay.classList.remove("popup__overlay--visible");
            popupContainer.classList.remove("popup__container--visible");
            document.querySelector('body').classList.remove("lock");

            popup.remove();
            focusedElementBeforeModal.focus();
        });
    };


    const paginationGenerate = (currentPage, totalPages, startIndex, pageSize, counter, prevBtn, startBtn, nextBtn, endBtn) => {

        counter.innerHTML = `${currentPage}`;
        startIndex = (currentPage - 1) * pageSize;


        document.querySelectorAll('.cards-item').forEach(item => item.remove());
        if (currentPage <= 1) {
            currentPage = 1;
            prevBtn.setAttribute("disabled", "disabled");
            startBtn.setAttribute("disabled", "disabled");
        } else {
            prevBtn.removeAttribute("disabled");
            startBtn.removeAttribute("disabled");
        }

        if (currentPage >= totalPages) {
            currentPage = totalPages;
            nextBtn.setAttribute("disabled", "disabled");
            endBtn.setAttribute("disabled", "disabled");
        } else {
            nextBtn.removeAttribute("disabled");
            endBtn.removeAttribute("disabled");
        }

        petsPagination.forEach(({
            src,
            type,
            name,
            id
        }, index) => {
            if (startIndex <= index && (index - startIndex) < pageSize) {
                new PetsCard(src, type, name, id, '.cards', ['cards-item', 'cards-item--active']).render();
            }
        });

    }

    function pagintation(pageSize, totalItems) {
        const startBtn = document.querySelector('.pets__pagination-btn--start');
        const prevBtn = document.querySelector('.pets__pagination-btn--prev');
        const nextBtn = document.querySelector('.pets__pagination-btn--next');
        const endBtn = document.querySelector('.pets__pagination-btn--end');
        const counter = document.querySelector('.pets__pagination-counter');
        let currentPage = 1;
        let totalPages = Math.ceil(totalItems / pageSize);

        let startIndex = (currentPage - 1) * pageSize;
        paginationGenerate(currentPage, totalPages, startIndex, pageSize, counter, prevBtn, startBtn, nextBtn, endBtn);

        nextBtn.addEventListener('click', () => {
            currentPage += 1;


            paginationGenerate(currentPage, totalPages, startIndex, pageSize, counter, prevBtn, startBtn, nextBtn, endBtn);

        });

        prevBtn.addEventListener('click', () => {
            currentPage -= 1;

            paginationGenerate(currentPage, totalPages, startIndex, pageSize, counter, prevBtn, startBtn, nextBtn, endBtn);

        });

        startBtn.addEventListener('click', () => {
            currentPage = 1;

            paginationGenerate(currentPage, totalPages, startIndex, pageSize, counter, prevBtn, startBtn, nextBtn, endBtn);

        });

        endBtn.addEventListener('click', () => {
            currentPage = totalPages;

            paginationGenerate(currentPage, totalPages, startIndex, pageSize, counter, prevBtn, startBtn, nextBtn, endBtn);

        });


    }

    const desktopWidt = window.matchMedia('(min-width: 1280px)');
    const tabletWidth = window.matchMedia('(min-width: 767px)');
    const mobileWidth = window.matchMedia('(min-width: 320px)');






    function handleMobileChange(width) {
        if (width.matches) {
            pagintation(3, petsPagination.length);
        }
    }
    mobileWidth.addListener(handleMobileChange)
    handleMobileChange(mobileWidth);

    function handleTabletChange(width) {
        if (width.matches) {
            pagintation(6, petsPagination.length);
        }
    }
    tabletWidth.addListener(handleTabletChange)
    handleTabletChange(tabletWidth);

    function handleDesktopChange(width) {
        if (width.matches) {
            pagintation(8, petsPagination.length);
        }
    }
    desktopWidt.addListener(handleDesktopChange)
    handleDesktopChange(desktopWidt);

    const cards = document.querySelector('.cards');


    cards.addEventListener('click', (e) => {

        if (e.target.classList.contains('card') || e.target.classList.contains('card__img') || e.target.classList.contains('card__name') || e.target.classList.contains('btn--other')) {
            const id = e.target.getAttribute('data-index');

            new popupCard(petsPagination[id].name, petsPagination[id].type, petsPagination[id].breed, petsPagination[id].description, petsPagination[id].age, petsPagination[id].inoculations, petsPagination[id].diseases, petsPagination[id].parasites, petsPagination[id].src).render();

            let popupOverlay = document.querySelector('.popup__overlay');
            let headerOverlay = document.querySelector('.header-pets-overlay');
            let popupContainer = document.querySelector('.popup__container');
            let popupBtn = document.querySelector('.popup__btn');
            let popup = document.querySelector('.popup');

            openModal(popupOverlay, popupContainer, headerOverlay);


            closeModal(popupBtn, popupOverlay, popupContainer, popup);
            closeModal(popupOverlay, popupOverlay, popupContainer, popup);
          
        }


    })

    
}, false);