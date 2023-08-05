AFRAME.registerComponent("info-banner", {
     schema: {
          itemId: { type: "string", default: "" }
     },
     update: function () {
         this.createBanner() 
        
     },
     createBanner: function () {
          const postercard = {
               superman: {
                    banner_url: "./assests/image1.jpg",
                    title: "Superman",
                    released_year: "1983",
                    description:
                         "Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939.",
               },
               spiderman: {
                    banner_url: "./assests/image2.jfif",
                    title: "Spiderman",
                    released_year: "1962",
                    description:
                         "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
               },
               "captain-aero": {
                    banner_url: "./assests/image2.jpg",
                    title: "Captain Aero",
                    released_year: "1942",
                    description:
                         "Captain Aero Comics is a comic book from the Golden Age of Comics, originally published by Helnit Publishing and acquired by Holyoke Publishing in 1942. Issue was published in December 1941, and it ran through issue (August 1946).",
               },
               "outer-space": {
                    banner_url: "./assests/image3.jpg",
                    title: "Outer Space",
                    released_year: "1952",
                    description:
                         "This is the most vital subject of our times! Every American Man... and Woman... Child... owes it to his country and himself, to read this issue!!",
               },
          }

          const { itemId } = this.data
          const fadebgel = document.querySelector("#fadeBackground")
          const entel = document.createElement("a-entity")
          entel.setAttribute("visible", true)
          entel.setAttribute("material", {
               color: "black",
               opacity: 2
          })
          entel.setAttribute("position", { x: 0, y: 0.1, z: -1 })
          entel.setAttribute("geometry",{
               primitive: "plane",
               width: 0.9,
               height: 1
          })
          entel.setAttribute("id", `${itemId}-banner`);
          const item = postercard[itemId];
          const ImageEl=this.createImageEl(item)
          const TitleEl=this.createTitleEl(item)
          const descriptionEl=this.createDescriptionEl(item)
                     
          entel.appendChild(ImageEl)
          entel.appendChild(TitleEl)
          entel.appendChild(descriptionEl)
          fadebgel.appendChild(entel)

     },
     createImageEl: function (item) {
        const entel = document.createElement("a-entity")
          entel.setAttribute("visible", true)
          entel.setAttribute("material", {
              src:item.banner_url
          })
          entel.setAttribute("position", { x: 0, y: 0.3, z: 0.05 })
          entel.setAttribute("geometry",{
               primitive: "plane",
               width: 0.85,
               height: 0.5
          })
          return entel

     },

     createTitleEl: function (item) {
        const entel = document.createElement("a-entity")
          entel.setAttribute("visible", true)
          entel.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05  })
           entel.setAttribute("text",{
               shader: "msdf",
               anchor: "left",
               font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
               width: 1.2,
               height: 2,
               color: "#fff",
               value:`${item.title} (${item.released_year})`
           })
          return entel
     },
     createDescriptionEl: function (item) {

        const entel = document.createElement("a-entity")
          entel.setAttribute("visible", true)
          entel.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 })
           entel.setAttribute("text",{
               shader: "msdf",
               anchor: "left",
               font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
               width: 1.2,
               height: 2,
               color: "#fff",
               value: item.description
           })
          return entel
     }

})