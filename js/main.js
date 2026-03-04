const milestonesData = JSON.parse(data).data
console.log(milestonesData)

function loadMilestones() {
    // const milestones = document.querySelector('.milestones');

    // milestones.innerHTML = `${milestonesData.map(function (milestone) {
    //     return `<div class="flex items-center gap-3 mx-3 px-[8%] py-[2%] border-b-1 border-gray-400">
    //                 <div class="w-3 h-3 rounded-sm bg-white"></div>
    //                 <p class="text-white">${milestone.name}</p>
    //                 <button><i class="fa-solid fa-angle-down" style="color: rgb(255, 255, 255);"></i></button>
    //             </div>

    //             <div class="hidden_panel">
    //                 <div class="module border-b-1">
    //                     <p>Module Name</p>
    //                 </div>
    //             </div>`
    // }).join("")}`

    document.querySelectorAll('.milestones').forEach(milestones => {
        milestones.innerHTML = milestonesData.map(function (milestone) {
            return ` <div class="visiblePanel flex items-center gap-3 mx-3 px-[8%] py-[2%] border-b-1 border-gray-400">
                    <input type="checkbox" name="" id="">
                    <p class="text-white">${milestone.name} 1</p>
                    <button onclick="displayModule(this, ${milestone._id})"><i class="fa-solid fa-angle-down" style="color: rgb(255, 255, 255);"></i></button>
                </div>

                <div class="hidden hiddenPanel mt-2 ml-25 mr-5">
                ${milestone.modules
                    .map(function (module) {
                        return `<div class="module mt-2 cursor-pointer rounded-xl p-2 shadow shadow-slate-50 transition-all ease-in-out hover:-translate-y-1 hover:scale-105">
                        <p class="text-white">${module.name}</p>
                    </div>`
                    }).join("")
                }
                </div>`
        }).join("")
    })
}

function displayModule(module, id) {
    const currentPanel = module.parentNode.nextElementSibling
    const currentMilestone = module.parentNode

    if (currentPanel.classList.contains("hidden")) {

        document.querySelectorAll('.hiddenPanel').forEach(panel => {
            panel.classList.add('hidden');
        });

        document.querySelectorAll('.visiblePanel').forEach(milestone => {
            milestone.classList.remove('font-bold');
        });

        currentPanel.classList.remove("hidden")
        currentMilestone.classList.add('font-bold')
    }
    // if the currently clicked milestone is currently open it will close it and vice-versa.
    else {
        currentPanel.classList.toggle("hidden")
        currentMilestone.classList.toggle("font-bold")
    }

    showMilestoneImage(id)
}

const milestoneImage = document.querySelector('.milestoneImage')

function showMilestoneImage(id){
    const milestoneTitle = document.querySelector('.milestoneTitle')
    const milestoneParagraph = document.querySelector('.milestoneParagraph')

    milestoneImage.style.opacity = '0'
    milestoneImage.src = milestonesData[id].image
    milestoneTitle.textContent = milestonesData[id].name
    milestoneParagraph.textContent = milestonesData[id].description
    console.log(milestoneParagraph.textContent = milestonesData[id].description)
}

milestoneImage.onload = function() {
    this.style.opacity ='1'
}

loadMilestones()