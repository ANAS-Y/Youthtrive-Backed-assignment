    <script>
        // Function definitions as provided above
        function calculateArea(length, width) {
            return length * width;
        }

        function reverseString(str) {
            return str.split('').reverse().join('');
        }

        function isEven(number) {
            return number % 2 === 0;
        }

        // Example usage
        console.log(calculateArea(5, 10)); // Outputs: 50
        console.log(reverseString("hello")); // Outputs: "olleh"
        console.log(isEven(4)); // Outputs: true
        console.log(isEven(5)); // Outputs: false
    </script>