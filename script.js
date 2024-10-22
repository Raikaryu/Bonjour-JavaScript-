const name = prompt("Quel est ton nom ?")
function sayHello (firstname)
{
    const heureReference = "18:00"
    const time = updateDateTime()
    console.log(time)
    if (time < heureReference ) {
      let message = "Bonjour" + " " + firstname + " !"
      document.querySelector('h1').innerText = message; 
    }  
    else {
      let message = "Bonsoir" + " " + firstname + " !"
      document.querySelector('h1').innerText = message;
      }
}
function updateDateTime() {
    const now = new Date();
    const currentLocalHours = now.getHours()
    const currentLocalMinutes = now.getMinutes()
    const hoursAndMinutes = `${currentLocalHours}:${currentLocalMinutes}`
    const message = ("il est actuellement " + hoursAndMinutes + " h")
    document.querySelector('h2').innerText = message;
    return hoursAndMinutes
} 


sayHello(name)
