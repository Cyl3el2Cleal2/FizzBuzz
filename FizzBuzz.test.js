const FizzBuzz = require('./FizzBuzz');
test('1 = 1', ()=>{
    const fb = new FizzBuzz();
    expect(fb.fizzBuzz(1)).toBe('1')
});

test('2 = 2', ()=>{
    const fb = new FizzBuzz();
    expect(fb.fizzBuzz(2)).toBe('2')
});


test('3 = fizz' , ()=>{
    const fb = new FizzBuzz();
    expect(fb.fizzBuzz(3)).toBe('fizz')
});

test('5 = buzz',()=>{
    const fb = new FizzBuzz();
    expect(fb.fizzBuzz(5)).toBe('buzz')
});

test('6 = fizz' , ()=>{
    const fb = new FizzBuzz();
    expect(fb.fizzBuzz(6)).toBe('fizz')
});

test('15 = fizzbuzz',()=>{
    const fb = new FizzBuzz();
    expect(fb.fizzBuzz(15)).toBe('fizzbuzz')
    expect(fb.fizzBuzz(51)).toBe('fizzbuzz')
})



