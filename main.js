((document) => {
    const promos = [
        {
            'start': '21:30',
            'end': '23:00',
            'title': '10 pinten',
            'price': '€10',
        },
        {
            'start': '00:00',
            'end': '01:00',
            'title': 'Rouge',
            'price': '€2,5',
        },
        {
            'start': '01:00',
            'end': '02:00',
            'title': 'Vodka Redbull',
            'price': '€3',
        },
        {
            'start': '02:00',
            'end': '03:00',
            'title': 'Passoa',
            'price': '€3',
        },
        {
            'start': '03:00',
            'end': '04:00',
            'title': 'Blue Thrill',
            'price': '€2',
        },
    ];

    let rotations = [0, 0, 0]; // [seconds, minutes, hours]

    function getCurrentPromo(now) {
        for (let index in promos) {
            const promo = promos[index];
            let startTime = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${promo.start}`);
            let endTime = new Date(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${promo.end}`);
            if (startTime <= now && now <= endTime) {
                return promo;
            }
        }
        return false;
    }

    function updateInterface() {
        let now = new Date();

        //now = new Date(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} 22:05`);

        const currentPromo = getCurrentPromo(now);
        if (currentPromo !== false && now.getMinutes() % 5 == 0) {
            showAction(currentPromo);
            return;
        }

        hideAction();

        updateClock(now);
    }

    function updateClock(now) {

        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours() % 12;

        if (seconds === 0) {
            rotations[0]++;
        }

        if (minutes === 0 && seconds === 0) {
            rotations[1]++;
        }

        if (hours === 0 && minutes === 0 && seconds === 0) {
            rotations[2]++;
        }

        const secondsDeg = (seconds / 60 * 360) + (rotations[0] * 360);
        const minutesDeg = (minutes / 60 * 360) + (rotations[1] * 360);
        const hoursDeg = (hours / 12 * 360) + (minutes / 60 * 30) + (rotations[2] * 360);

        const secondHand = document.querySelector('.hand-second');
        const minuteHand = document.querySelector('.hand-minute');
        const hourHand = document.querySelector('.hand-hour');

        secondHand.style.transform = `rotate(${secondsDeg}deg)`;
        minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
        hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    }

    function showAction(promo) {
        document.getElementById('clock').style.display = 'none';
        document.body.style.backgroundImage = "url('images/promo_background.jpg')";
        document.body.style.backgroundSize = 'cover';
        var spanElement = document.getElementById('promo');
        const content = `${promo.start} - ${promo.end}</br>${promo.title} = ${promo.price}`;
        spanElement.innerHTML = content;
        spanElement.style.display = 'block';
    }

    function hideAction() {
        document.getElementById('clock').style.display = 'inline';
        document.body.style.backgroundImage = 'url("images/vos.png")';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundColor = 'rgba(14,14,32,1)';
        document.body.style.backgroundSize = '1000px 1000px';
        document.getElementById('clock').style.opacity = '0.2';
        document.getElementById('promo').style.display = 'none';

    }

    updateInterface();
    setInterval(updateInterface, 1000);
})(document);
