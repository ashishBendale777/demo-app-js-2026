//Create Page using JS DOM
document.body.style.height = "100vh"
document.body.style.width = "100vw"
// document.body.style.backgroundColor = "red"
document.body.style.display = "flex"
document.body.style.justifyContent = "center"
document.body.style.alignItems = "center"


let homeContainer = document.createElement("div")
homeContainer.style.height = "80%"
homeContainer.style.width = "80%"
homeContainer.style.backgroundColor = "green"
homeContainer.style.display = "flex"
homeContainer.style.padding = "12px"
homeContainer.style.gap="22px"

let aboutContainer = document.createElement("div")
aboutContainer.style.flex = "1"

let missionContainer = document.createElement("div")
missionContainer.style.flex = "1"

let hAbout = document.createElement("h3")
hAbout.innerText = "About Us"
hAbout.style.textAlign = "center"

let pAbout = document.createElement("p")
pAbout.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias ipsa magnam perspiciatis non consequuntur quam nihil odio sint eligendi sit.Cum iusto libero itaque nisi perspiciatis beatae eveniet laudantium corrupti ? "


let hMission = document.createElement("h3")
hMission.innerText = "Our Mission"
hMission.style.textAlign = "center"


let pMission = document.createElement("p")
pMission.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Alias ipsa magnam perspiciatis non consequuntur quam nihil odio sint eligendi sit.Cum iusto libero itaque nisi perspiciatis beatae eveniet laudantium corrupti ? "


aboutContainer.appendChild(hAbout)
aboutContainer.appendChild(pAbout)

missionContainer.appendChild(hMission)
missionContainer.appendChild(pMission)

homeContainer.appendChild(aboutContainer)
homeContainer.appendChild(missionContainer)


document.body.appendChild(homeContainer)