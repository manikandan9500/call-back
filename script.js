setTimeout(()=>{
    console.log("5");
    setTimeout(()=>{
        console.log("4");
        setTimeout(()=>{
            console.log("3");
            setTimeout(()=>{
                console.log("2");
                setTimeout(()=>{
                    console.log("1");
                    setTimeout(() => {
                        console.log("HAPPY INDEPENDENCE DAY");
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);

},1000);
