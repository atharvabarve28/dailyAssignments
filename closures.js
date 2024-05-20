function x() {
    var x1 = 10;
    function y() {
        var y1 = 20;
        function z() {
            console.log(x1, y1);
        }
        z(); // Returning z from y
    }
    y(); // Returning y from x
}

const yFunction = x(); // Call x and get y
yFunction();
// Call y and get z

