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
            return ` <div class="flex items-center gap-3 mx-3 px-[8%] py-[2%] border-b-1 border-gray-400">
                    <div class="w-3 h-3 rounded-sm bg-white"></div>
                    <p class="text-white">${milestone.name} 1</p>
                    <button><i class="fa-solid fa-angle-down" style="color: rgb(255, 255, 255);"></i></button>
                </div>

                <div class="hidden_panel">
                    <div class="module border-b-1">
                        <p>Module Name</p>
                    </div>
                </div>`
        }).join("")
    })
}
loadMilestones()