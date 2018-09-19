let ctx = document.getElementById('myChart').getContext('2d');
let arrayOfNumbers = [5, 7, 3, 1];
let arrayOflabels = ["January", "February", "March", "April"]; 
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: arrayOflabels,
        datasets: [{
            label: ['Item 1', 'Item 2', 'Item 3'],
            backgroundColor: ['red', 'green', 'blue'],
            borderColor: 'black',
            data: arrayOfNumbers,
        }]
    },

    // Configuration options go here
    options: {}
});