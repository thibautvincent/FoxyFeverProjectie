((document) => {

    const secondHand = document.querySelector('.hand-second');
    const minuteHand = document.querySelector('.hand-minute');
    const hourHand = document.querySelector('.hand-hour');
    const promos = {
		10: {title : '21u-23u<br/>10 pinten = €10<br/>(à houten planken van 9)'},
		11: {title : '23u-00u<br/>Passoa'},
		0: {title : '00u-01u<br/>Duvel & Rougekes'},
		1: {title : '01u-02u<br/>Shotjes €1<br/>(Appel-, vanille- & bessenjenever)'},
		2: {title : '02u-03u<br/>Wijn'},
		3: {title : '03u-04u<br/>Ginto\'s'},
	};

    let rotations = [0, 0, 0]; // [seconds, minutes, hours]

    function setTime() {
        const now = new Date();

        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours() % 12;
        const timeToShowPromo = 5;

        if (seconds === 0) {
            rotations[0]++;
        }

        if (minutes === 0 && seconds === 0) {
            rotations[1]++;
        }

        if (hours === 0 && minutes === 0 && seconds === 0) {
            rotations[2]++;
        }

		if (promos.hasOwnProperty(hours) && (minutes <= timeToShowPromo)) {
            showAction(promos[hours].title.toString());
        } else {
            hideAction();
        }

        const secondsDeg = (seconds / 60 * 360) + (rotations[0] * 360);
        const minutesDeg = (minutes / 60 * 360) + (rotations[1] * 360);
        const hoursDeg = (hours / 12 * 360) + (minutes / 60 * 30) + (rotations[2] * 360);

        secondHand.style.transform = `rotate(${secondsDeg}deg)`;
        minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
        hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    }

    function showAction(title) {
        document.getElementById('clock').style.display = 'none';
        document.body.style.backgroundImage = "url('images/promo_background.jpg')";
        document.body.style.backgroundSize= 'cover';
        var spanElement = document.getElementById('promo');
        spanElement.style.display = 'block';
        spanElement.innerHTML = title;
        spanElement.style.color = 'white';
        spanElement.style.fontSize = '90px';
        spanElement.style.fontWeight = 'bold';
        spanElement.style.textAlign = 'center';
    }

    function hideAction() {
        document.getElementById('clock').style.display = 'inline';
        document.body.style.backgroundImage = 'url("images/vos.png")';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundColor = 'rgba(14,14,32,1)';
        document.body.style.backgroundSize = '1000px 1000px';
        document.getElementById('promo').style.display = 'none';

    }

    setTime();
    setInterval(setTime, 1000);
})(document);
