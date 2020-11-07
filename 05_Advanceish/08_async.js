const uno = () => console.log(`I'm One`);

const des = () => {
    // This is knows as non Blocking IO, means nobody is blocking the code
    setTimeout(() => console.log('Woooo'), 3000)
    console.log(`I'm Two`);
}

const tres = () => console.log(`I'm Three`);

uno()
des()
tres()

