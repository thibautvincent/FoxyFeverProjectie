((document) => {

    const secondHand = document.querySelector('.hand-second');
    const minuteHand = document.querySelector('.hand-minute');
    const hourHand = document.querySelector('.hand-hour');

    let rotations = [0, 0, 0]; // [seconds, minutes, hours]

    function setTime() {
        const now = new Date();

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

        if ((hours === 9 || hours === 11 || hours === 12 || hours === 2 || hours === 3) && (minutes <=1)) {
            showAction(hours);
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

    function showAction(hours) {
        document.getElementById('clock').style.display = 'none';
        document.body.style.backgroundImage = "url('images/" + hours + ".png')";
        document.body.style.backgroundSize= 'cover';
    }

    function hideAction() {
        document.getElementById('clock').style.display = 'inline';
        document.body.style.backgroundImage = 'url("images/vos.png")';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundColor = 'rgba(14,14,32,1)';
        document.body.style.backgroundSize = '1000px 1000px';
    }

    setTime();
    setInterval(setTime, 1000);
})(document);
