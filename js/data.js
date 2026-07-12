let products = {
    data: [
        {
            id: "coptic",
            artifactName: "Galaktotrophousa",
            museum: "Coptic Museum",
            image: "../assets/images/coptic museum/1.jpg",
            material: "Wall Painting",
            Period: "Coptic Period",
            type: "Icons",
            link: "https://egymonuments.gov.eg/en/collections/niche-of-virgin-mary-11"
        },
        {
            id: "coptic",
            artifactName: "Psalter",
            museum: "Coptic Museum",
            image: "../assets/images/coptic museum/dsc_0040.jpg",
            material: "Manuscript",
            Period: "Coptic Period",
            type: "Manuscripts",
            link: "http://egymonuments.gov.eg/en/collections/psalter-11"
        },
        {
            id: "coptic",
            artifactName: "Holy Family’s flight into Egypt",
            museum: "Coptic Museum",
            image: "../assets/images/coptic museum/dsc.jpg",
            material: "Tempera on wood",
            Period: "Coptic Period",
            type: "Icons",
            link: "https://egymonuments.gov.eg/en/collections/icon-of-the-holy-family-s-flight-into-egypt-11"
        },
        {
            id: "coptic",
            artifactName: "Saint Anthony and Saint Paul the Hermit",
            museum: "Coptic Museum",
            image: "../assets/images/coptic museum/g75a3519.jpg",
            material: "Tempera on wood",
            Period: "Coptic Period",
            type: "Icons",
            link: "https://egymonuments.gov.eg/en/collections/icon-of-saint-antony-and-saint-paul-11"
        },
        {
            id: "coptic",
            artifactName: "Jesus’s entry into Jerusalem",
            museum: "Coptic Museum",
            image: "../assets/images/coptic museum/page69-1003-full.jpg",
            material: "Carved wood",
            Period: "Coptic Period",
            type: "Icons",
            link: "https://egymonuments.gov.eg/en/collections/lintel-depicting-jesus-christ-s-entry-into-jerusalem-11"
        },
        {
            id: "coptic",
            artifactName: "St. Jeremiah’s Pulpit",
            museum: "Coptic Museum",
            image: "../assets/images/coptic museum/القبطي-7.jpg",
            material: "stone",
            Period: "Coptic Period",
            type: "Artifacts",
            link: ""
        },
        {
            id: "coptic",
            artifactName: "Three monumental keys of Monasteries",
            museum: "Coptic Museum",
            image: "../assets/images/coptic museum/القبطي-9.jpg",
            material: "Iron, Bronze and Copper",
            Period: "Coptic Period",
            type: "Artifacts",
            link: "https://egymonuments.gov.eg/en/collections/three-monumental-keys-of-monasteries-11"
        },
        {
            id: "coptic",
            artifactName: "The Piper's Curtain",
            museum: "Coptic Museum",
            image: "../assets/images/coptic museum/القبطي-20.jpg",
            material: "Textile",
            Period: "Coptic Period",
            type: "Artifacts",
            link: "https://egymonuments.gov.eg/en/collections/pipers-curtain-11"
        },
        {
            id: "egyptian",
            artifactName: "Tondo of the Two Brothers",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/21-1.jpg",
            material: "wood",
            Period: "Roman Period",
            type: "Icons",
            link: "https://egyptianmuseumcairo.eg/artefacts/portrait-of-two-brothers/"
        },
        {
            id: "egyptian",
            artifactName: "Statue of Osiris",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/25-1.jpg",
            material: "Schist",
            Period: "Late Period",
            type: "Statues",
            link: "https://egyptianmuseumcairo.eg/artefacts/statuette-of-osiris/"
        },
        {
            id: "egyptian",
            artifactName: "Buchis Stela of Ptolemy V",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/31-1.jpg",
            material: "Stone mural",
            Period: "Ptolemaic Period",
            type: "Artifacts",
            link: "https://egyptianmuseumcairo.eg/artefacts/stela-of-buchis-bull/"
        },
        {
            id: "egyptian",
            artifactName: "Mosaic with Medusa",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/32-1-1024x682.jpg",
            material: "Mosaic",
            Period: "Roman Period",
            type: "Artifacts",
            link: "https://egyptianmuseumcairo.eg/artefacts/mosaic-with-medusa/"
        },
        {
            id: "egyptian",
            artifactName: "Ramesses II as a child with hauron",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/32h.png",
            material: "Greywacke",
            Period: "New Kingdom",
            type: "Statues",
            link: "https://egyptianmuseumcairo.eg/artefacts/statue-of-ramesses-ii-as-a-child-and-the-god-horun/"
        },
        {
            id: "egyptian",
            artifactName: "Head of a Gaul",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/34-1.jpg",
            material: "Marble",
            Period: "Ptolemaic Period",
            type: "Statues",
            link: "https://egyptianmuseumcairo.eg/artefacts/head-of-a-galatian/"
        },
        {
            id: "egyptian",
            artifactName: "Canopus Decree of Ptolemy III",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/35-1.jpg",
            material: "Greywacke",
            Period: "Ptolemaic Period",
            type: "Artifacts",
            link: "https://egyptianmuseumcairo.eg/artefacts/stela-with-canope-decree/"
        },
        {
            id: "egyptian",
            artifactName: "Tetisheri Stela",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/40-1.jpg",
            material: "Limestone",
            Period: "New Kingdom",
            type: "Artifacts",
            link: "https://egyptianmuseumcairo.eg/artefacts/stela-of-the-king-ahmose/"
        },
        {
            id: "egyptian",
            artifactName: "Ramses III between Horus and Seth",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/43-1.jpg",
            material: "Granite",
            Period: "New Kingdom",
            type: "Statues",
            link: "https://egyptianmuseumcairo.eg/artefacts/statue-of-ramses-iii-between-horus-and-seth/"
        },
        {
            id: "egyptian",
            artifactName: "Relief of Akhenaten",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/49-1-1024x1024.jpg",
            material: "Limestone",
            Period: "New Kingdom",
            type: "Artifacts",
            link: "https://egyptianmuseumcairo.eg/artefacts/limestone-relief-of-akhenaten/"
        },
        {
            id: "egyptian",
            artifactName: "Seated Statue of Sennefer",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/54.jpg",
            material: "Greywacke",
            Period: "New Kingdom",
            type: "Statues",
            link: "https://egyptianmuseumcairo.eg/artefacts/seated-statue-of-sennefer/"
        },
        {
            id: "egyptian",
            artifactName: "Statue of Hor",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/64.jpg",
            material: "Greywacke",
            Period: "Middle Kingdom",
            type: "Statues",
            link: "https://egyptianmuseumcairo.eg/artefacts/statue-of-hor-son-of-ankh-khonsu/"
        },
        {
            id: "egyptian",
            artifactName: "priest of god Amun Djedhor",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/67-819x1024.jpg",
            material: "Greywacke",
            Period: "Late Period",
            type: "Statues",
            link: "https://egyptianmuseumcairo.eg/artefacts/statue-of-the-priest-of-god-amun-called-djedhor/"
        },
        {
            id: "egyptian",
            artifactName: "Funerary Mask of Tuya",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/84.jpg",
            material: "Cartonnage",
            Period: "New Kingdom",
            type: "Artifacts",
            link: "https://egyptianmuseumcairo.eg/artefacts/funerary-mask-of-tuya/"
        },
        {
            id: "egyptian",
            artifactName: "Akhenaten, Amonhotep IV",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/99-819x1024.jpg",
            material: "Sandstone",
            Period: "New Kingdom",
            type: "Statues",
            link: "https://egyptianmuseumcairo.eg/artefacts/bust-of-akhenaten-amonhotep-iv/"
        },
        {
            id: "egyptian",
            artifactName: "Menkaure Triad",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/egyptian_triad.png",
            material: "Greywacke",
            Period: "Old Kingdom",
            type: "Statues",
            link: "https://egyptianmuseumcairo.eg/artefacts/menkaure-triad/"
        },
        {
            id: "gem",
            artifactName: "Guardian Statue of Tutankhamun",
            museum: "Grand Egyptian Museum",
            image: "../assets/images/egy museum/ka-tutankhamun-guard-statue.jpg",
            material: "Wood",
            Period: "New Kingdom",
            type: "Statues",
            link: "https://gem.eg/en/collection/artefacts/guardian-statue-with-nemes-headcloth"
        },
        {
            id: "gem",
            artifactName: "Mask of Tutankhamun",
            museum: "Grand Egyptian Museum",
            image: "../assets/images/egy museum/Tutankhamon-mask.png",
            material: "Gold",
            Period: "New Kingdom",
            type: "Artifacts",
            link: "https://gem.eg/en/collection/artefacts/the-golden-burial-mask-of-tutankhamun"
        },
        {
            id: "egyptian",
            artifactName: "Yuya and Tuya papyrus",
            museum: "Egyptian Museum",
            image: "../assets/images/egy museum/Yuya-and-Thuya-papyrus-emc-1024x851.jpg",
            material: "Papyrus",
            Period: "New Kingdom",
            type: "Manuscripts",
            link: "https://egyptianmuseumcairo.eg/artefacts/yuya-and-tuya-papyrus/"
        },
        {
            id: "gem",
            artifactName: "Statue of Senwosert I",
            museum: "Grand Egyptian Museum",
            image: "../assets/images/grand egy museum/1689_1grand.jpeg",
            material: "Limestone",
            Period: "Middle Kingdom",
            type: "Statues",
            link: "https://gem.eg/en/collection/artefacts/seated-statue-of-senwosert-i"
        },
        {
            id: "gem",
            artifactName: "God Ptah,King RamessesII & Goddess Sekhmet",
            museum: "Grand Egyptian Museum",
            image: "../assets/images/grand egy museum/45815.jpeg",
            material: "Granite",
            Period: "New Kingdom",
            type: "Statues",
            link: "https://gem.eg/en/collection/artefacts/statue-of-god-ptah-king-ramesses-ii-and-sekhmet"
        },
        {
            id: "gem",
            artifactName: "Isis and Horus",
            museum: "Grand Egyptian Museum",
            image: "../assets/images/grand egy museum/5132.jpeg",
            material: "Sandstone",
            Period: "Late Period",
            type: "Statues",
            link: "https://gem.eg/en/collection/artefacts/isis-and-horus"
        },
        {
            id: "gem",
            artifactName: "Canopic Coffinette",
            museum: "Grand Egyptian Museum",
            image: "../assets/images/grand egy museum/canopic-coffinette.jpeg",
            material: "Gold",
            Period: "New Kingdom",
            type: "Artifacts",
            link: "https://gem.eg/en/collection/artefacts/canopic-coffinette"
        },
        {
            id: "gem",
            artifactName: "Statue of Thutmose IV",
            museum: "Grand Egyptian Museum",
            image: "../assets/images/grand egy museum/gem3799-1.jpeg",
            material: "Granite",
            Period: "New Kingdom",
            type: "Statues",
            link: "https://gem.eg/en/collection/artefacts/upper-part-of-a-statue-of-thutmose-iv"
        },
        {
            id: "gem",
            artifactName: "Ptolemaic King and Queen",
            museum: "Grand Egyptian Museum",
            image: "../assets/images/grand egy museum/grand-hall.jpeg",
            material: "Granite",
            Period: "Ptolemaic Period",
            type: "Statues",
            link: "https://gem.eg/en/collection/artefacts/colossus-of-a-ptolemaic-queen"
        },
        {
            id: "gem",
            artifactName: "Ptolemaic King",
            museum: "Grand Egyptian Museum",
            image: "../assets/images/grand egy museum/king.jpeg",
            material: "Granite",
            Period: "Ptolemaic Period",
            type: "Statues",
            link: "https://gem.eg/en/collection/artefacts/colossus-of-a-ptolemaic-king-1"
        },
        {
            id: "islamic",
            artifactName: "Brooch",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_01fcf36fa88db82d1741109361de66b4.jpg",
            material: "Gold",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/jewelry?product=brooch"
        },
        {
            id: "islamic",
            artifactName: "Panel",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_2365378f8c2302a0dadb7f160eb3a141.jpg",
            material: "Carved wood",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/wood?product=panel"
        },
        {
            id: "islamic",
            artifactName: "Carved ivory box",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_272a9cf87c67f77278f9e290158bb148.jpg",
            material: "Ivory",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/ivory?product=cylindrical-boxe"
        },
        {
            id: "islamic",
            artifactName: "Holy quran",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_2bc90c5684b68af1b4b472e73dbb6105.jpg",
            material: "Paper",
            Period: "Islamic Period",
            type: "Manuscripts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/manuscript?product=holyquran"
        },
        {
            id: "islamic",
            artifactName: "Marble Jar and Kilga",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_3b92780b894227daad33468322e050c4.jpg",
            material: "Limestone",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/stone?product=marble-jar"
        },
        {
            id: "islamic",
            artifactName: "Shield",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_3fb7a17bfed491f1a57e4de489c6a2fe.jpg",
            material: "Steel",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/weapon?product=shield"
        },
        {
            id: "islamic",
            artifactName: "Kohl Container",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_41acd447f199715a054f3dcee4cfbcca.jpg",
            material: "Ivory",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/ivory?product=kohl-containe"
        },
        {
            id: "islamic",
            artifactName: "Balcony",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_57fce086ce9de4941a19069077fccdac.jpg",
            material: "Wood",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/wood?product=balcony"
        },
        {
            id: "islamic",
            artifactName: "Hilya",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_5b3e6e86c4fa053c1a0a4919edc2c2aa.jpg",
            material: "Paper",
            Period: "Islamic Period",
            type: "Manuscripts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/manuscript?product=hilya"
        },
        {
            id: "islamic",
            artifactName: "Dinar",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_600554ca970ab847202d3172b74cc327.jpg",
            material: "Gold",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/coin?product=dinar3"
        },
        {
            id: "islamic",
            artifactName: "Helmet",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_65ec5cec3ab63bba7d07da6161a565af.jpg",
            material: "Steel",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/weapon?product=helmet"
        },
        {
            id: "islamic",
            artifactName: "Gold ring",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_6a807e29fdfc1646e998a5741898ae51.jpg",
            material: "Gold",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/jewelry?product=gold-ring"
        },
        {
            id: "islamic",
            artifactName: "Shard",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_7044d4e92c9a6e235647fed73dfd155e.jpg",
            material: "Fritware",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/ceramic?product=shard2"
        },
        {
            id: "islamic",
            artifactName: "Table",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_7fc45dba83f250dac475499b89f9f27c.jpg",
            material: "Copper Alloy",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/metalwork?product=table"
        },
        {
            id: "islamic",
            artifactName: "Goblet",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_8560b6eb144825f05bc04482093d1821.jpg",
            material: "Glass",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/glass?product=goblet"
        },
        {
            id: "islamic",
            artifactName: "Lantern",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_ac7381aa9dde8629b170bdc15c3b8dba.jpg",
            material: "Copper Alloy",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/metalwork?product=lantern"
        },
        {
            id: "islamic",
            artifactName: "Mosque lamp",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_c9cd95d54c203d9c81be15f61b22b6cc.jpg",
            material: "Glass",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/glass?product=mosque-lamp1"
        },
        {
            id: "islamic",
            artifactName: "Tile",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_d8d07ad22dcc16674a79946bed8f571d.jpg",
            material: "Fritware",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/ceramic?product=tile"
        },
        {
            id: "islamic",
            artifactName: "Tombstone",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_da53da1f3dae66f0e20fafeda452798f.jpg",
            material: "Limestone",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/stone?product=tombstone"
        },
        {
            id: "islamic",
            artifactName: "Kiswah",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_de3c0cf916d4034c3da772dc724c5660.jpg",
            material: "Textile",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/textil?product=textile1"
        },
        {
            id: "islamic",
            artifactName: "Carpet",
            museum: "Islamic Art Museum",
            image: "../assets/images/islamic art/Upload_Product_Entity_Db_Product_MainImage_fd64eb232edf3d85acafb8d2811a8c93.jpg",
            material: "Textile",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://www.miaegypt.org/en-us/museum/collection/gallery-item-details/textil?product=carpet"
        },
        {
            id: "nmec",
            artifactName: "The coffin of Sennedjem",
            museum: "NMEC",
            image: "../assets/images/nmec/2023-02-03-05.24-scaled.jpg",
            material: "Wood",
            Period: "New Kingdom",
            type: "Statues",
            link: "https://nmec.gov.eg/main-gallery/#:~:text=his%20tomb%20in%20Deir%20Al%20Madina.%20The%20inner%20coffin%20of"
        },
        {
            id: "nmec",
            artifactName: "Queen Ahmose Nefertari coffin",
            museum: "NMEC",
            image: "../assets/images/nmec/Ahmus-nerftari-2048x1678.jpg",
            material: "Wood",
            Period: "New Kingdom",
            type: "Statues",
            link: "https://nmec.gov.eg/mummies-gallery/#:~:text=The%20Outer%20Coffin%20of%20Queen%20Ahmose%20Nefertari"
        },
        {
            id: "nmec",
            artifactName: "Al Falaha",
            museum: "NMEC",
            image: "../assets/images/nmec/Al-Falaha-scaled.jpg",
            material: "White marble",
            Period: "Modern Period",
            type: "Statues",
            link: "https://nmec.gov.eg/main-gallery/#:~:text=Al%20Falaha%20Statue%20by%20Mahmoud%20Mokhtar"
        },
        {
            id: "nmec",
            artifactName: "Kaaba Kiswa",
            museum: "NMEC",
            image: "../assets/images/nmec/Bab-Al-Tawba-scaled.jpg",
            material: "Textile",
            Period: "Islamic Period",
            type: "Artifacts",
            link: "https://nmec.gov.eg/textile-gallery/#:~:text=This%20specific%20piece%20has%20graced%20the%20Baab%20El"
        },
        {
            id: "nmec",
            artifactName: "Bawit Virgin",
            museum: "NMEC",
            image: "../assets/images/nmec/Dome-2048x1459.jpg",
            material: "Limestone",
            Period: "Coptic Period",
            type: "Statues",
            link: "https://nmec.gov.eg/main-gallery/#:~:text=Coptic%20artifacts%20resides,%20serves%20as%20an"
        },
        {
            id: "nmec",
            artifactName: "Ekhnaton Statue",
            museum: "NMEC",
            image: "../assets/images/nmec/image00004.jpg",
            material: "Sandstone",
            Period: "New Kingdom",
            type: "Statues",
            link: "https://nmec.gov.eg/main-gallery/#:~:text=to%20around%201300%20BC"
        },
        {
            id: "nmec",
            artifactName: "Uniforms",
            museum: "NMEC",
            image: "../assets/images/nmec/image00008.jpg",
            material: "Textile",
            Period: "Modern Period",
            type: "Artifacts",
            link: "https://nmec.gov.eg/textile-gallery/#:~:text=formal%20processions"
        },
        {
            id: "nmec",
            artifactName: "coffin of King Thutmose",
            museum: "NMEC",
            image: "../assets/images/nmec/image00015.jpg",
            material: "Wood",
            Period: "New Kingdom",
            type: "Statues",
            link: "https://nmec.gov.eg/mummies-gallery/#:~:text=golden%20decorations"
        },
        {
            id: "nmec",
            artifactName: "Mahmal King Farouk",
            museum: "NMEC",
            image: "../assets/images/nmec/Mahmal-scaled.jpg",
            material: "Textile & Wood",
            Period: "Modern Period",
            type: "Artifacts",
            link: "https://nmec.gov.eg/main-gallery/#:~:text=Egypt%20to%20Saudi%20Arabia"
        }
    ]
};

const sounds = {
    "pyramid": new Audio("../assets/audios/pyramid.MP3"),
    "siwa": new Audio("../assets/audios/siwa.MP3"),
    "baharya": new Audio("../assets/audios/bahariya.MP3"),
    "farafra": new Audio("../assets/audios/farafra.MP3"),
    "dakhla": new Audio("../assets/audios/dakhla.MP3"),
    "kharga": new Audio("../assets/audios/kharga.MP3"),
    "simbel": new Audio("../assets/audios/abu-simbel.MP3"),
    "karnak": new Audio("../assets/audios/karnak.MP3"),
    "gem": new Audio("../assets/audios/gem.mp3"),
    "egyptian": new Audio("../assets/audios/egyptian.mp3"),
    "coptic": new Audio("../assets/audios/coptic.mp3"),
    "islamic": new Audio("../assets/audios/islamic.mp3"),
    "nmec": new Audio("../assets/audios/nmec.mp3"),
};

const locations = [
    { id: "pyramid", name: "The Great Pyramid", coords: [31.13414197593711, 29.98025663072421] },
    { id: "gem", name: "Grand Egyptian Museum", coords: [31.124382973158742, 29.993557602550066] },
    { id: "coptic", name: "Coptic Museum", coords: [31.23036500923982, 30.0062] },
    { id: "egyptian", name: "The Egyptian Museum", coords: [31.252769526434466, 30.00592242019631] },
    { id: "islamic", name: "The Islamic Arts Museum", coords: [31.2519, 30.044741372972027] },
    { id: "nmec", name: "NMEC", coords: [31.24820710923998, 30.008676490664424] },
    { id: "siwa", name: "Siwa Oasis", coords: [25.51911200952857, 29.204308794881353] },
    { id: "dakhla", name: "Dakhla Oasis", coords: [29.1257595075955, 25.51894913850731] },
    { id: "kharga", name: "Kharga Oasis", coords: [30.558125463654797, 25.4392918457923] },
    { id: "karnak", name: "El Karnak", coords: [32.65767799133573, 25.718940903083553] },
    { id: "simbel", name: "Abu Simbel", coords: [31.625959927998306, 22.337410507506604] },
    { id: "baharya", name: "Baharya Oasis", coords: [28.90835030357991, 28.384786560697552] },
    { id: "farafra", name: "Farafra Oasis", coords: [27.97074807480394, 27.056803926113123] }
];

const monumentsData = {
    "pyramid": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza" coords="40,309,250,54,503,308" shape="poly">`,
        stats: [
            { label: "ERA", value: "Old Kingdom" },
            { label: "HEIGHT", value: "146.6m" },
            { label: "PHARAOH", value: "khufu" },
            { label: "STATE", value: "Preserved" }
        ],
        desc: "The oldest and largest of the three pyramids in the Giza pyramid complex, this architectural marvel remained the tallest man-made structure in the world for over 3,800 years.",
        link: "https://maps.app.goo.gl/2xesTcCxsQEgV5Sw7"
    },
    "siwa": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Siwa_Oasis" coords="1,133,80,163,106,230,130,259,190,223,220,273,360,281,365,255,403,292,514,300,528,272,559,309,615,297,676,305,749,336,798,406,857,420,860,399,878,399,886,422,1046,450,1083,445,1083,451,1099,449,1097,436,1116,428,1118,441,1277,411,1278,692,424,716,487,852,-1,848" shape="poly">`,
        stats: [
            { label: "LOCATION", value: "Western Desert" },
            { label: "FAMOUS FOR", value: "Temple of Oracle" },
            { label: "FOUNDED", value: "26th Period" },
            { label: "STATE", value: "UNESCO Heritage" }
        ],
        desc: "One of Egypt's most isolated settlements, Siwa is a natural paradise famous for its unique Berber culture and the historic Shali Fortress, where the Oracle of Amun once stood."
        , link: "https://maps.app.goo.gl/cSTQKADsUBmvcRK46"
    },
    "baharya": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Bahariya_Oasis" coords="-1,178,121,177,102,136,166,123,174,135,198,100,222,126,204,158,222,184,671,180,674,389,1,388" shape="poly">`,
        stats: [
            { label: "LOCATION", value: "Western Desert" },
            { label: "FAMOUS FOR", value: "Golden Mummies" },
            { label: "FOUNDED", value: "Middle Kingdom" },
            { label: "STATE", value: "Archeological Site" }
        ],
        desc: "Known as the \"Northern Oasis,\" Bahariya is a lush depression surrounded by black hills. It gained worldwide fame with the discovery of the Valley of the Golden Mummies and serves as the main gateway to the stunning Black and White Deserts."
        , link: "https://maps.app.goo.gl/pDDdVhqSwocngyGz7"
    },
    "farafra": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Farafra,_Egypt" coords="46,248,57,214,54,141,62,131,62,54,122,27,126,9,147,7,148,20,182,31,202,23,223,33,236,52,250,72,259,89,252,123,222,157,213,191,222,220,262,247,516,375,502,389,2,389,-1,272" shape="poly">`,
        stats: [
            { label: "LOCATION", value: "Western Desert" },
            { label: "FAMOUS FOR", value: "White Desert" },
            { label: "FOUNDED", value: "Old Kingdom" },
            { label: "STATE", value: "Natural Protectorate" }
        ],
        desc: "A tranquil oasis known for its traditional mud-brick architecture, Farafra is the closest point to the world-renowned White Desert National Park, famous for its surreal chalk-white rock formations shaped by centuries of wind erosion."
        , link: "https://maps.app.goo.gl/Wj4BbApFMfXwsPhF9"
    },
    "dakhla": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Dakhla_Oasis" coords="-1,100,673,390" shape="rect">`,
        stats: [
            { label: "LOCATION", value: "New Valley" },
            { label: "FAMOUS FOR", value: "Al-Qasr Village" },
            { label: "FOUNDED", value: "Pharaonic Times" },
            { label: "STATE", value: "Archeological Site" }
        ],
        desc: "Considered one of the most beautiful oases in Egypt, Dakhla is home to the stunning medieval Islamic village of Al-Qasr. It has been continuously inhabited since prehistoric times and features remarkable Roman temples and mud-brick fortresses."
        , link: "https://maps.app.goo.gl/Wz2QTveFzcTcbxYn6"
    },
    "kharga": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Kharga_Oasis" coords="1,412,208,404,217,255,206,237,209,226,214,220,217,187,208,180,398,111,617,201,617,242,735,224,934,323,936,377,960,373,960,514,548,542,111,494,0,505" shape="poly">`,
        stats: [
            { label: "LOCATION", value: "New Valley" },
            { label: "FAMOUS FOR", value: "Temple of Hibis" },
            { label: "FOUNDED", value: "Middle Kingdom" },
            { label: "STATE", value: "Archeological Site" }
        ],
        desc: "The capital of the New Valley, Kharga was a vital stop on the ancient \"Forty Days Road\" trade route. It is home to the Temple of Hibis, the best-preserved Persian-era temple in Egypt, and the Necropolis of Al-Bagawat, one of the world's oldest Christian cemeteries."
        , link: "https://maps.app.goo.gl/n1v4a3ZHezJzmiFX8"
    },
    "simbel": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Abu_Simbel" coords="-1,242,0,157,59,117,74,92,293,75,318,40,335,34,365,11,404,0,499,1,499,244,188,225,51,232" shape="poly">`,
        stats: [
            { label: "LOCATION", value: "Aswan" },
            { label: "FAMOUS FOR", value: "Solar Alignment" },
            { label: "FOUNDED", value: "19th Period" },
            { label: "STATE", value: "UNESCO Heritage" }
        ],
        desc: "Built by Ramses II, these massive rock-cut temples are a marvel of ancient engineering, famous for the solar alignment phenomenon and their miraculous relocation by UNESCO."
        , link: "https://maps.app.goo.gl/3zCiUAf3ABj6s1ns8"
    },
    "karnak": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Karnak" coords="-1,272,107,268,110,250,135,242,144,241,144,218,157,153,190,149,192,133,214,125,214,116,224,114,238,104,301,94,300,81,361,73,374,86,422,80,447,90,448,101,479,108,490,143,514,137,514,117,524,118,522,92,539,90,543,49,576,44,581,30,605,36,617,19,635,18,674,10,673,390,0,390" shape="poly">`,
        stats: [
            { label: "LOCATION", value: "Luxor" },
            { label: "FAMOUS FOR", value: "Great Hypostyle Hall" },
            { label: "FOUNDED", value: "Middle Kingdom" },
            { label: "STATE", value: "UNESCO Heritage" }
        ],
        desc: "The largest religious complex ever built, Karnak is a vast open-air museum featuring the magnificent Great Hypostyle Hall and its 134 massive sandstone columns."
        , link: "https://maps.app.goo.gl/yqdBQKYaeS1v62v68"
    },
    "gem": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Grand_Egyptian_Museum" coords="157,-1,431,418,468,457,894,512,894,868,1,867,0,-1" shape="poly">`,
        stats: [
            { label: "LOCATION", value: "Giza Plateau" },
            { label: "FAMOUS FOR", value: "Tutankhamun Collection" },
            { label: "FOUNDED", value: "2024" },
            { label: "STATE", value: "World's Largest" }
        ],
        desc: "The world's largest archaeological museum dedicated to a single civilization. Located on the Giza plateau, it houses over 100,000 artifacts including the complete Tutankhamun collection."
        , link: "https://maps.app.goo.gl/e91d9EaAaVeULaFH6"
    },
    "coptic": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Coptic_Museum" coords="1,219,91,218,92,209,110,211,110,195,104,186,106,143,115,151,126,154,131,144,137,149,134,154,141,154,148,153,156,145,168,155,182,145,195,154,207,145,219,155,233,143,242,152,252,140,259,128,267,121,274,117,282,112,289,109,299,105,306,95,314,96,316,105,331,109,339,114,346,119,354,125,358,130,362,134,367,141,371,147,377,152,382,144,396,154,408,143,422,153,432,144,447,153,456,143,471,153,483,143,497,153,509,142,513,181,504,194,506,210,524,210,524,218,696,217,698,183,709,182,715,169,709,182,736,159,736,662,645,660,599,658,384,655,380,661,340,660,325,656,171,657,146,659,125,658,84,661,60,662,-1,664" shape="poly">`,
        stats: [
            { label: "LOCATION", value: "Coptic Cairo" },
            { label: "FAMOUS FOR", value: "Nag Hammadi Library" },
            { label: "FOUNDED", value: "1910" },
            { label: "STATE", value: "Largest Coptic Collection" }
        ],
        desc: "Located within the fortress of Babylon in Old Cairo, this museum holds the largest collection of Egyptian Christian artifacts in the world, beautifully showcasing the fusion of Pharaonic, Graeco-Roman, and Islamic art."
        , link: "https://maps.app.goo.gl/CdHb3vsbxuZbx6917"
    },
    "egyptian": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Egyptian_Museum" coords="41,248,40,229,44,224,49,220,48,174,44,168,48,162,46,131,40,124,46,122,47,115,74,111,110,104,102,81,113,68,115,59,120,57,127,63,126,69,161,67,162,59,235,50,280,60,280,68,314,74,317,66,322,63,328,66,332,76,393,83,402,69,414,56,425,47,441,38,461,33,482,33,499,37,516,45,526,52,536,60,547,74,551,84,736,58,735,490,658,490" shape="poly">`,
        stats: [
            { label: "LOCATION", value: "Tahrir Square" },
            { label: "FAMOUS FOR", value: "Yuya and Thuya Treasure" },
            { label: "FOUNDED", value: "1902" },
            { label: "STATE", value: "Historic Monument" }
        ],
        desc: "The historic neoclassic palace in Tahrir Square houses the world's oldest and most extensive collection of pharaonic antiquities, serving as the quintessential guardian of ancient Egyptian history for over a century."
        , link: "https://maps.app.goo.gl/km6qGvHjB4eg1wBK7"
    },
    "islamic": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Museum_of_Islamic_Art,_Cairo" coords="939,2,1675,459,2050,179,2700,740,2709,807,2690,825,2733,1142,3181,1425,3191,1473,3178,1489,3282,2058,0,2123,-3,1" shape="poly">`,
        stats: [
            { label: "LOCATION", value: "Bab Al-Khalq" },
            { label: "FAMOUS FOR", value: "Rare Quran Manuscripts" },
            { label: "FOUNDED", value: "1903" },
            { label: "STATE", value: "World-Renowned" }
        ],
        desc: "Considered one of the greatest in the world, this museum displays an exceptional collection of rare Islamic artifacts, woodwork, plaster, ceramics, glass, and textiles from all periods of the Islamic world."
        , link: "https://maps.app.goo.gl/XndfxfFd5ofTUWrb6"
    },
    "nmec": {
        areaTag: `<area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/National_Museum_of_Egyptian_Civilization" coords="0,475,91,460,189,466,191,441,215,437,214,420,223,420,226,436,273,428,274,325,300,319,316,321,467,181,614,314,659,316,662,463,754,453,759,432,766,432,772,452,943,466,947,447,955,447,959,466,974,468,974,487,984,489,984,521,1119,507,1119,823,912,820,912,803,897,801,886,796,836,744,789,742,733,795,728,800,710,801,710,815,661,810,640,773,619,764,577,763,576,809,297,800,-1,783" shape="poly">`,
        stats: [
            { label: "LOCATION", value: "Al-Fustat" },
            { label: "FAMOUS FOR", value: "The Royal Mummies Hall" },
            { label: "FOUNDED", value: "2021 (Official)" },
            { label: "STATE", value: "Modern Comprehensive" }
        ],
        desc: "The first museum in the Arab world focusing on the entirety of Egyptian civilization from prehistoric times to the modern day, famously housing the majestic Royal Mummies in a specially designed subterranean hall."
        , link: "https://maps.app.goo.gl/ZL35CCMiwLqahrEs8"
    }
};

// map.on('click', (e) => { const features = map.queryRenderedFeatures(e.point); if (features.length > 0) { console.log("اسم الطبقة المسؤولية:", features[0].layer.id); console.log("الـ source-layer بتاعها:", features[0].layer['source-layer']); } });