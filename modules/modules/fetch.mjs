        export function land(land) {

        console.log("val", land);

           let result =  fetch("./json/land.json")
            .then (response => response.json())
            .then (data => {
                return data,
                console.log("Variabel i fetch", land);
            })
            return result;
        } 