const form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let country = document.getElementById('country').value

    let url = "https://api.covid19api.com/total/dayone/country/" + country

    covidData(url)
})

async function covidData(url) {
    let response = await fetch(url)
    let data = await response.json()
    // console.log(data)

    let length = data.length

    let index = length - 1

    let confirmed = document.getElementById("confirmd")
    let recoverd = document.getElementById("recoverd")
    let deaths = document.getElementById("deaths")

    confirmed.innerHTML = ""
    recoverd.innerHTML = ""
    deaths.innerHTML = ""

    confirmed.append("" + data[index].Confirmed.toLocaleString('en'))
    recoverd.append("" + data[index].Recovered.toLocaleString('en'))
    deaths.append("" + data[index].Deaths.toLocaleString('en'))


}




