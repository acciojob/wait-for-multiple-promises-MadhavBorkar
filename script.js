//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const outputTable = document.getElementById('output');

    // Helper function to create a promise that resolves after a random time between 1 and 3 seconds
    function createRandomPromise(index) {
        const delay = Math.floor(Math.random() * 3000) + 1000;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ index, delay });
            }, delay);
        });
    }

    // Create three promises
    const promises = [
        createRandomPromise(1),
        createRandomPromise(2),
        createRandomPromise(3)
    ];

    // Record the start time
    const startTime = performance.now();

    // Wait for all promises to resolve
    Promise.all(promises).then(results => {
        // Calculate the total time taken
        const totalTime = (performance.now() - startTime) / 1000;

        // Clear the table
        outputTable.innerHTML = '';

        // Populate the table with results
        results.forEach(result => {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            cell1.textContent = `Promise ${result.index}`;
            cell2.textContent = (result.delay / 1000).toFixed(3);
            row.appendChild(cell1);
            row.appendChild(cell2);
            outputTable.appendChild(row);
        });

        // Add the total time row
        const totalRow = document.createElement('tr');
        const totalCell1 = document.createElement('td');
        const totalCell2 = document.createElement('td');
        totalCell1.textContent = 'Total';
        totalCell2.textContent = totalTime.toFixed(3);
        totalRow.appendChild(totalCell1);
        totalRow.appendChild(totalCell2);
        outputTable.appendChild(totalRow);
    });
});