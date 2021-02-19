        export let land = fetch("./json/land.json")
                .then (response => response.json())
                .then (data => {
                    return data;
                })