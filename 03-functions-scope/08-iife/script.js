(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
})();

(function (name){
    console.log('Hello' + name);
}) ('Shawn')