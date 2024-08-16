export function add(numbers: string): number | string {
    let result: number = 0; // Return value initialization

    if (numbers) {
        // Check for custom delimiter
        let delimiter = ',|\n';
        if (numbers.startsWith('//')) {
            delimiter = numbers[2];
            numbers = numbers.substring(4); // Remove delimiter declaration
        }

        // Split numbers by delimiter, filter out non-numeric values, and parse numbers
        const nums = numbers
            .split(new RegExp(`[${delimiter}]`))
            .map(Number)
            .filter(num => !isNaN(num));

        // Check for negative numbers
        const negatives = nums.filter(num => num < 0);
        if (negatives.length > 0) {
            return `negative numbers not allowed: ${negatives.join(', ')}`;
        }

        // Sum up all valid numbers
        result = nums.reduce((sum, num) => sum + num, 0);
    }

    return result;
}
