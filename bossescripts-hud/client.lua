Citizen.CreateThread(function()
    while true do
        Citizen.Wait(5000) /*You can chage this for the time it changes hunger, thirst, health and stamina*/

        local hunger = math.random(0, 100) 
        local thirst = math.random(0, 100)
        local health = math.random(0, 100)
        local stamina = math.random(0, 100)

        SendNUIMessage({
            type = 'updateStatus',
            hunger = hunger,
            thirst = thirst,
            health = health,
            stamina = stamina
        })
    end
end)
